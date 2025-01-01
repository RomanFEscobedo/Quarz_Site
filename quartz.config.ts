import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Roman Escobedo",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lexend",
        body: "STIX Two Text",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fffcf0",
          lightgray: "#f2f0e5",
          gray: "#B7B5AC",
          darkgray: "#100f0f",
          dark: "#100f0f",
          secondary: "#205EA6",
          tertiary: "#4385BE",
          highlight: "rgba(0, 0, 0, 0)",
          textHighlight: "#AD8301",
          re: `rgb(175, 48, 41)`,   // "#AF3029"
          or: `rgb(188, 82, 21)`,   // "#BC5215"
          ye: `rgb(173, 131, 1)`,   // "#AD8301"
          gr: `rgb(102, 128, 11)`,  // "#66800B"
          cy: `rgb(36, 131, 123)`,  // "#24837B"
          bl: `rgb(32, 94, 166)`,   // "#205EA6"
          pu: `rgb(94, 64, 157)`,   // "#5E409D"
          ma: `rgb(160, 47, 111)`,  // "#A02F6F"
          re2: `rgb(209, 77, 65)`,  // "#D14D41"
          or2: `rgb(218, 112, 44)`, // "#DA702C"
          ye2: `rgb(208, 162, 21)`, // "#D0A215"
          gr2: `rgb(135, 154, 57)`, // "#879A39"
          cy2: `rgb(58, 169, 159)`, // "#3AA99F"
          bl2: `rgb(67, 133, 190)`, // "#4385BE"
          pu2: `rgb(139, 126, 200)`, // "#8B7EC8"
          ma2: `rgb(206, 93, 151)`,  // "#CE5D97"
          opacityRe: `rgba(175, 48, 41, 0.13)`,   // "#BC5215"
          opacityOr: `rgba(188, 82, 21, 0.13)`,   // "#AF3029"
          opacityYe: `rgba(173, 131, 1, 0.13)`,   // "#AD8301"
          opacityGr: `rgba(102, 128, 11, 0.13)`,  // "#66800B"
          opacityCy: `rgba(36, 131, 123, 0.13)`,  // "#24837B"
          opacityBl: `rgba(32, 94, 166, 0.13)`,   // "#205EA6"
          opacityPu: `rgba(94, 64, 157, 0.13)`,   // "#5E409D"
          opacityMa: `rgba(160, 47, 111, 0.13)`,  // "#A02F6F"
          opacityRe2: `rgba(209, 77, 65, 0.13)`,  // "#D14D41"
          opacityOr2: `rgba(218, 112, 44, 0.13)`, // "#DA702C"
          opacityYe2: `rgba(208, 162, 21, 0.13)`, // "#D0A215"
          opacityGr2: `rgba(135, 154, 57, 0.13)`, // "#879A39"
          opacityCy2: `rgba(58, 169, 159, 0.13)`, // "#3AA99F"
          opacityBl2: `rgba(67, 133, 190, 0.13)`, // "#4385BE"
          opacityPu2: `rgba(139, 126, 200, 0.13)`, // "#8B7EC8"
          opacityMa2: `rgba(206, 93, 151, 0.13)`,  // "#CE5D97"
        },
        darkMode: {
          light: "#100F0F",
          lightgray: "#1C1B1A",
          gray: "#878580",
          darkgray: "#CECDC3",
          dark: "#CECDC3",
          secondary: "#4385BE",
          tertiary: "#205EA6",
          highlight: "rgba(0, 0, 0, 0)",
          textHighlight: "#D0A215",
          re: `rgb(209, 77, 65)`,   // "#D14D41"
          or: `rgb(218, 112, 44)`,  // "#DA702C"
          ye: `rgb(208, 162, 21)`,  // "#D0A215"
          gr: `rgb(135, 154, 57)`,  // "#879A39"
          cy: `rgb(58, 169, 159)`,  // "#3AA99F"
          bl: `rgb(67, 133, 190)`,  // "#4385BE"
          pu: `rgb(139, 126, 200)`, // "#8B7EC8"
          ma: `rgb(206, 93, 151)`,  // "#CE5D97"
          re2: `rgb(175, 48, 41)`,  // "#AF3029"
          or2: `rgb(188, 82, 21)`,  // "#BC5215"
          ye2: `rgb(173, 131, 1)`,  // "#AD8301"
          gr2: `rgb(102, 128, 11)`, // "#66800B"
          cy2: `rgb(36, 131, 123)`, // "#24837B"
          bl2: `rgb(32, 94, 166)`,  // "#205EA6"
          pu2: `rgb(94, 64, 157)`,  // "#5E409D"
          ma2: `rgb(160, 47, 111)`,   // "#A02F6F"
          opacityRe: `rgba(209, 77, 65, 0.13)`,  // "#D14D41"
          opacityOr: `rgba(218, 112, 44, 0.13)`, // "#DA702C"
          opacityYe: `rgba(208, 162, 21, 0.13)`,  // "#D0A215"
          opacityGr: `rgba(135, 154, 57, 0.13)`,  // "#879A39"
          opacityCy: `rgba(58, 169, 159, 0.13)`,  // "#3AA99F"
          opacityBl: `rgba(67, 133, 190, 0.13)`,  // "#4385BE"
          opacityPu: `rgba(139, 126, 200, 0.13)`, // "#8B7EC8"
          opacityMa: `rgba(206, 93, 151, 0.13)`,  // "#CE5D97"
          opacityRe2: `rgba(188, 82, 21, 0.13)`,   // "#BC5215"
          opacityOr2: `rgba(175, 48, 41, 0.13)`,   // "#AF3029"
          opacityYe2: `rgba(173, 131, 1, 0.13)`,   // "#AD8301"
          opacityGr2: `rgba(102, 128, 11, 0.13)`,  // "#66800B"
          opacityCy2: `rgba(36, 131, 123, 0.13)`,  // "#24837B"
          opacityBl2: `rgba(32, 94, 166, 0.13)`,   // "#205EA6"
          opacityPu2: `rgba(94, 64, 157, 0.13)`,   // "#5E409D"
          opacityMa2: `rgba(160, 47, 111, 0.13)`,  // "#A02F6F"
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({ maxDepth: 2 }),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
