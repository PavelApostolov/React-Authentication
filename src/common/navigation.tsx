import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useSelector } from "react-redux";
import { NavigationWrapper } from "./LayoutStyles";

import { LinkButton } from "./LinkButton";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 80,
    boxShadow: "0 5px 50px 0 rgba(124, 122, 153, 0.1)",
    "@media (max-width: 1366px)": {
      justifyContent: "space-between",
      height: 60,
      width: "100%",
    },
  },
  toolbar: {
    paddingRight: 0,
    paddingLeft: "18px",
  },
}));

const NavigationMenu = () => {
  const classes = useStyles();
  const hasAdminPermissions = useSelector((state) => state.auth.admin);
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <NavigationWrapper>
          <Toolbar className={classes.toolbar}>
            <LinkButton text="Home" link="/" />
            <LinkButton text="Subjects" link="/subjects" />
            <LinkButton text="Account" link="/account" />
            {hasAdminPermissions && <LinkButton text="Admin" link="/admin" />}
            <LinkButton text="Logout" link="/logout" />
          </Toolbar>
        </NavigationWrapper>
      </AppBar>
    </div>
  );
};

export default NavigationMenu;
