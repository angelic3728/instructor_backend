/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Calendar from "views/pages/Calendar.js";
import Profile from "views/pages/Profile.js";
import Tables from "views/pages/tables/Tables.js";
import Students from "views/pages/list-students.js";
import Login from "views/pages/Login.js";

const routes = [
  {
    path: "/calendar",
    name: "Calendar",
    icon: "ni ni-calendar-grid-58 text-red",
    component: Calendar,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Anfragen",
    icon: "ni ni-bell-55 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/list-students",
    name: "Fahrschüler",
    icon: "ni ni-hat-3 text-red",
    component: Students,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "Profil",
    icon: "ni ni-single-02 text-red",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/auth",
    redirect: "false"
  }
];

export default routes;
