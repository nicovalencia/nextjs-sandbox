import Link from 'next/link';
import { Header } from 'semantic-ui-react';

export default () => (
  <header>
    <Header as="h1">
      <span>Studio Ghibli</span>
    </Header>
    <nav>
      <ul>
        <li>
          <Link href="/"><a>Films</a></Link>
        </li>
        <li>
          <Link href="/about"><a>About</a></Link>
        </li>
      </ul>
    </nav>
  </header>
);
