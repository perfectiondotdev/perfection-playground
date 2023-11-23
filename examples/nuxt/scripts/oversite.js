import oversite from "@perfectiondev/oversite";
// import OH from "@perfectiondev/oversite-helpers";

export default function Oversite() {
  if (process.browser) {
    oversite.initialize({
      apiKey: import.meta.env.VITE_PUBLIC_PERFECTION_API_KEY,
      subscription: import.meta.env.VITE_PUBLIC_PERFECTION_SUBSCRIPTION_ID,
      site: import.meta.env.VITE_PUBLIC_PERFECTION_SITE_NAME,
    });
  }
}
// export class oversiteHelpers {
//   static instances = new Map();

//   static init = async (pageId) => {
//     const helpers = oversiteHelpers.instances.get(pageId);
//     const isPreview = import.meta.env.VITE_PUBLIC_PERFECTION_PREVIEW == "true" ? true : false;

//     if (helpers) await helpers.usePage(pageId);
//     else {
//       const result = await OH.init({
//         apiKey: import.meta.env.VITE_PUBLIC_PERFECTION_API_KEY,
//         subscriptionId: import.meta.env.VITE_PUBLIC_PERFECTION_SUBSCRIPTION_ID,
//         siteName: import.meta.env.VITE_PUBLIC_PERFECTION_SITE_NAME,
//         pageId,
//         preview: isPreview,
//       });
//       await result.usePage(pageId);
//       oversiteHelpers.instances.set(pageId, result);
//     }
//   };
//   static section = { parts: (partsFn, sectionId) => (typeof partsFn === "function" ? partsFn(sectionId) : (selector, defaultClasses) => defaultClasses) };
// }
