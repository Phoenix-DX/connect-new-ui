import type { Preview } from '@storybook/react-vite';
import '../src/styles/review.css';
import { setReviewMarkers } from '../src/legacy/os/reviewMarkers';

/* Storybook is a review tool: review markers on, as with `?review=1` on the dev server. */
setReviewMarkers(true);

/* Stories render inside the captured body classes, like the app (index.html). */
const preview: Preview = {
  decorators: [
    (Story) => {
      document.body.className = 'phone portrait osx is-ltr';
      return Story();
    },
  ],
};
export default preview;
