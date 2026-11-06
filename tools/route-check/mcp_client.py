"""Read-only client of the Service Studio MCP server (HTTP JSON-RPC), with a file cache.

Only `get*` tools are allowed. The session token comes from the environment variable MCP_TOKEN (create it with the
MCP tool `createSessionToken`); it is never written to a file. The model is DEV: reference only, TST wins (CLAUDE.md).

Cache: migration/route-check/.cache/raw/mcp/<module>/<tool>/<name>.txt (gitignored).
"""
import json, os, re, urllib.request

MCP_URL = os.environ.get("MCP_URL", "http://127.0.0.1:41820/mcp")
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))  # the repository root
CACHE = os.path.join(ROOT, "migration", "route-check", ".cache", "raw", "mcp")


class McpError(RuntimeError):
    pass


class NotOpen(McpError):
    """The module is not open in Service Studio. The user opens it; the tool does not guess its content."""


def call(tool, inp, timeout=180):
    if not tool.startswith("get"):
        raise McpError(f"read-only client: tool {tool} is not allowed")
    token = os.environ.get("MCP_TOKEN")
    if not token:
        raise McpError("MCP_TOKEN is not set (createSessionToken in the Claude session)")
    body = {"jsonrpc": "2.0", "id": 1, "method": "tools/call",
            "params": {"name": tool, "arguments": {"sessionToken": token, "input": inp}}}
    req = urllib.request.Request(MCP_URL, data=json.dumps(body).encode(), headers={
        "Content-Type": "application/json", "Accept": "application/json, text/event-stream", "SessionToken": token})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        txt = r.read().decode()
    data = None
    for line in txt.splitlines():
        if line.startswith("data: "):
            data = json.loads(line[6:])
    if data is None:
        data = json.loads(txt)
    if "error" in data:
        err = json.dumps(data["error"])[:300]
        raise (NotOpen if "No module is currently open" in err else McpError)(err)
    res = data.get("result", {})
    content = res.get("content") or []
    text = "".join(c.get("text", "") for c in content if c.get("type") == "text")
    if "No module is currently open" in text:
        raise NotOpen(text[:300])
    if res.get("isError"):
        raise McpError(text[:300])
    try:
        inner = json.loads(text)
        if isinstance(inner, dict) and "result" in inner and len(inner) == 1:
            text = inner["result"] if isinstance(inner["result"], str) else json.dumps(inner["result"])
    except ValueError:
        pass
    return re.sub(r"```$", "", re.sub(r"^```\w*\s*", "", text.strip())).strip()


def cached(tool, module, name, inp, refresh=False):
    """Return the tool text from the cache, or call MCP and cache it. Errors are raised, not cached."""
    path = os.path.join(CACHE, module, tool, f"{name}.txt")
    if os.path.exists(path) and not refresh:
        return open(path, encoding="utf-8").read()
    text = call(tool, inp)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, "w", encoding="utf-8").write(text)
    return text


def screen_names(module="UBTConnect"):
    return json.loads(cached("getScreenNames", module, "_all", {"eSpaceName": module}))


def element_code(kind, module, name):
    """Model API code of a screen, block, server action or service action."""
    tool = {"screen": "getScreen", "block": "getWebBlock", "server": "getServerAction", "service": "getServiceAction"}[kind]
    return cached(tool, module, name, {"eSpaceName": module, "objectName": name, "includeJson": "Never"})


if __name__ == "__main__":
    import sys
    s = screen_names(sys.argv[1] if len(sys.argv) > 1 else "UBTConnect")
    print(len(s), "screens;", s[0])
