import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import {
  CategoryList,
  FoodList,
  FoodDetail,
  ErrorNotFound
} from 'screens';

const publicRoutes = [
  {
    path: '/',
    element: <CategoryList />,
  },
  {
    path: '/categories/:categoryName',
    element: <FoodList />
  },
  {
    path: '/foods/:id',
    element: <FoodDetail />
  },
  {
    path: '*',
    element: <ErrorNotFound />
  }
];

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          publicRoutes.map(route => (
            <Route
              key={ route.path }
              path={ route.path }
              element={ route.element }
              exact
            />
          ))
        }
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
