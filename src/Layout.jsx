import Container from "./Container";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Container>
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
}

export default Layout;
