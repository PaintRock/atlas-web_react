import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer() {
  return (
    <div className="Footer">
      <footer className="App-footer">
        <p>{getFooterCopy(true)} - {getFullYear()}</p>
      </footer>
    </div>
  );
}
export default Footer;