import Card from "./atoms/card";
import { Lock } from "./svgs/lock";

export default async function Navigator() {
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
        <section data-pf='{"sectionId":"gridSection", "title": "Grid Section"}'>
          <code>
            &lt;section{" "}
            <span>
              data-pf="{"{"}...{"}"}"
            </span>{" "}
            /&gt;
          </code>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    </main>
  );
}
