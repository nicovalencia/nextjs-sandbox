import fetch from 'isomorphic-unfetch';
import { Header, List } from 'semantic-ui-react';

import DefaultLayout from '../layouts/default';

const Film = ({ film }) => (
  <DefaultLayout>

    <Header as="h1">{film.title}</Header>
    <p>{film.description}</p>

    <List>
      <List.Item>
        <List.Header>Director</List.Header>
        {film.director}
      </List.Item>
      <List.Item>
        <List.Header>Producer</List.Header>
        {film.producer}
      </List.Item>
      <List.Item>
        <List.Header>Release Date</List.Header>
        {film.release_date}
      </List.Item>
      <List.Item>
        <List.Header>RT Score</List.Header>
        {film.rt_score}
      </List.Item>
    </List>

  </DefaultLayout>
);

Film.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
  const data = await res.json();

  return {
    film: data,
  };
};

export default Film;
