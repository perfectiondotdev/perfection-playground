import Card from "./card";
import { Lock } from "./img/lock";
import { oversiteHelpers } from "../_clients/oversiteHelpers";

export default async function Preview() {
  //Perfection Helpers
  const helpers = oversiteHelpers.instances.get("homepage");
  const part = oversiteHelpers.section.parts(helpers?.section.parts, "gridSection");
  console.log("Section (Outer) -> ", part("outer", ""));
  console.log("Section (Inner) -> ", part("inner", "ui-section"));
  return (
    <main>
      <div className="ui-frame">
        <header>
          <nav />
          <span>
            <Lock />
            your-preview.company.com
          </span>
          <span>+</span>
        </header>
        <code>
          &lt;body{" "}
          <span>
            data-pf="{"{"}...{"}"}"
          </span>
          &gt;
        </code>
        <section className={part("outer", "")}>
          <code>
            &lt;section{" "}
            <span>
              data-pf="{"{"}...{"}"}"
            </span>{" "}
            /&gt;
          </code>
          <section className={part("inner", "ui-section")} data-pf='{"sectionId":"gridSection", "title": "Grid Section"}'>
            <Card uid="card1" />
            <Card uid="card2" />
            <Card uid="card3" />
            <Card uid="card4" />
            <Card uid="card5" />
            <Card uid="card6" />
          </section>
        </section>
      </div>
    </main>
  );
}
