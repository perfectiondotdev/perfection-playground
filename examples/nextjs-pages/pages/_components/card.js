export default function Card({ color = "bg-dark", uid = "", props }) {
  // console.log(uid, props);

  return (
    <>
      <div className={props} data-pf={`{"providerId":"generic-provider","componentKey": "card", "title": "Card", "groupId": "gridCard", "entryId": "${uid}","instanceId": "${uid}"}`}>
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
