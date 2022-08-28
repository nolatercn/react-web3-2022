import Home from '@/pages/home';
import Analytics from '@/pages/analytics';
import { HomeOutlined, BarChartOutlined } from '@ant-design/icons';
export default [
  {
    path: '/',
    element: <Home />,
    label: '首页',
    icon: <HomeOutlined />,
  },
  {
    path: 'experience',
    element: <Home />,
    label: '功能体验',
    icon: <BarChartOutlined />,
    children: [
      {
        path: 'overview',
        element: <Analytics />,
        label: '数据概览',
        icon: <BarChartOutlined />,
      },
      {
        path: 'user',
        element: <Analytics />,
        label: '用户管理',
        icon: <BarChartOutlined />,
      },
    ],
  },
];
