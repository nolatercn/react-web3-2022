import NotFound from '@/components/404';
import menuRouter from '@/router/menu';
import { HomeOutlined } from '@ant-design/icons';
import Layout from '@/components/layout';

const routes = [
  {
    path: '/',
    element: <Layout />,
    label: '首页',
    icon: <HomeOutlined />,
    children: [...menuRouter],
  },

  {
    path: '*',
    element: <NotFound />,
    key: 'notfount',
    label: '404',
  },
];

export default routes;
