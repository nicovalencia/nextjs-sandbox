import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Header } from 'semantic-ui-react';

import DefaultLayout from '../layouts/default';

const FilmLink = ({ id, title }) => (
  <li>
    <Link as={`/f/${id}`} href={`/film?id=${id}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Index = ({ films }) => (
  <DefaultLayout>
    <Header as="h2">Our Tools</Header>
    <ul>
      {films.map(film => (
        <FilmLink id={film.id} key={film.id} title={film.title} />
      ))}
    </ul>
  </DefaultLayout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await res.json();

  return {
    films: data,
  };
};

export default Index;
