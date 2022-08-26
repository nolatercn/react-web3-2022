import React from 'react';
import { Layout } from 'antd';
const { Header, Content } = Layout;
import Menu from '@/components/menu';
export default (props: any) => {
  return (
    <Layout>
      <Menu />
      <Layout>
        <Header
          style={{ position: 'fixed', zIndex: 1, width: '100%' }}
        ></Header>

        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
