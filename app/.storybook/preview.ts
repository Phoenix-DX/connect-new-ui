import type { Preview } from '@storybook/react-vite';
import '../src/styles/review.css';
import { setReviewMarkers } from '../src/legacy/os/reviewMarkers';
import { clearFlagOverrides } from '../src/platform/flags';

/* Storybook is a review tool: review markers on, as with `?review=1` on the dev server. */
setReviewMarkers(true);

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
