import Card from "./card";
import { Lock } from "./img/lock";

export default async function Preview() {
  return (
    <main>
      <div className="ui-frame" data-pf='{"sectionId":"gridSection", "title": "Grid Section"}'>
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
        <section>
          <code>
            &lt;section{" "}
            <span>
              data-pf="{"{"}...{"}"}"
            </span>{" "}
            /&gt;
          </code>
          <section className="ui-section" data-pf='{"sectionId":"gridSection", "title": "Grid Section"}'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            {/* <Card />
          <Card /> */}
          </section>
        </section>
      </div>
    </main>
  );
}
