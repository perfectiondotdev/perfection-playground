import Card from "./card";
import { Lock } from "./img/lock";

//Should we make use of StyledComponent to avoid error of type
// client.js: 2 Warning: Prop `className` did not match.Server: "ui-section sc-w-xxl ui-section-3" Client: "ui-section sc-w-xxl ui-section-4"

export default function Playground(perfection) {
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
        <section className={perfection.props.section_outer}>
          <code>
            &lt;section{" "}
            <span>
              data-pf="{"{"}...{"}"}"
            </span>{" "}
            /&gt;
          </code>
          <section className={perfection.props.section_inner} data-pf='{"sectionId":"gridSection", "title": "Grid Section", "providerId":"generic-provider","entryId": "homepage"}'>
            <Card uid="card1" props={perfection.props.components[0]} />
            <Card uid="card2" props={perfection.props.components[1]} />
            <Card uid="card3" props={perfection.props.components[2]} />
            <Card uid="card4" props={perfection.props.components[3]} />
            <Card uid="card5" props={perfection.props.components[4]} />
            <Card uid="card6" props={perfection.props.components[5]} />
          </section>
        </section>
      </div>
    </main>
  );
}
