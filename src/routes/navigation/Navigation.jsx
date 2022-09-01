import { Outlet, Link } from "react-router-dom";
import CrownLogo from '../../assets/crown.svg'
import "./Navigation.scss"

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/"> 
         <img src={CrownLogo} alt="" className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
