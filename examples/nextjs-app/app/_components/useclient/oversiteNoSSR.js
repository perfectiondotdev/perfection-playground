import dynamic from "next/dynamic";

/** Dynamically load Oversite without SSR, only way to get access to browser APIs needed by Oversite */
export default dynamic(() => import("./oversiteApp"), {
  ssr: false,
});
