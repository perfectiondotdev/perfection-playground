import { v4 as uuidv4 } from "uuid";
import { oversiteHelpers } from "../_clients/oversiteHelpers";

export default async function Card({ color = "bg-dark", uid = "" }) {
  //Perfection Helpers
  const helpers = oversiteHelpers.instances.get("homepage");
  const selector = helpers?.component.parts("gridCard", uid);
  console.log(`Component [${uid}] ->`, selector("self", ""));

  return (
    <>
      <div className={selector("self", "bg-dark")} data-pf={`{"providerId":"generic-provider","componentKey": "card", "title": "Card", "groupId": "gridCard", "entryId": "${uuidv4()}","instanceId": "${uid}"}`}>
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
