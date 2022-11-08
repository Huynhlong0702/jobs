import React from "react";
import logo from "../assets/images/logo.svg";
import logo_icon from "../assets/images/logo-icon.svg";
import { Layout } from "antd";
import Nav from "./Nav";
import { Link } from "react-router-dom";
const { Sider } = Layout;
const Sidebar = ({ collapsed }) => {
  const newLogo = collapsed ? logo_icon : logo;
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo px-4 py-6">
        <Link to="/">
          <img src={newLogo} />
        </Link>
      </div>
      <Nav />
    </Sider>
  );
};

export default Sidebar;
