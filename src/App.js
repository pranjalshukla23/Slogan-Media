import "./App.css";
import Landing from "./Landing";
import About from "./Components/AboutUs/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Digital from "./Components/Services/Digital-media/Digital";
import SocialM from "./Components/Services/Social-manage/SocialM";
import WebDev from "./Components/Services/Web-dev/WebDev";
import Brand from "./Components/Services/Brand-Services/Brand";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeadCap from "./Components/Services/Blog/LeadCap/LeadCap";
import Blog from "./Components/Services/Blog/Blog";
import SalesPanel from "./Components/Services/Blog/SalesPanel";
import EcommerceBlog from "./Components/Services/Blog/EcommerceBlog";
import HyperLocal from "./Components/Services/Blog/HyperLocal";
import Career from "./Components/Career/Career";
// import Admin from './Components/Admin/Admin';
// import AdminLogin from './Components/Admin/AdminLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route
          exact
          path="/digital-media-advertisement"
          element={<Digital />}
        ></Route>
        <Route
          exact
          path="/social-media-management"
          element={<SocialM />}
        ></Route>
        <Route exact path="/web-development" element={<WebDev />}></Route>
        <Route
          exact
          path="/branding-and-brand-management"
          element={<Brand />}
        ></Route>
        {/* <Route exact path="/admin" element={<Admin/>}></Route> */}
        {/* <Route exact path="/login" element={<AdminLogin/>}></Route> */}
        <Route exact path="/blog">
          <Route index={true} element={<Blog />}></Route>
          <Route exact path="lead" element={<LeadCap />}></Route>
          <Route exact path="sales" element={<SalesPanel />}></Route>
          <Route exact path="ecommerce" element={<EcommerceBlog />}></Route>
          <Route exact path="apps" element={<HyperLocal />}></Route>
        </Route>
        <Route exact path="/career" element={<Career />}></Route>
        {/* <Route exact path="/blog" element={<Blog/>}>
          <Route exact path="lead" element={<LeadCap/>}></Route>
        </Route> */}
        {/* <Services/> */}
        {/* <About/> */}
        {/* <ContactUs/> */}
      </Routes>
    </Router>
  );
}

export default App;
