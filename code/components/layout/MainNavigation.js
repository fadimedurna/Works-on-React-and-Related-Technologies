import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetup App</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Meetups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
