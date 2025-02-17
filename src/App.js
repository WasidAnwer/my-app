
import Login from "./pages/Login";
import Home from "./pages/Home";
import Add from "./pages/products/Add";
import Header1 from "./common/Header1";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import SignUp from "./pages/SignUp";
import ProductList from "./pages/products/ProductList";
// import Navbar from "./common/Navbar";
import Items from "./pages/items/Items";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar1 from "./common/Navbar1";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header1 />
        <Navbar1 />
        {/* <Items /> */}
        {/* <Add /> */}
        {/* <ProductList /> */}
        {/* <Home /> */}
        {/* <SignUp /> */}
        {/* <Login /> */}
        {/* <Navbar />
        <Home /> */}
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/Add" element={<Add />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/List" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
