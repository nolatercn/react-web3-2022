import Home from '@/pages/home';
import Analytics from '@/pages/analytics';
import { HomeOutlined, BarChartOutlined } from '@ant-design/icons';
export default [
  {
    path: 'home',
    element: <Home />,
    label: '首页',
    icon: <HomeOutlined />,
  },
  {
    path: 'experience',
    element: <Analytics />,
    label: '功能体验',
    icon: <BarChartOutlined />,
  },
];
