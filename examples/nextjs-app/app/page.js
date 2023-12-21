import Hero from "./_components/hero";
import Playground from "./_components/playground";
import { oversiteHelpers } from "./_clients/oversiteHelpers";
import { getPerfectionStyles } from "./_clients/perfectionHelpers.js";
import { headers } from "next/headers";

function getPathnameFromMiddleware(debug = false, full = false) {
  //Get Page Id, make sure you have middleware.js that add x-pathname to headers
  const headersList = headers();
  const headerList = JSON.stringify(Array.from(headersList.entries()), null, 2);
  full ? console.log(headerList) : null;
  const referer = headersList.get("x-pathname");
  debug ? console.log("\u001b[1;32mPathname (Server Side) \u001b[0m-->\u001b[1;32m", referer + "\u001b[0m ") : null;
  return referer;
}

export default async function Home() {
  getPathnameFromMiddleware(true, false);

  //Init Perfection Helpers
  await oversiteHelpers.init("homepage");
  //New
  const instances = await getPerfectionStyles("homepage");
  console.log(instances);
  const helpers = oversiteHelpers.initWith(instances);
  console.log(helpers);
  //const section = helpers.section.find("relatedArticles");

  return (
    <>
      <Hero />
      <Playground />
    </>
  );
}
