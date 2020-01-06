import React from 'react';

import Layout from '../components/layout/Layout';
import HomeActions from '../components/home/HomeActions';
import Notes from '../components/home/Notes';

const HomePage = () => {
  return (
    <Layout>
      <HomeActions />
      <Notes />
    </Layout>
  )
}

export default HomePage;