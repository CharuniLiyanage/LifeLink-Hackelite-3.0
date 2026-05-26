import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminDashboard from "./admin/AdminDashboard";
import RequestsPage from "./admin/RequestsPage";
import BloodCampsPage from "./admin/BloodCampsPage";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/requests"
          element={<RequestsPage />}
        />

        <Route
          path="/admin/camps"
          element={<BloodCampsPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;