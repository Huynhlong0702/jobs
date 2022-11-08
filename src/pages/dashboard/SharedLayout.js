import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Layout, Breadcrumb } from "antd";
import Sidebar from "../../components/Sidebar";
import AdminHeader from "../../components/AdminHeader";
import { NavLink } from "react-router-dom";

const { Content, Footer } = Layout;

const SharedLayout = () => {
  const [collapsed, setCollapsed] = useState(true);

  const breadcrumbs = useBreadcrumbs();

  const handleChangeCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="min-h-screen">
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <AdminHeader
          collapsed={collapsed}
          handleChangeCollapsed={handleChangeCollapsed}
        />
        <Breadcrumb className="mt-6 pl-6">
          {breadcrumbs.map(({ match, breadcrumb }) => {
            return (
              <Breadcrumb.Item key={match.pathname}>
                <NavLink to={match.pathname}>{breadcrumb}</NavLink>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>

        <Content className="site-layout-background min-h-[280px] p-6 m-6">
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Longdev ©2022 Created by Long.Ga
        </Footer>
      </Layout>
    </Layout>
  );
};

export default SharedLayout;
