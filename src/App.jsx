import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import About from "./pages/about/About";
import Compliance from "./pages/compliance/compliance";
import Contact from "./pages/contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const currentUser = true;

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={currentUser ? <Homepage /> : <Register />} />
        <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
        <Route path="/compliance" element={<Compliance/> } />
      </Routes>
    </Router>
  );
}

export default App;
