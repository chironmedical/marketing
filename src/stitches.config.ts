import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      deepblue600: 'rgb(11, 37, 69)'
    },
    radii: {
      custom: '22px'
    }
  },
  media: {
    bp1: '(min-width: 480px)',
  },
});