import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
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
        <Route path="/post/:id" element={<Single />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/compliance" element={<Compliance/> } />
      </Routes>
    </Router>
  );
}

export default App;
