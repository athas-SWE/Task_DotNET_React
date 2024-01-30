import { useContext, lazy, Suspense } from "react";
import Navbar from "./components/navbar/Navbar.component";
import { ThemeContext } from "./context/theme.context";
import { Routes, Route } from "react-router-dom";
import CustomLinearProgress from "./components/custom-linear-progress/CustomLinearProgress.component";
import React from "react";

// Imports with Lazy loading
const Home = lazy(() => import("./pages/home/Home.page"));
const Departments = lazy(() => import("./pages/departments/Departments.page"));
const AddDepartment = lazy(
  () => import("./pages/departments/AddDepartment.page")
);
const Jobs = lazy(() => import("./pages/jobs/Jobs.page"));
const AddJob = lazy(() => import("./pages/jobs/AddJob.page"));
const Employees = lazy(() => import("./pages/employees/Employees.page"));
const AddEmployee = lazy(() => import("./pages/employees/AddEmployee.page"));

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  const appStyles = darkMode ? "app dark" : "app";

  return (
    <div className={appStyles}>
      <Navbar />
      <div className="wrapper">
        <Suspense fallback={<CustomLinearProgress />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/departments">
              <Route index element={<Departments />} />
              <Route path="add" element={<AddDepartment />} />
            </Route>
            <Route path="/jobs">
              <Route index element={<Jobs />} />
              <Route path="add" element={<AddJob />} />
            </Route>
            <Route path="/employees">
              <Route index element={<Employees />} />
              <Route path="add" element={<AddEmployee />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
