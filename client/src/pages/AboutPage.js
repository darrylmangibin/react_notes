import React from 'react';

import Layout from '../components/layout/Layout';
import Container from '../components/common/Container';

const AboutPage = () => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[new Date().getMonth()];
  const date = new Date().getDate();
  const year = new Date().getFullYear();
  return (
    <Layout>
      <Container>
        <h4 style={{ marginTop: '3rem' }}>Darryl Mangibin</h4>
        <p>Version</p>
        <p>1.0.2</p>
        <p>
          <b>{`${month} ${date}, ${year}`}</b>
        </p>
      </Container>
    </Layout>
  )
}

export default AboutPage