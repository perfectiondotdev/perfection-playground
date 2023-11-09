import { v4 as uuidv4 } from "uuid";

export default function Card({ color }) {
  return (
    <>
      <div className={color} data-pf={`{"providerId":"generic-provider","componentKey": "card", "title": "Card", "groupId": "gridCard", "entryId": "${uuidv4()}","instanceId": "${uuidv4()}"}`}>
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
