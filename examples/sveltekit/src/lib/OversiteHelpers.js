import OH from '@perfectiondev/oversite-helpers';

export class oversiteHelpers {
	static instances = new Map();

	// @ts-ignore
	static init = async (pageId) => {
		const helpers = oversiteHelpers.instances.get(pageId);
		const isPreview = import.meta.env.VITE_PUBLIC_PERFECTION_PREVIEW == 'true' ? true : false;

		if (helpers) await helpers.usePage(pageId);
		else {
			const result = await OH.init({
				apiKey: import.meta.env.VITE_PUBLIC_PERFECTION_API_KEY,
				subscriptionId: import.meta.env.VITE_PUBLIC_PERFECTION_SUBSCRIPTION_ID,
				// apiURL: import.meta.env.VITE_PUBLIC_PERFECTION_API_URL_DEV, //Only needed for dev
				siteName: import.meta.env.VITE_PUBLIC_PERFECTION_SITE_NAME,
				// @ts-ignore
				pageId,
				preview: isPreview
			});
			await result.usePage(pageId);
			oversiteHelpers.instances.set(pageId, result);
		}
	};
	static section = {
		// @ts-ignore
		parts: (partsFn, sectionId) =>
			typeof partsFn === 'function'
				? partsFn(sectionId)
				: // @ts-ignore
				  (selector, defaultClasses) => defaultClasses
	};
}
