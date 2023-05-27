import RootPage from "./routers/RootPage";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
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
