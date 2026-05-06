import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Switcher from "./pages/Switcher";

// v1 directions (kept for prospect comparison)
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

// v2 directions (new client brief — premium lifestyle membership platform)
import LayoutV2A from "./directions/v2/a/Layout";
import HomeV2A from "./directions/v2/a/pages/Home";
import MembershipsV2A from "./directions/v2/a/pages/Memberships";
import WinnersV2A from "./directions/v2/a/pages/Winners";
import EventsV2A from "./directions/v2/a/pages/Events";
import DiscountsV2A from "./directions/v2/a/pages/Discounts";
import CharityV2A from "./directions/v2/a/pages/Charity";
import LoginV2A from "./directions/v2/a/pages/Login";
import DashboardV2A from "./directions/v2/a/pages/Dashboard";

import LayoutV2B from "./directions/v2/b/Layout";
import HomeV2B from "./directions/v2/b/pages/Home";
import MembershipsV2B from "./directions/v2/b/pages/Memberships";
import WinnersV2B from "./directions/v2/b/pages/Winners";
import EventsV2B from "./directions/v2/b/pages/Events";
import DiscountsV2B from "./directions/v2/b/pages/Discounts";
import CharityV2B from "./directions/v2/b/pages/Charity";
import LoginV2B from "./directions/v2/b/pages/Login";
import DashboardV2B from "./directions/v2/b/pages/Dashboard";

import LayoutV2C from "./directions/v2/c/Layout";
import HomeV2C from "./directions/v2/c/pages/Home";
import MembershipsV2C from "./directions/v2/c/pages/Memberships";
import WinnersV2C from "./directions/v2/c/pages/Winners";
import EventsV2C from "./directions/v2/c/pages/Events";
import DiscountsV2C from "./directions/v2/c/pages/Discounts";
import CharityV2C from "./directions/v2/c/pages/Charity";
import LoginV2C from "./directions/v2/c/pages/Login";
import DashboardV2C from "./directions/v2/c/pages/Dashboard";

import LayoutV2D from "./directions/v2/d/Layout";
import HomeV2D from "./directions/v2/d/pages/Home";
import MembershipsV2D from "./directions/v2/d/pages/Memberships";
import WinnersV2D from "./directions/v2/d/pages/Winners";
import EventsV2D from "./directions/v2/d/pages/Events";
import DiscountsV2D from "./directions/v2/d/pages/Discounts";
import CharityV2D from "./directions/v2/d/pages/Charity";
import LoginV2D from "./directions/v2/d/pages/Login";
import DashboardV2D from "./directions/v2/d/pages/Dashboard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Switcher />} />

        {/* v1 — preserved */}
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

        {/* v2 — new brief */}
        <Route path="/v2/a" element={<LayoutV2A />}>
          <Route index element={<HomeV2A />} />
          <Route path="memberships" element={<MembershipsV2A />} />
          <Route path="winners" element={<WinnersV2A />} />
          <Route path="events" element={<EventsV2A />} />
          <Route path="discounts" element={<DiscountsV2A />} />
          <Route path="charity" element={<CharityV2A />} />
          <Route path="login" element={<LoginV2A />} />
          <Route path="dashboard" element={<DashboardV2A />} />
        </Route>

        <Route path="/v2/b" element={<LayoutV2B />}>
          <Route index element={<HomeV2B />} />
          <Route path="memberships" element={<MembershipsV2B />} />
          <Route path="winners" element={<WinnersV2B />} />
          <Route path="events" element={<EventsV2B />} />
          <Route path="discounts" element={<DiscountsV2B />} />
          <Route path="charity" element={<CharityV2B />} />
          <Route path="login" element={<LoginV2B />} />
          <Route path="dashboard" element={<DashboardV2B />} />
        </Route>

        <Route path="/v2/c" element={<LayoutV2C />}>
          <Route index element={<HomeV2C />} />
          <Route path="memberships" element={<MembershipsV2C />} />
          <Route path="winners" element={<WinnersV2C />} />
          <Route path="events" element={<EventsV2C />} />
          <Route path="discounts" element={<DiscountsV2C />} />
          <Route path="charity" element={<CharityV2C />} />
          <Route path="login" element={<LoginV2C />} />
          <Route path="dashboard" element={<DashboardV2C />} />
        </Route>

        <Route path="/v2/d" element={<LayoutV2D />}>
          <Route index element={<HomeV2D />} />
          <Route path="memberships" element={<MembershipsV2D />} />
          <Route path="winners" element={<WinnersV2D />} />
          <Route path="events" element={<EventsV2D />} />
          <Route path="discounts" element={<DiscountsV2D />} />
          <Route path="charity" element={<CharityV2D />} />
          <Route path="login" element={<LoginV2D />} />
          <Route path="dashboard" element={<DashboardV2D />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
