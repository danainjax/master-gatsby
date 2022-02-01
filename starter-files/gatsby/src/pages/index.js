import React from 'react';
import Layout from '../components/Layout';

export default function HomePage({ children }) {
  return (
    <Layout>
      {children}
      <p>Homey page</p>
    </Layout>
  );
}
