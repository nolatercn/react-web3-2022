import NotFound from '@/components/404';
import menuRouter from '@/router/menu';
import Layout from '@/components/layout';
import { useRoutes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // 默认路由设为home
    if (!location.pathname.split('/').filter((path) => !!path).length) {
      navigate('/home');
    }
  }, []);

  return (
    <>
      {useRoutes([
        {
          path: '/',
          element: <Layout />,
          children: [...menuRouter],
        },

        {
          path: '*',
          element: <NotFound />,
        },
      ])}
    </>
  );
};
