import React from 'react';

import Layout from '../components/layout/Layout';
import Container from '../components/common/Container';

const PageNotFound = () => {
  return (
    <Layout>
      <Container>
        <h2 style={{ marginTop: '3rem' }}>
          Page not found!
        </h2>
      </Container>
    </Layout>
  )
}

export default PageNotFound;