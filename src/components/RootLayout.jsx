import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import HomeNavBar from "./HomeNavBar";
import Footer from "./Footer";
import { Provider } from "react-redux";
import Store from "./store/Store";

const RootLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Provider store={Store}>
        {isHome ? <HomeNavBar /> : <NavBar />}
        <div>
          <Outlet />
        </div>
        <Footer />
      </Provider>
    </>
  );
};

export default RootLayout;
