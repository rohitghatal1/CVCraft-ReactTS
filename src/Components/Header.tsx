import { Avatar, Dropdown, Input, MenuProps } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const Header = () => {
  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: "Profile",
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: "Settings",
      icon: <SettingOutlined />,
    },
    {
      type: "divider",
    },
    {
      key: "3",
      label: "Logout",
      icon: <LogoutOutlined />,
      danger: true,
    },
  ];

  return (
    <div className="bg-white shadow-sm px-6 py-3 flex items-center justify-between rounded-b-lg">
      {/* Left - Brand */}
      <h2 className="text-xl font-bold text-indigo-600 tracking-wide">MyApp</h2>

      {/* Middle - Search */}
      <div className="hidden md:block w-1/3">
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          className="rounded-lg"
        />
      </div>

      {/* Right - Avatar with dropdown */}
      <Dropdown menu={{ items: menuItems }} placement="bottomRight" arrow>
        <Avatar
          style={{ backgroundColor: "#4f46e5", cursor: "pointer" }}
          src=""
        >
          R
        </Avatar>
      </Dropdown>
    </div>
  );
};

export default Header;
