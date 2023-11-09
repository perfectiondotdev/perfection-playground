import Card from "./card";
import { Lock } from "./img/lock";

export default async function Preview() {
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
        <section className="bg-section-dark">
          <code>
            &lt;section{" "}
            <span>
              data-pf="{"{"}...{"}"}"
            </span>{" "}
            /&gt;
          </code>
          <section className="ui-section" data-pf='{"sectionId":"gridSection", "title": "Grid Section"}'>
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
