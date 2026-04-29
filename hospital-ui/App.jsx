import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Patients from "./components/Patients";
import Doctors from "./components/Doctors";
import Messages from "./components/Messages";
import Medications from "./components/Medications";
import Documents from "./components/Documents";
import Settings from "./components/Settings";
import Login from "./components/Login";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [user, setUser] = useState(null);

  //  Login Screen
  if (!user) {
    return (
      <Login
        onLoginSuccess={(userData) => {
          setUser(userData);
          setPage("dashboard");
        }}
      />
    );
  }

  return (
    <div className="layout">
      {/* Sidebar */}
      <Sidebar page={page} setPage={setPage} />

      {/* Main */}
      <div className="main">
        <Header onLogout={() => setUser(null)} />

        {/*  ALL PAGES */}
        {page === "dashboard" && <Dashboard />}
        {page === "patients" && <Patients />}
        {page === "doctors" && <Doctors />}
        {page === "messages" && <Messages />}
        {page === "medications" && <Medications />}
        {page === "documents" && <Documents />}
        {page === "settings" && <Settings />}
      </div>
    </div>
  );
}
