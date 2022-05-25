import { Route, Routes } from "react-router-dom";
import AddReview from "./Component/Dashboard/AddReview";
import Dashboard from "./Component/Dashboard/Dashboard";
import MyOrder from "./Component/Dashboard/MyOrder";
import MyProfile from "./Component/Dashboard/MyProfile";
import Payment from "./Component/Dashboard/Payment";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Navbar from "./Component/Navbar/Navbar";
import PurchaseItem from "./Component/PurchaseItem/PurchaseItem";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import SignUp from "./Component/SignUp/SignUp";
import NotFound from "./Component/NotFound/NotFound";

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
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route
            path="myorders"
            element={
              <RequireAuth>
                <MyOrder></MyOrder>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="addreview"
            element={
              <RequireAuth>
                <AddReview></AddReview>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="payment/:paymentId"
            element={<Payment></Payment>}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
