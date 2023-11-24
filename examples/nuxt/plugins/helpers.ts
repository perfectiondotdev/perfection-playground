import oversiteHelpers from '@perfectiondev/oversite-helpers'
import type { OversiteHelpersData } from '@perfectiondev/oversite-helpers/dist/types/data'

export default defineNuxtPlugin(() => {
  const helpers = computed(() => {
    const data = useState<OversiteHelpersData>('oversite:data').value
    return oversiteHelpers.initWith(data)
  })

  return {
    provide: { helpers },
  }
})
