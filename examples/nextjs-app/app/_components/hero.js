import { Chevron } from "./img/chevron";
import { GitHub } from "./img/github";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="ui-header">
      {" "}
      <Link href="https://github.com/perfectiondotdev/perfection/tree/main/examples" target="_blank" className="ui-button-link">
        <GitHub />
        Discover more examples
        <Chevron />
      </Link>
      <h1>Supercharge your preview environment</h1>
      <h2>Streamline your editing process and increase your team productivity to deliver engaging digital experiences faster.</h2>
      <Link href="https://docs.perfection.dev/" target="_blank" className="ui-cta">
        Read the doc
      </Link>
    </header>
  );
}
