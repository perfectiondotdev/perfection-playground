import Hero from "./_components/hero";
import Playground from "./_components/playground";
import { oversiteHelpers } from "./_clients/oversiteHelpers";

export default async function Home() {
  //Init Perfection Helpers
  await oversiteHelpers.init("homepage");

  return (
    <>
      <Hero />
      <Playground />
    </>
  );
}
