"use client";
import Script from "next/script";

export default function OversiteScript() {
  return (
    <Script
      id="perfectionNoNPM"
      src="https://unpkg.com/@perfectiondev/oversite@latest/dist/index.iife.js"
      onLoad={function load() {
        oversite.initialize({
          apiKey: process.env.NEXT_PUBLIC_PERFECTION_API_KEY,
          subscription: process.env.NEXT_PUBLIC_PERFECTION_SUBSCRIPTION_ID,
          site: process.env.NEXT_PUBLIC_PERFECTION_SITE_NAME,
        });
      }}
      onError={(e) => {
        console.error("Perfection: ", e);
      }}
    />
  );
}
