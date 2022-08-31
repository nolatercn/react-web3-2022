import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const { Content } = Layout;
import MenuComponent from '@/components/menu';
import HeaderComponent from '../header';
import './index.less';

export default function LayoutComponent() {
  return (
    <Layout style={{ height: '100vh', overflow: 'hidden' }}>
      <MenuComponent />
      <Layout className="layout-decorate">
        <HeaderComponent />
        <Content style={{ padding: 16, overflowY: 'scroll' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
