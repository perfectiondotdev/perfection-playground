import oversite from "@perfectiondev/oversite";

export default defineNuxtPlugin((nuxtApp) => {
  oversite.initialize({
    apiKey: import.meta.env.VITE_PUBLIC_PERFECTION_API_KEY,
    subscription: import.meta.env.VITE_PUBLIC_PERFECTION_SUBSCRIPTION_ID,
    site: import.meta.env.VITE_PUBLIC_PERFECTION_SITE_NAME,
  });
});
