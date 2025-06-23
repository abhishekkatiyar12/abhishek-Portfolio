import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ContactMe from "./ContactMe";
import Layout from "./Layout";
import Homepage from "./Homepage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Homepage />} />
      {/* <Route path='Work' element={<Work />} /> */}
      <Route path='Contact' element={<ContactMe />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
