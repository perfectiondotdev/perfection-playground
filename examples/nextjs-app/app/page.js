import Preview from "./_components/preview";
import Hero from "./_components/hero";
import { oversiteHelpers } from "./_clients/oversiteHelpers";

export default async function Home() {
  //Init Perfection Helpers
  await oversiteHelpers.init("homepage");

  return (
    <>
      <Hero />
      <Preview />
    </>
  );
}
