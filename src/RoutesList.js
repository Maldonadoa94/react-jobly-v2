import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyDetails from "./companies/CompanyDetails";
import CompanyList from "./companies/CompanyList";
import JobList from "./jobs/JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
import userContext from "./userContext";

/** RoutesList: handles routes to the components in Jobly app */

function RoutesList({ login, signup, editProfile }) {
  console.log("In RoutesList");
  const { currentUser } = useContext(userContext);
  
  return (
    <div className="RoutesList">
      <Routes>
        <Route path="/" element={<Homepage />} />
        
        {currentUser.isLoggedIn === false &&
        <>
          <Route path="/login" element={<LoginForm login={login} />}/>
          <Route path="/signup" element={<SignupForm signup={signup} />}/>
        </>
        }

        {currentUser.isLoggedIn === true &&
        <>
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:name" element={<CompanyDetails />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/profile" element={<ProfileForm editProfile={editProfile} />} />
        </>
        }

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RoutesList;