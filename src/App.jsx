import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ContactMe from "./ContactMe";
import Layout from "./Layout";
import Homepage from "./Homepage";
import Project from "./Project";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path='Project' element={<Project />} />
      <Route path='Contact' element={<ContactMe />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
