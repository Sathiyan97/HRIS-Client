import React, {useEffect, useState} from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
import {Box, IconButton, Link} from '@material-ui/core'
import Icon from '@mdi/react'

//icons
import {
  mdiFacebook as FacebookIcon,
  mdiTwitter as TwitterIcon,
  mdiGithub as GithubIcon,
} from '@mdi/js'

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import Users from "../../pages/Admin/UserManagement/Users"
import JobTitles from "../../pages/Admin/Job/JobTitles"
// context
import { useLayoutState } from "../../context/LayoutContext";
import JobTitlesAdd from "../../pages/Admin/Job/JobTitlesAdd";
import PayGrades from "../../pages/Admin/Job/PayGrades";
import PayGradesAdd from "../../pages/Admin/Job/PayGradesAdd";
import EmployementStatus from "../../pages/Admin/Job/EmployementStatus";
import JobCategories from "../../pages/Admin/Job/JobCategories";
import AddWorkShift from "../../pages/Admin/Job/AddWorkShift";
import GeneralInformation from "../../pages/Admin/Organization/GeneralInformation";
import Locations from "../../pages/Admin/Organization/Locations";
import LocationsAdd from "../../pages/Admin/Organization/LocationsAdd";
import Education from "../../pages/Admin/Qualfications/Education";
import Skills from "../../pages/Admin/Qualfications/Skills";
import Languages from "../../pages/Admin/Qualfications/Languages";
import Licenses from "../../pages/Admin/Qualfications/Licenses";
import Memberships from "../../pages/Admin/Qualfications/Memberships";
import CustomFields from "../../pages/PIM/Configuration/CustomFields";
import OptionalFields from "../../pages/PIM/Configuration/OptionalFields";
import DataImport from "../../pages/PIM/Configuration/DataImport";
import ReportingMethods from "../../pages/PIM/Configuration/ReportingMethods";
import TerminatedReasons from "../../pages/PIM/Configuration/TerminatedReasons";
import ReportMethods from "../../pages/PIM/Configuration/ReportMethods";
import EmployeeList from "../../pages/PIM/Employee List/EmployeeList";
import AddEmployee from "../../pages/PIM/Add Employee/AddEmployee";
import MyInfo from "../../pages/MyInfo/MyInfo";
import ForgetPassword from "../../pages/ForgetPassword/ForgetPassword";
import EmploymentStatus from "../../pages/Admin/Job/EmployementStatus";
import Nationality from "../../pages/Admin/Nationality/Nationality";
import EmpInfo from "../../pages/EmpInfo/MyInfo";
import applyLeave from "../../pages/Leave/ApplyLeave";
import ApplyLeave from "../../pages/Leave/ApplyLeave";
import AssignLeave from "../../pages/Leave/AssignLeave";
import {readAllJobCategories} from "../../context/JobContext";
import {readUserRole} from "../../context/UserContext";
function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();
  // alert('props layoiut: ' + JSON.stringify(props));
    let [userRole, setUserRole]  = useState('');

    useEffect(() => {
        readUserRole().then(r => setUserRole(r))
    }, ["/app/admin/job/employmentStatus"]);
    console.log(userRole)
if(userRole==='admin') {
    return (
        <div className={classes.root}>
            <>
                <Header history={props.history}/>
                <Sidebar/>
                <div
                    className={classnames(classes.content, {
                        [classes.contentShift]: layoutState.isSidebarOpened,
                    })}
                >
                    <div className={classes.fakeToolbar}/>
                    <Switch>
                        <Route path="/app/dashboard" component={Dashboard}/>
                        <Route path="/app/typography" component={Typography}/>
                        <Route path="/app/tables" component={Tables}/>
                        <Route path="/app/notifications" component={Notifications}/>
                        <Route
                            exact
                            path="/app/ui"
                            render={() => <Redirect to="/app/ui/icons"/>}
                        />
                        <Route path="/app/ui/maps" component={Maps}/>
                        <Route path="/app/ui/icons" component={Icons}/>
                        <Route path="/app/ui/charts" component={Charts}/>
                        //--ADMIN MODULE-->
                        //User Management
                        <Route path="/app/admin/userManagement" component={Users}/>
                        <Route path="/app/admin/userManagement/users/" component={Users}/>
                        //Job
                        {/*<Route path="/app/admin/job" component={JobTitles} />*/}
                        <Route path="/app/admin/job/jobTitles" component={JobTitles}/>
                        <Route path="/app/admin/job/jobTitles1" component={JobTitles}/>
                        <Route path="/app/admin/job/jobTitlesAdd" component={JobTitlesAdd}/>
                        <Route path="/app/admin/job/payGrades" component={PayGrades}/>
                        <Route path="/app/admin/job/payGradesAdd" component={PayGradesAdd}/>
                        <Route path="/app/admin/job/employmentStatus" component={EmploymentStatus}/>
                        <Route path="/app/admin/job/jobCategories" component={JobCategories}/>
                        <Route path="/app/admin/job/addWorkShift" component={AddWorkShift}/>
                        //Organization
                        {/*<Route path="/app/admin/organization" component={GeneralInformation} />*/}
                        <Route path="/app/admin/organization/generalInformation" component={GeneralInformation}/>
                        <Route path="/app/admin/organization/locations" component={Locations}/>
                        <Route path="/app/admin/organization/locationsAdd" component={LocationsAdd}/>
                        <Route path="/app/admin/organization/structure" component={Locations}/>
                        //Nationality
                        <Route path="/app/admin/nationality/" component={Nationality}/>
                        //Qualifications
                        {/*<Route path="/app/admin/qualifications" component={Education} />*/}
                        <Route path="/app/admin/qualifications/education" component={Education}/>
                        <Route path="/app/admin/qualifications/languages" component={Languages}/>
                        <Route path="/app/admin/qualifications/licenses" component={Licenses}/>
                        <Route path="/app/admin/qualifications/memberships" component={Memberships}/>
                        <Route path="/app/admin/qualifications/skills" component={Skills}/>
                        //Configuration
                        {/*<Route path="/app/admin/configuration" component={Education} />*/}
                        <Route path="/app/admin/configuration/emailConfiguration" component={Education}/>
                        <Route path="/app/admin/configuration/emailSubscription" component={Languages}/>
                        <Route path="/app/admin/configuration/location" component={Licenses}/>
                        <Route path="/app/admin/configuration/socialAndAuth" component={Memberships}/>
                        <Route path="/app/admin/configuration/registerOAuthClient" component={Skills}/>

                        //--PIM MODULE-->
                        {/*<Route path="/app/pim/" component={CustomFields} />*/}
                        //Configuration
                        {/*<Route path="/app/pim/configuration/customFields" component={CustomFields} />*/}
                        <Route path="/app/pim/configuration/customFields" component={CustomFields}/>
                        <Route path="/app/pim/configuration/optionalFields" component={OptionalFields}/>
                        <Route path="/app/pim/configuration/terminatedReasons" component={TerminatedReasons}/>
                        <Route path="/app/pim/configuration/dataImport" component={DataImport()}/>
                        <Route path="/app/pim/configuration/reportMethods" component={ReportMethods}/>
                        <Route path="/app/pim/configuration/employeeList" component={EmployeeList}/>
                        //Employee List
                        <Route path="/app/pim/employeeList" component={EmployeeList}/>
                        //Add Employee
                        <Route path="/app/pim/addEmployee" component={AddEmployee}/>
                        //Reports
                        <Route path="/app/pim/reports" component={OptionalFields}/>
                        //Emp Info
                        <Route path="/app/pim/app/empInfo" component={EmpInfo}/>


                        //--LEAVE MODULE-->
                        {/*<Route path="/app/leave" component={MyInfo} />*/}
                        //Apply Leave
                        <Route path="/app/leave/applyLeave" component={ApplyLeave}/>
                        <Route path="/app/leave/myLeave" component={MyInfo}/>
                        //Entitlements
                        {/*<Route path="/app/leave/entitlements" component={MyInfo} />*/}
                        <Route path="/app/leave/entitlements/addEntitlements" component={MyInfo}/>
                        <Route path="/app/leave/entitlements/employeeEntitlements" component={MyInfo}/>
                        <Route path="/app/leave/entitlements/myEntitlements" component={MyInfo}/>
                        //Reports
                        {/*<Route path="/app/leave/reports" component={ForgetPassword} />*/}
                        <Route path="/app/leave/reports/leaveAndUsage" component={MyInfo}/>
                        <Route path="/app/leave/reports/myLeaveAndUsage/" component={MyInfo}/>
                        //Configure
                        {/*<Route path="/app/leave/configure" component={ForgetPassword} />*/}
                        <Route path="/app/leave/configure/leavePeriod" component={MyInfo}/>
                        <Route path="/app/leave/configure/leaveTypes/" component={MyInfo}/>
                        <Route path="/app/leave/configure/workWeek/" component={MyInfo}/>
                        <Route path="/app/leave/configure/holidays/" component={MyInfo}/>
                        //Leave List
                        <Route path="/app/leave/leaveList" component={MyInfo}/>
                        //Assign Leave

                        <Route path="/app/leave/assignLeave" component={AssignLeave}/>


                        //--TIME MODULE-->
                        <Route path="/app/time" component={MyInfo}/>
                        //Time Sheets

                        {/*<Route path="/app/time/mtTimeSheets" component={MyInfo} />*/}
                        <Route path="/app/time/employeeList" component={MyInfo}/>
                        //Attendance
                        {/*<Route path="/app/time/attendance" component={MyInfo} />*/}
                        <Route path="/app/time/attendance/myRecords" component={MyInfo}/>
                        <Route path="/app/time/attendance/punchInOut" component={MyInfo}/>
                        <Route path="/app/time/attendance/employeeRecords" component={MyInfo}/>
                        <Route path="/app/time/attendance/configuration" component={MyInfo}/>
                        //Reports
                        {/*<Route path="/app/time/reports" component={ForgetPassword} />*/}
                        <Route path="/app/time/reports/projectReports" component={MyInfo}/>
                        <Route path="/app/time/reports/employeeReports/" component={MyInfo}/>
                        <Route path="/app/time/reports/attendanceSummary/" component={MyInfo}/>
                        //Project Info
                        {/*<Route path="/app/time/projectInfo" component={ForgetPassword} />*/}
                        <Route path="/app/time/projectInfo/customers" component={MyInfo}/>
                        <Route path="/app/time/projectInfo/projects/" component={MyInfo}/>


                        //--RECRUITMENT MODULE-->
                        <Route path="/app/recruitment" component={MyInfo}/>

                        //--MYINFO MODULE-->
                        <Route path="/app/myInfo" component={MyInfo}/>

                        //--DIRECTORY MODULE-->
                        <Route path="/app/directory" component={MyInfo}/>

                        //--BUZZ MODULE-->
                        <Route path="/app/buzz" component={MyInfo}/>


                    </Switch>

                </div>
            </>
        </div>
    );
}else {
    return (
        <div className={classes.root}>
            <>
                <Header history={props.history}/>
                <Sidebar/>
                <div
                    className={classnames(classes.content, {
                        [classes.contentShift]: layoutState.isSidebarOpened,
                    })}
                >
                    <div className={classes.fakeToolbar}/>
                    <Switch>
                        <Route path="/app/dashboard" component={Dashboard}/>
                        <Route path="/app/typography" component={Typography}/>
                        <Route path="/app/tables" component={Tables}/>
                        <Route path="/app/notifications" component={Notifications}/>
                        <Route
                            exact
                            path="/app/ui"
                            render={() => <Redirect to="/app/ui/icons"/>}
                        />
                        <Route path="/app/ui/maps" component={Maps}/>
                        <Route path="/app/ui/icons" component={Icons}/>
                        <Route path="/app/ui/charts" component={Charts}/>
                        //--ADMIN MODULE-->
                        //User Management
                        <Route path="/app/admin/userManagement" component={Users}/>
                        <Route path="/app/admin/userManagement/users/" component={Users}/>
                        //Job
                        {/*<Route path="/app/admin/job" component={JobTitles} />*/}
                        <Route path="/app/admin/job/jobTitles" component={JobTitles}/>
                        <Route path="/app/admin/job/jobTitles1" component={JobTitles}/>
                        <Route path="/app/admin/job/jobTitlesAdd" component={JobTitlesAdd}/>
                        <Route path="/app/admin/job/payGrades" component={PayGrades}/>
                        <Route path="/app/admin/job/payGradesAdd" component={PayGradesAdd}/>
                        <Route path="/app/admin/job/employmentStatus" component={EmploymentStatus}/>
                        <Route path="/app/admin/job/jobCategories" component={JobCategories}/>
                        <Route path="/app/admin/job/addWorkShift" component={AddWorkShift}/>
                        //Organization
                        {/*<Route path="/app/admin/organization" component={GeneralInformation} />*/}
                        <Route path="/app/admin/organization/generalInformation" component={GeneralInformation}/>
                        <Route path="/app/admin/organization/locations" component={Locations}/>
                        <Route path="/app/admin/organization/locationsAdd" component={LocationsAdd}/>
                        <Route path="/app/admin/organization/structure" component={Locations}/>
                        //Nationality
                        <Route path="/app/admin/nationality/" component={Nationality}/>
                        //Qualifications
                        {/*<Route path="/app/admin/qualifications" component={Education} />*/}
                        <Route path="/app/admin/qualifications/education" component={Education}/>
                        <Route path="/app/admin/qualifications/languages" component={Languages}/>
                        <Route path="/app/admin/qualifications/licenses" component={Licenses}/>
                        <Route path="/app/admin/qualifications/memberships" component={Memberships}/>
                        <Route path="/app/admin/qualifications/skills" component={Skills}/>
                        //Configuration
                        {/*<Route path="/app/admin/configuration" component={Education} />*/}
                        <Route path="/app/admin/configuration/emailConfiguration" component={Education}/>
                        <Route path="/app/admin/configuration/emailSubscription" component={Languages}/>
                        <Route path="/app/admin/configuration/location" component={Licenses}/>
                        <Route path="/app/admin/configuration/socialAndAuth" component={Memberships}/>
                        <Route path="/app/admin/configuration/registerOAuthClient" component={Skills}/>

                        //--PIM MODULE-->
                        {/*<Route path="/app/pim/" component={CustomFields} />*/}
                        //Configuration
                        {/*<Route path="/app/pim/configuration/customFields" component={CustomFields} />*/}
                        <Route path="/app/pim/configuration/customFields" component={CustomFields}/>
                        <Route path="/app/pim/configuration/optionalFields" component={OptionalFields}/>
                        <Route path="/app/pim/configuration/terminatedReasons" component={TerminatedReasons}/>
                        <Route path="/app/pim/configuration/dataImport" component={DataImport()}/>
                        <Route path="/app/pim/configuration/reportMethods" component={ReportMethods}/>
                        <Route path="/app/pim/configuration/employeeList" component={EmployeeList}/>
                        //Employee List
                        <Route path="/app/pim/employeeList" component={EmployeeList}/>
                        //Add Employee
                        <Route path="/app/pim/addEmployee" component={AddEmployee}/>
                        //Reports
                        <Route path="/app/pim/reports" component={OptionalFields}/>
                        //Emp Info
                        <Route path="/app/pim/app/empInfo" component={EmpInfo}/>


                        //--LEAVE MODULE-->
                        {/*<Route path="/app/leave" component={MyInfo} />*/}
                        //Apply Leave
                        <Route path="/app/leave/applyLeave" component={ApplyLeave}/>
                        <Route path="/app/leave/myLeave" component={MyInfo}/>
                        //Entitlements
                        {/*<Route path="/app/leave/entitlements" component={MyInfo} />*/}
                        <Route path="/app/leave/entitlements/addEntitlements" component={MyInfo}/>
                        <Route path="/app/leave/entitlements/employeeEntitlements" component={MyInfo}/>
                        <Route path="/app/leave/entitlements/myEntitlements" component={MyInfo}/>
                        //Reports
                        {/*<Route path="/app/leave/reports" component={ForgetPassword} />*/}
                        <Route path="/app/leave/reports/leaveAndUsage" component={MyInfo}/>
                        <Route path="/app/leave/reports/myLeaveAndUsage/" component={MyInfo}/>
                        //Configure
                        {/*<Route path="/app/leave/configure" component={ForgetPassword} />*/}
                        <Route path="/app/leave/configure/leavePeriod" component={MyInfo}/>
                        <Route path="/app/leave/configure/leaveTypes/" component={MyInfo}/>
                        <Route path="/app/leave/configure/workWeek/" component={MyInfo}/>
                        <Route path="/app/leave/configure/holidays/" component={MyInfo}/>
                        //Leave List
                        <Route path="/app/leave/leaveList" component={MyInfo}/>
                        //Assign Leave

                        {/*<Route path="/app/leave/assignLeave" component={AssignLeave}/>*/}


                        //--TIME MODULE-->
                        <Route path="/app/time" component={MyInfo}/>
                        //Time Sheets

                        {/*<Route path="/app/time/mtTimeSheets" component={MyInfo} />*/}
                        <Route path="/app/time/employeeList" component={MyInfo}/>
                        //Attendance
                        {/*<Route path="/app/time/attendance" component={MyInfo} />*/}
                        <Route path="/app/time/attendance/myRecords" component={MyInfo}/>
                        <Route path="/app/time/attendance/punchInOut" component={MyInfo}/>
                        <Route path="/app/time/attendance/employeeRecords" component={MyInfo}/>
                        <Route path="/app/time/attendance/configuration" component={MyInfo}/>
                        //Reports
                        {/*<Route path="/app/time/reports" component={ForgetPassword} />*/}
                        <Route path="/app/time/reports/projectReports" component={MyInfo}/>
                        <Route path="/app/time/reports/employeeReports/" component={MyInfo}/>
                        <Route path="/app/time/reports/attendanceSummary/" component={MyInfo}/>
                        //Project Info
                        {/*<Route path="/app/time/projectInfo" component={ForgetPassword} />*/}
                        <Route path="/app/time/projectInfo/customers" component={MyInfo}/>
                        <Route path="/app/time/projectInfo/projects/" component={MyInfo}/>


                        //--RECRUITMENT MODULE-->
                        <Route path="/app/recruitment" component={MyInfo}/>

                        //--MYINFO MODULE-->
                        <Route path="/app/myInfo" component={MyInfo}/>

                        //--DIRECTORY MODULE-->
                        <Route path="/app/directory" component={MyInfo}/>

                        //--BUZZ MODULE-->
                        <Route path="/app/buzz" component={MyInfo}/>


                    </Switch>

                </div>
            </>
        </div>
    );
}
}

export default withRouter(Layout);
