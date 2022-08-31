import Home from '@/pages/home';
import Analytics from '@/pages/analytics';
import { HomeOutlined, BarChartOutlined } from '@ant-design/icons';
export default [
  {
    path: 'home',
    element: <Home />,
    label: 'Home',
    icon: <HomeOutlined />,
  },
  {
    path: 'advanced',
    element: <Analytics />,
    label: 'Advanced',
    icon: <BarChartOutlined />,
  },
];
