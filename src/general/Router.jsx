import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths.jsx";
import { Home } from "../pages/home/Home.jsx";
import { GeschaeftsberichtJSD } from "../pages/projects/GeschaeftsberichtJSD.jsx";
import { Contact } from "../pages/contact/Contact.jsx"
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.CONTACT}
      element={
        <Layout>
          <Contact />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.GBJSD}
      element={
        <Layout>
          <GeschaeftsberichtJSD />
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
