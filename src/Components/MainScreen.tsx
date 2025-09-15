import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MainScreen = () => {
  return (
    <div className="flex items-center">
      <div>
        <div>
          <Sidebar />
        </div>
      </div>
      <div>
        <div>
          <Header />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainScreen;
