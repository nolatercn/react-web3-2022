import React from 'react';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
export default (props: any) => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}></Header>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        {props.children}
      </Content>
    </Layout>
  );
};
