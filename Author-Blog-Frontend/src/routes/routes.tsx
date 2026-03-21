import { createBrowserRouter } from 'react-router';
import { HomePage } from '../pages/HomePage.tsx';
import { LoginPage } from '../pages/LoginPage.tsx';
import { SignupPage } from '../pages/SignupPage.tsx';
import { DashboardPage } from '../pages/Dashboard.tsx';
import { CreateBlogPage } from '../pages/CreateBlogPage.tsx';
import { BlogViewer } from '../pages/BlogViewer.tsx';
import { NotFound } from '../pages/NotFound.tsx';
import { CommentViewer } from '../pages/CommentViewer.tsx';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
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
        path: "/dashboard",
        element: <DashboardPage />,
        errorElement: <NotFound />
    },
    {   
        path: "/dashboard/:blogID",
        element: <BlogViewer />,
        errorElement: <NotFound />
    },
    {
        path: "/dashboard/:blogID/:commentID",
        element: <CommentViewer />,
        errorElement: <NotFound />
    },
    {
        path: "/create-blog",
        element: <CreateBlogPage />,
        errorElement: <NotFound />
    },
    {
        path: "/error",
        element: <NotFound />,
    }
    
])