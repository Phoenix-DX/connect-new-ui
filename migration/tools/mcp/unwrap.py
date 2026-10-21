"""Turn a saved getSerializedObject tool result (OutSystems MCP, module UBTConnect) into plain JSON.

How the input is made: in a Claude session, call the OutSystems MCP tool `getSerializedObject` with eSpaceName
"UBTConnect" (read-only). The result (~13.5 MB) is saved by Claude Code under the session's tool-results folder; copy it.
Usage: python3 migration/tools/mcp/unwrap.py <tool-result.txt> <out espace.json>
The model is DEV (Service Studio): reference only; TST is the source of truth (CLAUDE.md).
"""
import json, re, sys
raw = json.loads(open(sys.argv[1], encoding="utf-8").read())
if isinstance(raw, list):
    raw = json.loads(raw[0]["text"])
txt = re.sub(r"```$", "", re.sub(r"^```json\s*", "", raw["result"].strip()).strip())
json.dump(json.loads(txt), open(sys.argv[2], "w"))
print("ok", sys.argv[2])
