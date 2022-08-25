import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from '@/components/layout';
export default function Home() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
