import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import BuildRouter from "./utils/BuildRoutes";
import { routes } from "./routes/Routes";

export default function App() {
  return (
    <Router>
      <Routes>{BuildRouter(routes)}</Routes>
    </Router>
  );
}
