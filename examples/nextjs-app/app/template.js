import Oversite from "./_components/useclient/oversiteNoSSR";
// import Oversite from "./_components/useclient/oversiteNoNPM";

export default function Template({ children }) {
  return (
    <>
      {children}
      {process.env.NEXT_PUBLIC_PERFECTION_PREVIEW == "true" && <Oversite />}
    </>
  );
}
