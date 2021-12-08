import Link from 'next/link'

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Blogging</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Blogs</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
