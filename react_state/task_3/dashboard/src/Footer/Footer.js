import React from "react";
import { AppContext } from "../App/AppContext";
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer() {
  return (
    <AppContext.Consumer>
      {({ user }) => (
        <div className="Footer">
          <footer className="App-footer">
            <p>{getFooterCopy(true)} - {getFullYear()}</p>
            {user.isLoggedIn && <p><a href="#">Contact us</a></p>}
          </footer>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;
