import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import CrownLogo from "../../assets/crown.svg";
import "./Navigation.scss";
import { signOutUser } from "../../utils/firebase/firebase";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);


  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrownLogo} alt="" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
