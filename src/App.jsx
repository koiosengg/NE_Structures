import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
 return (
   <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path="/">
         <Route index element={<Home />} />
         <Route path="contact" element={<Contact />} />
         <Route path="about" element={<About />} />
         <Route path="*" element={<Home />} />
       </Route>
     </Routes>
     <Footer />
   </BrowserRouter>
 );
}

export default App;
