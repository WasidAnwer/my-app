import Header from "./common/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import SignUp from "./pages/SignUp";
import ProductList from "./pages/products/ProductList";
import Navbar from "./common/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        {/* <Navbar /> */}
        <ProductList />
        {/* <Home /> */}
        {/* <SignUp /> */}
        <Login />
        {/* <Navbar />
        <Home /> */}
        {/* <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
