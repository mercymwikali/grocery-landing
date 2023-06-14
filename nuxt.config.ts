// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: "width=device-width; initial-scale=1",
      title: "Havilah Pro Limited - Exporters of Fresh Fruits and Vegetables",
      meta: [
        { name: "theme-color", content: "#4D7C0F" },
        {
          name: "description",
          content:
            "Havilah Pro Limited is a company based in Nairobi, Kenya, specializing in exporting fresh produce, including organic fruits and vegetables. We provide swift delivery to the Middle East, Europe, and Asia, offering farm-fresh produce that is locally sourced and handpicked. Our nutrient-packed products promote a healthy lifestyle. Explore our wide variety of products, ready to be shipped to you anytime.",
        },
        {
          property: "og:title",
          content:
            "Havilah Pro Limited - Exporters of Fresh Fruits and Vegetables",
        },
        {
          property: "og:description",
          content:
            "Havilah Pro Limited is a company based in Nairobi, Kenya, specializing in exporting fresh produce, including organic fruits and vegetables. We provide swift delivery to the Middle East, Europe, and Asia, offering farm-fresh produce that is locally sourced and handpicked. Our nutrient-packed products promote a healthy lifestyle. Explore our wide variety of products, ready to be shipped to you anytime.",
        },
        { property: "og:image", content: "https://havilapro.com/img/logo.png" },
      ],
      link: [{ rel: "canonical", href: "https://havilapro.com" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/device"],
  css: ["~/assets/styles/main.css"],
});
