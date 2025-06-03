import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaClipboardList, FaRegComment } from "react-icons/fa";
import { TiClipboard } from "react-icons/ti";
import { SiSimpleanalytics } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import DashboardHome from "../pages/DashboardHome";
import { IoMdExit } from "react-icons/io";
import axios from "../config/Api";
import toast from "react-hot-toast";

const UserDashboardSidebar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  const sideBarItems = [
    { id: "dashboard", label: "Dashboard", icon: <MdDashboard /> },
    { id: "attendance", label: "My Attendance", icon: <FaClipboardList /> },
    { id: "leave-requests", label: "Leave Requests", icon: <SlCalender /> },
    { id: "complaints", label: "Complaints", icon: <FaRegComment /> },
    { id: "suggestions", label: "Suggestions", icon: <TiClipboard /> },
    { id: "analytics", label: "Analytics", icon: <SiSimpleanalytics /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-600 text-white min-h-screen p-6">
        {/* <h2 className="text-2xl font-bold text-center mb-6">
          Employee Dashboard
        </h2> */}
        <nav className="space-y-4">
          {sideBarItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center gap-2 w-full text-left text-lg p-2 rounded-md ${
                activeTab === item.id
                  ? "bg-emerald-700"
                  : "hover:bg-emerald-500"
              }`}
              onClick={() => {
                setActiveTab(item.id);
                // Optionally navigate: navigate(`/${item.id}`);
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}

          {/* </div> */}
        </nav>
        <button
          className="flex items-center gap-2 w-full text-left text-lg p-2 rounded-md bg-red-600 hover:bg-red-700 mt-10 transition-all"
          onClick={async () => {
            const logoutPromise = axios.get("/api/auth/logout");
            toast.promise(logoutPromise, {
              loading: "Logging out..",
              success: (res) => res?.data?.message,
              error: (error) => error?.response?.data?.message,
            });

            try {
              const res = await logoutPromise;
              navigate("/");
              console.log(res);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <span>
            <IoMdExit />
          </span>
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="bg-surface-50 rounded-xl shadow-lg p-8 min-h-[calc(100vh-4rem)]">
          {activeTab === "dashboard" && (
            <div>
              {/* <h2 className="text-2xl font-bold mb-4">Dashboard</h2> */}
              {/* Add dashboard content */}
              <DashboardHome />
            </div>
          )}
          {activeTab === "attendance" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">My Attendance</h2>
              {/* Add customers content */}
            </div>
          )}
          {activeTab === "products" && <div>{/* Add products content */}</div>}
          {activeTab === "leave-requests" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Leave Requests</h2>
              {/* Add orders content */}
            </div>
          )}
          {activeTab === "complaints" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Complaints</h2>
              {/* Add returns content */}
            </div>
          )}
          {activeTab === "suggestions" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Suggestions</h2>
              {/* Add transactions content */}
            </div>
          )}
          {activeTab === "analytics" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Analytics</h2>
              {/* Add transactions content */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboardSidebar;
