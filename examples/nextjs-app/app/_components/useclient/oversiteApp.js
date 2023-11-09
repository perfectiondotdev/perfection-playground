"use client";
import oversite from "@perfectiondev/oversite";

export default function Oversite() {
  oversite.initialize({
    apiKey: process.env.NEXT_PUBLIC_PERFECTION_API_KEY,
    subscription: process.env.NEXT_PUBLIC_PERFECTION_SUBSCRIPTION_ID,
    site: process.env.NEXT_PUBLIC_PERFECTION_SITE_NAME,
  });
}
