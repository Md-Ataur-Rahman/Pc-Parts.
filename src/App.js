import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Navbar from "./Component/Navbar/Navbar";
import PurchaseItem from "./Component/PurchaseItem/PurchaseItem";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import SignUp from "./Component/SignUp/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <PurchaseItem />
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
