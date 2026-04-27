import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Switcher from "./pages/Switcher";

import LayoutA from "./directions/a/Layout";
import HomeA from "./directions/a/pages/Home";
import MembershipsA from "./directions/a/pages/Memberships";
import DrawA from "./directions/a/pages/Draw";
import DashboardA from "./directions/a/pages/Dashboard";

import LayoutB from "./directions/b/Layout";
import HomeB from "./directions/b/pages/Home";
import MembershipsB from "./directions/b/pages/Memberships";
import DrawB from "./directions/b/pages/Draw";
import DashboardB from "./directions/b/pages/Dashboard";

import LayoutC from "./directions/c/Layout";
import HomeC from "./directions/c/pages/Home";
import MembershipsC from "./directions/c/pages/Memberships";
import DrawC from "./directions/c/pages/Draw";
import DashboardC from "./directions/c/pages/Dashboard";

import LayoutD from "./directions/d/Layout";
import HomeD from "./directions/d/pages/Home";
import MembershipsD from "./directions/d/pages/Memberships";
import DrawD from "./directions/d/pages/Draw";
import DashboardD from "./directions/d/pages/Dashboard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Switcher />} />

        <Route path="/a" element={<LayoutA />}>
          <Route index element={<HomeA />} />
          <Route path="memberships" element={<MembershipsA />} />
          <Route path="draw" element={<DrawA />} />
          <Route path="dashboard" element={<DashboardA />} />
        </Route>

        <Route path="/b" element={<LayoutB />}>
          <Route index element={<HomeB />} />
          <Route path="memberships" element={<MembershipsB />} />
          <Route path="draw" element={<DrawB />} />
          <Route path="dashboard" element={<DashboardB />} />
        </Route>

        <Route path="/c" element={<LayoutC />}>
          <Route index element={<HomeC />} />
          <Route path="memberships" element={<MembershipsC />} />
          <Route path="draw" element={<DrawC />} />
          <Route path="dashboard" element={<DashboardC />} />
        </Route>

        <Route path="/d" element={<LayoutD />}>
          <Route index element={<HomeD />} />
          <Route path="memberships" element={<MembershipsD />} />
          <Route path="draw" element={<DrawD />} />
          <Route path="dashboard" element={<DashboardD />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
