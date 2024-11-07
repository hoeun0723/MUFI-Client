import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../layouts/Layout';
import Introduce from '../pages/Introduce/Introduce';
import Gallery from '../pages/Gallery/Gallery';
import Reservation from '../pages/Reservation/Reservation';
import QnA from '../pages/QnA/QnA';
import CustomFrame from '../pages/CustomFrame/CustomFrame';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/introduce',
        element: <Introduce/>,
      },
      {
        path: '/gallery',
        element: <Gallery/>,
      },
      {
        path: '/reservation',
        element: <Reservation/>,
      },
      {
        path: '/custom-frame',
        element: <CustomFrame/>,
      },
      {
        path: '/qna',
        element: <QnA/>,
      },
    ]
  }
]);

export default router;