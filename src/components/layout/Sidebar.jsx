import React from "react";

//assets
import People from '@material-ui/icons/People';
import Document from '@material-ui/icons/Description';

import companyLogo from "../../assets/corpo.png";

const Sidebar = () => {
  return (
    <div className="side">
      <div className="sidemenu">
        <div className="logo">
          <img src={companyLogo} alt="f4" className="logo"></img>
        </div>
        <div className="routes">
          <ul className="nav">
            <li>
            <Document/>
              <a>Documentos</a>
            </li>
            <li>
            <People/>
              <a>Usuarios</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
