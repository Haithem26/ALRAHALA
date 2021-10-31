import React, { useContext } from "react";

import { Button } from "react-bootstrap";
import Auth from "../../contexts/Auth";
import { logout } from "../../services/AuthApi";

function LogOut() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  return (
    <div>
      <li className="nav-links">
        <Button variant="danger" onClick={handleLogout}>
          Danger
        </Button>
      </li>
    </div>
  );
}

export default LogOut;
