import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Actions from "./pages/Actions";
import Logout from "./pages/Logout";

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <Header />

      {/* Main Content with Sidebars */}
      <div className="d-flex flex-grow-1">
        <SidebarLeft />
        <div className="container-fluid d-flex justify-content-center align-items-start mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/actions" element={<Actions />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
        <SidebarRight />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
