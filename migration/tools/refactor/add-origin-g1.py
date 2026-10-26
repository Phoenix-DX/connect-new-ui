"""P6-G1-A: prepend the @origin JSDoc tag to the G1 page files."""
import pathlib
M = {
 'Login': 'App_Common', 'Splash': 'App_Common', 'PINRegister': 'App_PIN', 'PINUnlock': 'App_PIN', 'PINChange': 'App_PIN',
 'PINBiometricsMenu': 'App_Menu', 'AcceptPendingPolicies': 'App_Policies', 'Menu': 'App_Menu',
 'TermsAndPoliciesMenu': 'App_Menu', 'Profile': 'App_Profile',
}
for r, flow in M.items():
    p = pathlib.Path('app/src/pages') / r / f'{r}Page.tsx'
    t = p.read_text()
    if '@origin' not in t:
        p.write_text(f'/** @origin UBTConnect.{flow}.{r} */\n' + t)
