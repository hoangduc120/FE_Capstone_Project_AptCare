import React from "react";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
