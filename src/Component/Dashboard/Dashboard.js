import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../hooks/useAdmin.js";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if (adminLoading) {
    return <Loading></Loading>;
  }
  console.log(admin);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-3xl font-bold text-center py-4">Your Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side bg-base-200">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          {!admin && (
            <>
              <li>
                <Link to="/dashboard/addreview">Add a Review</Link>
              </li>
              <li>
                <Link to="/dashboard/myorders">My orders</Link>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <Link to="/dashboard/addproduct">Add A Product</Link>
              </li>
              <li>
                <Link to="/dashboard/makeadmin">Make A Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/manageproducts">Manage Products</Link>
              </li>
              <li>
                <Link to="/dashboard/manageallorders">Manage All Orders</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
