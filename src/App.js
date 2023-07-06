import "./App.css";
import FieldGroove from "./FieldGroove";
import Footer1 from "./Footer1";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";

import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Layout({ children }) {
  return (
    <>
      <FieldGroove />
      {children}
      <Footer1 />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><SignIn /></Layout>} />
      <Route path="/signup" element={<Layout><SignUp /></Layout>} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
