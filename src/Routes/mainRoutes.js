import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Guest Pages/Home/Home";
import About from "../components/Guest Pages/About";
import Contact from "../components/Guest Pages/Contact";
import Login from "../components/Guest Pages/Authentications/Login";
import Signup from "../components/Guest Pages/Authentications/Register";
import Keynotes from "../components/Guest Pages/KeyNotes/keynotes";
import RequestManagement from "../components/admin/Request Managment/RequestManagement";
import AddTemplates from "../components/admin/Template Managment/AddTemplates";
import ConferenceManagement from "../components/admin/Conference Management/Upcoming/ConferenceManagement";
import AllNav from "../components/admin/AllNav";
import SupportManagment from "../components/admin/Support Management/SupportManagment";

import StaffManagement from "../components/admin/User Management/Staff/Management";
import AddStaffMembers from "../components/admin/User Management/Staff/AddUsers";
import EditStaffMembers from "../components/admin/User Management/Staff/EditUsers";
import DeleteStaffMembers from "../components/admin/User Management/Staff/DeleteUsers";
import ViewStaffRecords from "../components/admin/User Management/Staff/ViewRecords";
import ContactStaffMembers from "../components/admin/User Management/Staff/Contact";

import UserManagement from "../components/admin/User Management/User/Management";
import DeleteUsers from "../components/admin/User Management/User/DeleteUsers";
import ContactUsers from "../components/admin/User Management/User/Contact";

import MainConManagement from "../components/admin/Conference Management/Main/MainConManagement";
import AddUpConference from "../components/admin/Conference Management/Upcoming/AddUpConference";
import ViewTemplates from "../components/admin/Template Managment/ViewTemplates";
import AddSubmission from "../components/Users/Add Submission/AddSubmission";
import PendingSubmissions from "../components/admin/PendingSubmissions/PendingSubmissions";
import ViewSubmission from "../components/admin/ViewSubmission/ViewSubmission";
import Submission from "../components/Users/Submissions/Submission";
import Payment from "../components/Users/Payment";
import EditKeySpeakers from "../components/admin/Conference Management/Main/EditKeySpeakers";
import EditSchedule from "../components/admin/Conference Management/Main/EditSchedule";




function MainRoutes() {
  return (
    <Router>
      <AllNav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/keynotes' component={Keynotes} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        {/*Ushan start*/}
        <Route path='/admin/add-template' component={AddTemplates} />
        <Route path='/admin/view-template' component={ViewTemplates} />
        {/*ushan end*/}

        <Route path='/admin/requestmanagement' component={RequestManagement} />
        {/*Mandara start*/}
        <Route
          path='/admin/conference-management'
          component={MainConManagement}
        />

        <Route
          path='/admin/upcoming-management'
          component={ConferenceManagement}
        />
        <Route path='/admin/addupconference' component={AddUpConference} />
        <Route
          path='/admin/updateupconference/:id'
          component={AddUpConference}
        />
        <Route
          path='/admin/add-images/:id'
          component={EditKeySpeakers}
        />
        <Route
            path='/admin/add-timeline/:id'
            component={EditSchedule}
        />
        {/*Mandara end*/}

        {/*Sandaruwan start*/}
        <Route path='/admin/supportmanagement' component={SupportManagment} />

        <Route
            path='/payment'
            component={Payment}
        />
        <Route
            path='/payment/:e'
            component={Payment}
        />
        <Route path='/admin/staff-management' component={StaffManagement} />
        <Route
          path='/admin/staffmanagement/addmembers'
          component={AddStaffMembers}
        />
        <Route
          path='/admin/staffmanagement/editmembers/:id'
          component={EditStaffMembers}
        />
        <Route
          path='/admin/staffmanagement/deletemembers/:id'
          component={DeleteStaffMembers}
        />

        <Route
          path='/admin/staffmanagement/view/:id'
          component={ViewStaffRecords}
        />

        <Route
          path='/admin/staffmanagement/contactstaff/:id'
          component={ContactStaffMembers}
        />
        <Route path='/admin/user-management' component={UserManagement} />
        <Route
          path='/admin/usermanagement/deletemembers/:id'
          component={DeleteUsers}
        />
        <Route
          path='/admin/usermanagement/editmembers/:id'
          component={ContactUsers}
        />
    <Route  path="/submissions/add" component={AddSubmission}/>
        <Route  path="/user/submissions" component={Submission}/>
    <Route  path="/submissions/pending" component={PendingSubmissions}/>
    <Route  path="/submissions/view/:id" component={ViewSubmission}/>

      </Switch>
    </Router>
  );
}

export default MainRoutes;
