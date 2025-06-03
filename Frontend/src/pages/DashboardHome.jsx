import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaTransgender,
  FaBriefcase,
  FaIdBadge,
  FaGraduationCap,
  FaBuilding,
  FaClock,
  FaHome,
  FaCalendarAlt,
} from "react-icons/fa";

import axios from "../config/Api";


const DashboardHome = () => {
  const user = {
    // name: "Shubham Yadav",
    // email: "john.doe@example.com",
    // phone: "+1 (555) 123-4567",
    photo: "https://placehold.co/150?text=S",
    // employeeId: "EMP12345",
    // department: "Human Resources",
    // designation: "HR Manager",
    // joinDate: "2021-03-15",
    // gender: "Male",
    // qualifications: "MBA in HR",
    // dob: "1990-06-15",
    // startShift: "09:00 AM",
    // endShift: "06:00 PM",
    // weekOff: "Saturday & Sunday",
    // address: "1234 Main St, Springfield, IL, USA",
  };

  const [empData, setEmpData] = useState({});

  const fetchEmpData = async () => {
    try {
      const res = await axios.get("/api/user/profile");

      // console.log(res.data);

      setEmpData(res.data.userData);
    } catch (error) {
      console.log(error);

      // toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchEmpData();
  }, []);

  return (
    <main className="flex-1 p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Profile Header */}
        <div className="flex flex-col items-center p-6 border-b">
          <img
            src={user.photo}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-emerald-500"
          />
          <h1 className="mt-4 text-2xl font-bold text-emerald-700 flex items-center gap-2">
            <FaUser /> {empData.name}
          </h1>
          <p className="text-gray-600 flex items-center gap-2 mt-1">
            <FaBriefcase /> {empData.position}
          </p>
        </div>

        {/* User Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 text-gray-700">
          <Detail
            icon={<FaIdBadge />}
            label="Employee ID"
            value={user.employeeId}
          />
          <Detail
            icon={<FaBuilding />}
            label="Department"
            value={empData.department}
          />
          <Detail icon={<FaEnvelope />} label="Email" value={empData.email} />
          <Detail icon={<FaPhone />} label="Phone" value={empData.phone} />
          <Detail
            icon={<FaBirthdayCake />}
            label="Birthday"
            value={empData.dob}
          />
          <Detail
            icon={<FaTransgender />}
            label="Gender"
            value={empData.gender}
          />
          <Detail
            icon={<FaGraduationCap />}
            label="Qualifications"
            value={empData.qualifications}
          />
          <Detail
            icon={<FaBriefcase />}
            label="Position"
            value={empData.position}
          />
          <Detail
            icon={<FaClock />}
            label="Start Shift"
            value={empData.startShiftTime}
          />
          <Detail
            icon={<FaClock />}
            label="End Shift"
            value={empData.endShiftTime}
          />
          <Detail
            icon={<FaCalendarAlt />}
            label="Week Off"
            value={empData.weekOff}
          />
          <Detail icon={<FaHome />} label="Address" value={empData.address} />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Leaves Taken" value="4 this month" />
        <StatCard title="Attendance Rate" value="95%" />
        <StatCard title="Pending Complaints" value="2 unresolved" />
      </div>
    </main>
  );
};

// 🔧 Reusable Detail Field Component
const Detail = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="text-emerald-600 mt-1">{icon}</div>
    <div>
      <p className="font-medium">{label}</p>
      <p className="text-gray-500">{value}</p>
    </div>
  </div>
);

// 🔧 Reusable Stat Card Component
const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
    <p className="text-gray-500 mt-2">{value}</p>
  </div>
);

export default DashboardHome;
