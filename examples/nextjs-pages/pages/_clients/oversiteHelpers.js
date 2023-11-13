import OH from "@perfectiondev/oversite-helpers";

export class oversiteHelpers {
  static instances = new Map();

  static init = async (pageId) => {
    const helpers = oversiteHelpers.instances.get(pageId);
    const isPreview = process.env.NEXT_PUBLIC_PERFECTION_PREVIEW == "true" ? true : false;

    if (helpers) await helpers.usePage(pageId);
    else {
      const result = await OH.init({
        apiKey: process.env.NEXT_PUBLIC_PERFECTION_API_KEY,
        subscriptionId: process.env.NEXT_PUBLIC_PERFECTION_SUBSCRIPTION_ID,
        // apiURL: process.env.NEXT_PUBLIC_PERFECTION_API_URL_DEV, //Only needed for dev
        siteName: process.env.NEXT_PUBLIC_PERFECTION_SITE_NAME,
        pageId,
        preview: isPreview,
      });
      await result.usePage(pageId);
      oversiteHelpers.instances.set(pageId, result);
    }
  };
  static section = { parts: (partsFn, sectionId) => (typeof partsFn === "function" ? partsFn(sectionId) : (selector, defaultClasses) => defaultClasses) };
}
