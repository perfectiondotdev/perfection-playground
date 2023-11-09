import Card from "./atoms/card";

export default async function Browser() {
  return (
    <>
      <section data-pf='{"sectionId":"gridSection", "title": "Grid Section"}'>
        <p>Browser component</p>
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}
