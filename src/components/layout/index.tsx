import { Layout } from 'antd';
const { Content } = Layout;
import MenuComponent from '@/components/menu';
import HeaderComponent from '../header';
import './index.less';
export default function LayoutComponent(props: any) {
  return (
    <Layout>
      <MenuComponent />
      <Layout className="layout-decorate">
        <HeaderComponent />
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
}
