import React from "react";
import  {Navbar} from "./Navbar";

import classes from "./header.module.scss";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className={classes.container}>{children}</div>
        </>
    );
};

export default Layout;