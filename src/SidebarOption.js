import React from "react";
import './sidebaroption.css'
import {Home, LibraryMusic, Search} from '@material-ui/icons'
function SidebarOption({ Icon, title }) {
  return (
     <div className="sidebarOption">
        {Icon && <Icon className="sidebarOption__icon" />}

          {Icon ? <h4>{title}</h4> : <p>{title}</p>}
     </div>
  );
}

export default SidebarOption;