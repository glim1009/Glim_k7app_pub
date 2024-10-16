// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Life Changing Experience, 고객의 마음속 첫번째 편의점 세븐일레븐",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" },
        { "http-equiv": "X-UA-Compatible", "content": "IE=edge" },
        { "http-equiv": "Content-Type", "content": "text/html; charset=utf-8" },
        { "http-equiv": "imagetoolbar", "content": "no" },
        { name: "Author", content: "http://www.7-eleven.co.kr" },
        { name: "keywords", content: "7-ELEVEN, 세븐일레븐" },
        { name: "description", content: "세븐일레븐" },
      ],
      htmlAttrs: {
        lang: "ko",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css",
        },
      ],
    },
  },

  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-swiper",
  ],

  shadcn: {
    prefix: "Ui",
    componentDir: "./components/ui",
  },

  css: [
    "~/assets/css/base/reset.scss",
    "~/assets/css/base/components.scss",
    "swiper/css/effect-fade",
  ],

  components: [
    {
      path: "./components",
      extensions: [".vue"],
      ignore: ["**/.*", "**/types.ts", "**/types.js", "**/types/index.ts", "**/types/index.js"],
    },
    {
      path: "./components/element",
      prefix: "E",
      global: true,
      extensions: [".vue"],
    },
    {
      path: "./components/layout",
      prefix: "Layout",
      global: true,
      extensions: [".vue"],
    },
    {
      path: "./components/content",
      pathPrefix: false,
      global: true,
      extensions: [".vue"],
    },
    {
      path: "./components/page",
      prefix: "",
      global: true,
      extensions: [".vue"],
    },
    {
      path: "./components/content/dialog",
      prefix: "Pop",
      global: true,
      extensions: [".vue"],
    },
  ],

  ssr: false,
  compatibilityDate: "2024-08-19",
});
