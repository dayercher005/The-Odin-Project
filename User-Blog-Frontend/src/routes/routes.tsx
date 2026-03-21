import { createBrowserRouter } from 'react-router';
import Dashboard from '../pages/Dashboard.tsx';
import { BlogReader } from '../pages/BlogReader.tsx';
import LoginPage from '../pages/Log-In.tsx';
import SignupPage from '../pages/Sign-Up.tsx';
import { Homepage } from '@/pages/Homepage.tsx';
import { NotFound } from '@/pages/NotFound.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NotFound />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <NotFound />
  },
  {
    path: "/:blogID",
    element: <BlogReader />,
    errorElement: <NotFound />
  },
  {
    path: "/log-in",
    element: <LoginPage />,
    errorElement: <NotFound />
  },
  {
    path: "/sign-up",
    element: <SignupPage />,
    errorElement: <NotFound />
  },
  {
    path: "/error",
    element: <NotFound />
  }
]);