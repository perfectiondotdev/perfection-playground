export default defineNuxtRouteMiddleware(async (to) => {
  const { $helpers } = useNuxtApp()

  await $helpers.usePage(
    typeof to.meta.pageId === 'string' ? to.meta.pageId : ''
  )
})
