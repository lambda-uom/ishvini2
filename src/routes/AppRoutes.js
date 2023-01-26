import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Jobtitle from "../pages/Jobtitle";
import Chapter from "../pages/Chapter";
import ViewChapter from "../pages/ViewChapter";
import AllocateChapter from "../pages/AllocateChapter";
import EditAllocate from "../pages/EditAllocate";
import Home from "../pages/Home";
import Department from "../pages/Department";
import EnrollRequestSupervisor from "../pages/EnrollRequestSupervisor";
import EnrollRequestEmployee from "../pages/EnrollRequestEmployee";
import AddDepartment from "../pages/subpages/AddDepartment";
import EditDepartment from "../pages/subpages/EditDepartment";
import DeleteDepartment from "../pages/subpages/DeleteDepartment";
import ProfileOverview from "../pages/ProfileOverview";
import PermanentDeleteChapter from "../pages/PermanentDeleteChapter";
import AddJobtitle from "../pages/subpages/AddJobtitle";
import EditJobtitle from "../pages/subpages/EditJobtitle";
import DeleteJobtitle from "../pages/subpages/DeleteJobtitle";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />

        <Route exact path="/department/" element={<Department />} />
        <Route exact path="/jobtitle/" element={<Jobtitle />} />
        <Route exact path="/chapter/" element={<Chapter />} />
        <Route exact path="/viewchapter/" element={<ViewChapter />} />
        <Route exact path="/allocatechapter/" element={<AllocateChapter />} />
        <Route exact path="/editallocatechapter/" element={<EditAllocate />} />
        <Route exact path="/profile/" element={<ProfileOverview />} />
        <Route
          exact
          path="/permanentdeletechapter/"
          element={<PermanentDeleteChapter />}
        />

        <Route
          exact
          path="/enrollrequestsupervisor/"
          element={<EnrollRequestSupervisor />}
        />
        <Route
          exact
          path="/enrollrequestemployee/"
          element={<EnrollRequestEmployee />}
        />
        <Route exact path="/newdep/" element={<AddDepartment />} />
        <Route exact path="/editdep/" element={<EditDepartment />} />
        <Route exact path="/deletedep/" element={<DeleteDepartment />} />
        <Route exact path="/newjob/" element={<AddJobtitle />} />
        <Route exact path="/editjob/" element={<EditJobtitle />} />
        <Route exact path="/deletejob/" element={<DeleteJobtitle />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
