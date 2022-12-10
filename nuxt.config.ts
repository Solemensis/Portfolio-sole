// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  //   css: ["@/assets/css/blobz.min.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "sole - portf.",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Portfolio website of a web developer - 2022",
        },
      ],
    },
  },
});
