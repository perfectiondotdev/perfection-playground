import oversiteHelpers from '@perfectiondev/oversite-helpers'

export default defineNuxtPlugin(async () => {
  const helpers = await oversiteHelpers.init({
    apiKey: import.meta.env.VITE_PUBLIC_PERFECTION_API_KEY,
    siteName: import.meta.env.VITE_PUBLIC_PERFECTION_SITE_NAME,
    subscriptionId: import.meta.env.VITE_PUBLIC_PERFECTION_SUBSCRIPTION_ID,
    preview: import.meta.env.VITE_PUBLIC_PERFECTION_PREVIEW === 'true',
  })

  return {
    provide: { helpers },
  }
})
