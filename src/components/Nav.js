import {
  BarChartOutlined,
  FileDoneOutlined,
  DiffOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const Nav = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      items={[
        {
          key: "1",
          icon: <BarChartOutlined />,
          label: "Dashboard",
        },
        {
          key: "2",
          icon: <FileDoneOutlined />,
          label: "All Jobs",
        },
        {
          key: "3",
          icon: <DiffOutlined />,
          label: "Add Job",
        },
        {
          key: "4",
          icon: <UserOutlined />,
          label: "Profile",
        },
      ]}
    >
      {/* <Link to="#">
            <Menu.Item>
              <DiffOutlined />
              Add Job
            </Menu.Item>
          </Link> */}
    </Menu>
  );
};

export default Nav;
