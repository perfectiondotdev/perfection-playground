export default function Card({ color }) {
  return (
    <>
      <div className={color} data-pf='{"componentKey": "card", "title": "Card", "groupId": "gridCard"}'>
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
