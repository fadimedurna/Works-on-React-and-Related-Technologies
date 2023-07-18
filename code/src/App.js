import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

//import BlogPage, { loader as postsLoader } from './pages/Blog';
import HomePage from "./pages/Home";
//import PostPage, { loader as postLoader } from "./pages/Post";
import RootLayout from "./pages/Root";

//next is loading BlogPage component lazily (lazy loading) ........2
const BlogPage = lazy(() => import("./pages/Blog")); //"lazy" function is used for calling BlogPage as a component. Before that we can't call it as a component because it was returning promise because of import.

const PostPage = lazy(() => import("./pages/Post"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <BlogPage />
              </Suspense>
            ), //Suspense is a built-in component in react. It is used for, other components to wait for content to be loaded before actually rendering the content. So, we are using it for BlogPage component to wait for it to be loaded before rendering it.
            loader: () =>
              import("./pages/Blog").then((module) => module.loader()),
          }, //"import" gives us a promise, beside import/then we can use async/await. Then in module we called loader function which returns a promise. At the end with this line we loding our loader function in a "lazy loading" way. ......1
          {
            path: ":id",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PostPage />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/Post").then((module) => module.loader(meta)), //meta is an object that contains information about the current route. We are passing it to loader function in PostPage component which has params property that contains id of the post.
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
