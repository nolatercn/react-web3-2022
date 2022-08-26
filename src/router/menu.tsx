import Home from '@/pages/home';
import Analytics from '@/pages/analytics';

export default [
  {
    path: '/',
    element: <Home />,
    key: 'home',
    label: '首页',
    // children: [
    //   {
    //     path: '/analytics',
    //     element: <Analytics />,
    //     key: 'analytics',
    //     label: '分析',
    //   },
    // ],
  },
  {
    path: '/analytics',
    element: <Analytics />,
    key: 'analytics',
    label: '分析',
  },
];
