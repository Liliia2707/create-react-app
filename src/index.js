import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import './index.css';
import ErrorPage from './pages/ErrorPage';
import { PostPage } from './pages/PostPage';
import SinglePostPage from './pages/SinglePostPage';
import SinglUserPage from './pages/SingleUserPage';
import { TodoPage } from './pages/TodoPage';
import { UserPage } from './pages/UserPage';
import { store } from './store/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: '/MainPage',
      //   element: <MainPage />
      // },
      {
        path: '/todos',
        element: <TodoPage />
      },
      {
        path: '/posts',
        element: <PostPage />
      },
      {
        path: '/users',
        element: <UserPage />
      },
      {
        path: '/users/:id',
        element: <SinglUserPage />
      },
      {
        path: '/posts/:id',
        element: <SinglePostPage />
      },
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

