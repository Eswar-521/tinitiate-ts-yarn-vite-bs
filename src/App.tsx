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
import Catalog from "./pages/Catalog";  // ✅ New
import Wishlist from "../pages/Wishlist";  // ✅ New 
import Comparison from "../pages/Comparison";  // ✅ New

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <Header />

      {/* Main Content with Sidebars */}
      <div className="d-flex flex-grow-1">
        {/* Left Sidebar */}
        <SidebarLeft />

        {/* Main Content Area */}
        <div className="container-fluid px-4 py-3">
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
            <Route path="/catalog" element={<Catalog />} />  {/* ✅ New */}
            <Route path="/wishlist" element={<Wishlist />} />  {/* ✅ New */}
            <Route path="/comparison" element={<Comparison />} />  {/* ✅ New */}
          </Routes>
        </div>

        {/* Right Sidebar */}
        <SidebarRight />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
