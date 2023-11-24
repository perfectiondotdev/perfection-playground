import {
  oversiteDeliveryApi,
  type InstancesModel,
} from '@perfectiondev/oversite-delivery-api-client'

export default defineNuxtRouteMiddleware(async (to) => {
  const oversiteData = useState<InstancesModel>('oversite:data')

  const sdk = new oversiteDeliveryApi({
    BASE: 'https://delivery.api.perfection.dev',
    HEADERS: async (options) => {
      try {
        return {
          ...(options.headers || {}),
          'X-Api-Key': import.meta.env.VITE_PUBLIC_PERFECTION_API_KEY,
        }
      } catch (error) {
        return options.headers || {}
      }
    },
  })

  const { result } = await sdk.instances.getInstancesForPage(
    import.meta.env.VITE_PUBLIC_PERFECTION_SUBSCRIPTION_ID,
    import.meta.env.VITE_PUBLIC_PERFECTION_SITE_NAME,
    import.meta.env.VITE_PUBLIC_PERFECTION_PREVIEW === 'true',
    'homepage'
  )

  if (result) oversiteData.value = result
})
