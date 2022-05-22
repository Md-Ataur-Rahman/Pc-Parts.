import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
