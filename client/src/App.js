import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";
import "./main.css";
import "./util.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import LeaveRequest from "./pages/LeaveRequest/LeaveRequest";
import LeaveDetail from "./pages/LeaveDetail/LeaveDetail";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer.js/Footer";
import HomePage from "./pages/HomePage/HomePage";
import LeaveList from "./pages/LeaveList/LeaveList";

function App() {
  return (
    <Router>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/leave" element={<LeaveRequest />} />
          <Route path="/list" element={<LeaveList />} />
          <Route path="/leave/:empID" element={<LeaveDetail />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
