import React from "react";
import { getUser } from "../utils/localStorage";
import { logoutUser } from "../features/user/userSlice";
import {
  DownOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Layout, Dropdown, Space, Avatar, Menu } from "antd";
import { useDispatch } from "react-redux";
const { Header } = Layout;

const AdminHeader = ({ collapsed, handleChangeCollapsed }) => {
  const user = getUser();

  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    dispatch(logoutUser());
  };
  const menu = (
    <Menu
      items={[
        {
          label: <span onClick={handleLogoutUser}>Logout</span>,
          key: "0",
        },
      ]}
    />
  );

  return (
    <Header className="site-layout-background px-6">
      <span>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger text-xl",
            onClick: () => handleChangeCollapsed(!collapsed),
          }
        )}
      </span>
      <Dropdown overlay={menu} trigger={["click"]} className="float-right">
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            {user?.lastName || user?.name}
            <DownOutlined
              style={{ fontSize: "12px", verticalAlign: "baseline" }}
            />
          </Space>
        </a>
      </Dropdown>
    </Header>
  );
};

export default AdminHeader;
