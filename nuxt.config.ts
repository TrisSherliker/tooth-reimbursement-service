// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Claim for a missing tooth',
      htmlAttrs: {
        class: 'govuk-template'
      },
      bodyAttrs: {
        class: 'govuk-template__body js-enabled govuk-frontend-supported'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-colour', content: '#0b0c0c' },
        { property: 'og:image', content: 'https://tf230.matteason.co.uk/images/og-image.png' }
      ],
      link: [{ rel: 'icon', sizes: 'any', href: '/images/favicon.svg', type: 'image/svg+xml' }]
    }
  },
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt']
})
