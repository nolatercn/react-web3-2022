import { useRoutes } from 'react-router-dom';
import routes from '@/router';

export default () => {
  return <>{useRoutes(routes)}</>;
};
