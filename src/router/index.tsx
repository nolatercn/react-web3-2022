import NotFound from '@/pages/404';
import menuRouter from '@/router/menu';
const routes = [
  ...menuRouter,

  {
    path: '*',
    element: <NotFound />,
    key: 'notfount',
    label: '404',
  },
];

export default routes;
