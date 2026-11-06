/*
 * readonly_guard.cjs: read-only guard for scripts that open the real app (same rule as record_har.cjs).
 * A screenservice POST passes only when its action name looks like a read: DataAction*, ScreenDataSet*, Aggregate*,
 * Action(Get|List|Load|Fetch|Search|Find|Read|Count)<Word> with no write verb in the name, or a name the user confirmed
 * as non-writing (allow list). Calls made while ctx.__authing is set (automatic sign-in / PIN unlock) pass.
 * Every other call is aborted and its name kept in ctx.__blocked.
 */
const READ = /^(DataAction|ScreenDataSet|Aggregate)[A-Z0-9_]|^Action(Get|List|Load|Fetch|Search|Find|Read|Count)(?=[A-Z0-9_]|$)/;
const WRITE = /(Save|Create|Update|Delete|Remove|Submit|Send|Set(?![a-z])|Add|Insert|Upsert|Mark|Approve|Reject|Cancel|Confirm|Register|Login|Logout|Reset|Change|Assign|Upload|Post|Put|Patch|Sync|Check(In|Out)|Pay|Book|Accept|Invite|Join|Leave|Start|Stop|Finish|Complete|Close|Lock|Unlock|Enable|Disable|Toggle|Track|Log(?![a-z])|Increment|Decrement|Store|Write|Generate|Process|Execute|Run|Trigger|Notify|Subscribe|Unsubscribe|Archive|Restore|Move|Copy|Import|Export|Merge|Link|Unlink|Grant|Revoke|Claim|Redeem|Consume|Ack)/;
const isRead = name => READ.test(name) && !(name.startsWith('Action') && WRITE.test(name.slice(6)));
const actionOf = url => new URL(url).pathname.split('/').pop();

async function installGuard(ctx, allow = new Set()) {
  ctx.__blocked = [];
  ctx.__authing = false;
  await ctx.route('**/screenservices/**', route => {
    const req = route.request();
    const name = actionOf(req.url());
    if (ctx.__authing || req.method() !== 'POST' || isRead(name) || allow.has(name)) return route.continue();
    ctx.__blocked.push(name);
    return route.abort('blockedbyclient');
  });
}

module.exports = { READ, WRITE, isRead, actionOf, installGuard };
