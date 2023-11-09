import { Logo } from "./img/logo";

export default async function Header() {
  return (
    <>
      <nav className="ui-nav">
        <div>
          <Logo />
          <menu>
            <li>
              <a href="">Solutions</a>
            </li>
            <li>
              <a href="">Learn</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </menu>
          <a href="" className="ui-cta ui-cta--sm">
            Get started
          </a>
        </div>
      </nav>
    </>
  );
}
