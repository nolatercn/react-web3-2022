import Home from '@/pages/home'
import Analytics from '@/pages/analytics'
import NotFound from '@/pages/404'

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/analytics",
        element: <Analytics />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]

export default routes