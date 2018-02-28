import Head from 'next/head';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

import Header from '../components/header';

const ThisContainer = styled(Container)`
  padding-top: 50px;
`;

export default ({ children }) => (
  <div>

    <Head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
    </Head>

    <ThisContainer>
      <Header />
      {children}
    </ThisContainer>

  </div>
);
