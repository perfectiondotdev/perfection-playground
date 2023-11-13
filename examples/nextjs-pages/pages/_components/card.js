import { oversiteHelpers } from "../_clients/oversiteHelpers";

export default function Card({ color = "bg-dark", uid = "" }) {
  //Perfection Helpers
  const helpers = oversiteHelpers.instances.get("homepage");
  const selector = helpers?.component.parts("gridCard", uid);
  // console.log(`Component [${uid}] ->`, selector("self", ""));
  //TODO add helpers here, missing initialization somewhere

  return (
    <>
      <div className="bg-dark" data-pf={`{"providerId":"generic-provider","componentKey": "card", "title": "Card", "groupId": "gridCard", "entryId": "${uid}","instanceId": "${uid}"}`}>
        <code>
          &lt;component
          <br />
          <span>
            data-pf="{"{"}...{"}"}"
          </span>{" "}
          /&gt;
        </code>
      </div>
    </>
  );
}
