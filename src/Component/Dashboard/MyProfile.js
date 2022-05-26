import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [education, setEducation] = useState("");
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");
  const [profileLink, setProfileLink] = useState("");

  const handlerEducationChange = (e) => {
    setEducation(e.target.value);
  };
  const handlerLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handlerNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handlerLinkdinLinkChange = (e) => {
    setProfileLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div classNmae="hero h-screen">
      <div classNmae="hero-content">
        <form onSubmit={handleSubmit} class="card-body">
          <label class="label mt-4">
            <span class="label-text">Name {user?.displayName}</span>
          </label>
          <input
            type="text"
            class="input input-bordered w-full max"
            value={user?.displayName}
            required
          />
          <label class="label mt-4">
            <span class="label-text">Email: {user?.email}</span>
          </label>
          <input
            type="text"
            class="input input-bordered w-full max"
            value={user?.email}
            required
          />
          <label class="label mt-4">
            <span class="label-text">Education: {education}</span>
          </label>
          <input
            type="text"
            class="input input-bordered w-full max"
            placeholder="education"
            onChange={handlerEducationChange}
          />
          <label class="label mt-4">
            <span class="label-text">Location: {location}</span>
          </label>
          <input
            type="text"
            class="input input-bordered w-full max"
            placeholder="Location"
            onChange={handlerLocationChange}
          />
          <label class="label mt-4">
            <span class="label-text">Phone Number: {number}</span>
          </label>
          <input
            type="text"
            class="input input-bordered w-full max"
            placeholder="Phone Number"
            onChange={handlerNumberChange}
          />
          <label class="label mt-4">
            <span class="label-text">LinkDin profile link: {profileLink}</span>
          </label>
          <input
            type="text"
            class="input input-bordered w-full max"
            placeholder="Linkdin profile Link"
            onChange={handlerLinkdinLinkChange}
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary w-full mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
