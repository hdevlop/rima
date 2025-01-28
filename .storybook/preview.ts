import type { Preview } from "@storybook/react";
import { ModeDecorator } from "./modeDecorator";
import '../src/index.css';
export const decorators = [ModeDecorator];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
