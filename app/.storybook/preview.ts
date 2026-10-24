import type { Preview } from '@storybook/react-vite';
import '../src/styles/review.css';
import { setReviewMarkers } from '../src/legacy/os/reviewMarkers';
import { clearFlagOverrides } from '../src/platform/flags';
import { connectDialogs } from '../src/app/dialogs';

/* Storybook is a review tool: review markers on, as with `?review=1` on the dev server. */
setReviewMarkers(true);
/* The dialogs of components/ui/Dialog with their platform triggers, as main.tsx does (app/dialogs.ts). */
connectDialogs();

/* Stories render inside the captured body classes, like the app (index.html), with the default flags: a story that
   needs other flag values adds withFlags (withFlags.ts), which runs after this decorator. */
const preview: Preview = {
  decorators: [
    (Story) => {
      document.body.className = 'phone portrait osx is-ltr';
      clearFlagOverrides();
      return Story();
    },
  ],
};
export default preview;
