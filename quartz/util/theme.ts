export interface ColorScheme {
  light: string
  lightgray: string
  gray: string
  darkgray: string
  dark: string
  secondary: string
  tertiary: string
  highlight: string
  textHighlight: string
  re: string
  or: string
  ye: string
  gr: string
  cy: string
  bl: string
  pu: string
  ma: string
  re2: string
  or2: string
  ye2: string
  gr2: string
  cy2: string
  bl2: string
  pu2: string
  ma2: string
  opacityRe: string
  opacityOr: string
  opacityYe: string
  opacityGr: string
  opacityCy: string
  opacityBl: string
  opacityPu: string
  opacityMa: string
  opacityRe2: string
  opacityOr2: string
  opacityYe2: string
  opacityGr2: string
  opacityCy2: string
  opacityBl2: string
  opacityPu2: string
  opacityMa2: string
}

interface Colors {
  lightMode: ColorScheme
  darkMode: ColorScheme
}

export interface Theme {
  typography: {
    header: string
    body: string
    code: string
  }
  cdnCaching: boolean
  colors: Colors
  fontOrigin: "googleFonts" | "local"
}

export type ThemeKey = keyof Colors

const DEFAULT_SANS_SERIF =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
const DEFAULT_MONO = "ui-monospace, SFMono-Regular, SF Mono, Menlo, monospace"

export function googleFontHref(theme: Theme) {
  const { code, header, body } = theme.typography
  return `https://fonts.googleapis.com/css2?family=${code}&family=${header}:wght@400;700&family=${body}:ital,wght@0,400;0,600;1,400;1,600&display=swap`
}

export function joinStyles(theme: Theme, ...stylesheet: string[]) {
  return `
${stylesheet.join("\n\n")}

:root {
  --light: ${theme.colors.lightMode.light};
  --lightgray: ${theme.colors.lightMode.lightgray};
  --gray: ${theme.colors.lightMode.gray};
  --darkgray: ${theme.colors.lightMode.darkgray};
  --dark: ${theme.colors.lightMode.dark};
  --secondary: ${theme.colors.lightMode.secondary};
  --tertiary: ${theme.colors.lightMode.tertiary};
  --highlight: ${theme.colors.lightMode.highlight};
  --textHighlight: ${theme.colors.lightMode.textHighlight};
  --re: ${theme.colors.lightMode.re};
  --or: ${theme.colors.lightMode.or};
  --ye: ${theme.colors.lightMode.ye};
  --gr: ${theme.colors.lightMode.gr};
  --cy: ${theme.colors.lightMode.cy};
  --bl: ${theme.colors.lightMode.bl};
  --pu: ${theme.colors.lightMode.pu};
  --ma: ${theme.colors.lightMode.ma};
  --re2: ${theme.colors.lightMode.re2};
  --or2: ${theme.colors.lightMode.or2};
  --ye2: ${theme.colors.lightMode.ye2};
  --gr2: ${theme.colors.lightMode.gr2};
  --cy2: ${theme.colors.lightMode.cy2};
  --bl2: ${theme.colors.lightMode.bl2};
  --pu2: ${theme.colors.lightMode.pu2};
  --ma2: ${theme.colors.lightMode.ma2};
  --opacityRe: ${theme.colors.lightMode.opacityRe};
  --opacityOr: ${theme.colors.lightMode.opacityOr};
  --opacityYe: ${theme.colors.lightMode.opacityYe};
  --opacityGr: ${theme.colors.lightMode.opacityGr};
  --opacityCy: ${theme.colors.lightMode.opacityCy};
  --opacityBl: ${theme.colors.lightMode.opacityBl};
  --opacityPu: ${theme.colors.lightMode.opacityPu};
  --opacityMa: ${theme.colors.lightMode.opacityMa};
  --opacityRe2: ${theme.colors.lightMode.opacityRe2};
  --opacityOr2: ${theme.colors.lightMode.opacityOr2};
  --opacityYe2: ${theme.colors.lightMode.opacityYe2};
  --opacityGr2: ${theme.colors.lightMode.opacityGr2};
  --opacityCy2: ${theme.colors.lightMode.opacityCy2};
  --opacityBl2: ${theme.colors.lightMode.opacityBl2};
  --opacityPu2: ${theme.colors.lightMode.opacityPu2};
  --opacityMa2: ${theme.colors.lightMode.opacityMa2};


  --headerFont: "${theme.typography.header}", ${DEFAULT_SANS_SERIF};
  --bodyFont: "${theme.typography.body}", ${DEFAULT_SANS_SERIF};
  --codeFont: "${theme.typography.code}", ${DEFAULT_MONO};
}

:root[saved-theme="dark"] {
  --light: ${theme.colors.darkMode.light};
  --lightgray: ${theme.colors.darkMode.lightgray};
  --gray: ${theme.colors.darkMode.gray};
  --darkgray: ${theme.colors.darkMode.darkgray};
  --dark: ${theme.colors.darkMode.dark};
  --secondary: ${theme.colors.darkMode.secondary};
  --tertiary: ${theme.colors.darkMode.tertiary};
  --highlight: ${theme.colors.darkMode.highlight};
  --textHighlight: ${theme.colors.darkMode.textHighlight};
  --re: ${theme.colors.darkMode.re};
  --or: ${theme.colors.darkMode.or};
  --ye: ${theme.colors.darkMode.ye};
  --gr: ${theme.colors.darkMode.gr};
  --cy: ${theme.colors.darkMode.cy};
  --bl: ${theme.colors.darkMode.bl};
  --pu: ${theme.colors.darkMode.pu};
  --ma: ${theme.colors.darkMode.ma};
  --re2: ${theme.colors.darkMode.re2};
  --or2: ${theme.colors.darkMode.or2};
  --ye2: ${theme.colors.darkMode.ye2};
  --gr2: ${theme.colors.darkMode.gr2};
  --cy2: ${theme.colors.darkMode.cy2};
  --bl2: ${theme.colors.darkMode.bl2};
  --pu2: ${theme.colors.darkMode.pu2};
  --ma2: ${theme.colors.darkMode.ma2};
  --opacityRe: ${theme.colors.darkMode.opacityRe};
  --opacityOr: ${theme.colors.darkMode.opacityOr};
  --opacityYe: ${theme.colors.darkMode.opacityYe};
  --opacityGr: ${theme.colors.darkMode.opacityGr};
  --opacityCy: ${theme.colors.darkMode.opacityCy};
  --opacityBl: ${theme.colors.darkMode.opacityBl};
  --opacityPu: ${theme.colors.darkMode.opacityPu};
  --opacityMa: ${theme.colors.darkMode.opacityMa};
  --opacityRe2: ${theme.colors.darkMode.opacityRe2};
  --opacityOr2: ${theme.colors.darkMode.opacityOr2};
  --opacityYe2: ${theme.colors.darkMode.opacityYe2};
  --opacityGr2: ${theme.colors.darkMode.opacityGr2};
  --opacityCy2: ${theme.colors.darkMode.opacityCy2};
  --opacityBl2: ${theme.colors.darkMode.opacityBl2};
  --opacityPu2: ${theme.colors.darkMode.opacityPu2};
  --opacityMa2: ${theme.colors.darkMode.opacityMa2};
}
`
}
