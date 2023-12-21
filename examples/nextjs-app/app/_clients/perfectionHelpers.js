import oversiteHelpers from "@perfectiondev/oversite-helpers";

export const getPerfectionStyles = async (pageId) => {
  const helpers = oversiteHelpers.init({
    apiKey: process.env.NEXT_PUBLIC_PERFECTION_API_KEY,
    subscriptionId: process.env.NEXT_PUBLIC_PERFECTION_SUBSCRIPTION_ID,
    siteName: process.env.NEXT_PUBLIC_PERFECTION_SITE_NAME,
    preview: process.env.NEXT_PUBLIC_PERFECTION_PREVIEW === "true",
  });

  await helpers.usePage(pageId);
  return helpers.utils.getInstances() || undefined;
};
