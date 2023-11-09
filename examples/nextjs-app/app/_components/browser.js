import Card from "./atoms/card";

export default async function Browser({ uid, pageId }) {
  return (
    <>
      <section>
        <p>Browser component</p>
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}
