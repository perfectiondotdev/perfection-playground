import { Chevron } from "./svgs/chevron";
import { GitHub } from "./atoms/github";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="ui-header">
      {" "}
      <Link href="/" className="ui-button-link">
        <GitHub />
        Discover more examples
        <Chevron />
      </Link>
      <h1>Supercharge your preview environment</h1>
      <h2>Streamline your editing process and increase your team productivity to deliver engaging digital experiences faster.</h2>
      <Link href="/" className="ui-cta">
        Read the doc
      </Link>
    </header>
  );
}
