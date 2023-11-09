import { v4 as uuidv4 } from "uuid";

export default function Card({ color = "bg-dark", uid = "" }) {
  console.log(uid);
  return (
    <>
      <div className={color} data-pf={`{"providerId":"generic-provider","componentKey": "card", "title": "Card", "groupId": "gridCard", "entryId": "${uuidv4()}","instanceId": "${uid}"}`}>
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
