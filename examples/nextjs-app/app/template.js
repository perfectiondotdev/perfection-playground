import Oversite from "./_components/useclient/oversiteNoSSR";
// import Oversite from "./_components/useclient/oversiteNoNPM";
// import Analytics from "./_components/useclient/gtmScript";
import { Suspense } from "react";

export default function Template({ children }) {
  return (
    <>
      {children}
      <Suspense>
        {process.env.NEXT_PUBLIC_PERFECTION_PREVIEW == "true" && <Oversite />}
        {/* <Analytics /> */}
      </Suspense>
    </>
  );
}
