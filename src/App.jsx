import RootPage from "./routers/RootPage";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PostPage from "./routers/PostPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  },
]);

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-slate-600">
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
