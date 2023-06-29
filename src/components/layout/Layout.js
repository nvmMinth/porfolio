import { Outlet } from "react-router-dom";
import Home from "../home/Home";
import Sidebar from "../sidebar/Sidebar";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="Layout">
      <Sidebar />
      <div className="pages">
        <span className="tags top-tags">&lt;/ body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">
          &lt;/ body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/ html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
