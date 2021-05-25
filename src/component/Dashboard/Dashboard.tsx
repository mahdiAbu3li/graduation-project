import React, { useContext } from "react";
import styles from "./DashboardStyles.module.css";
import { AiFillHome } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { Switch, Route, NavLink } from "react-router-dom";
// import Models from "../Models/Models";
import CreateNewModel from "../CreateNewModel/CreateNewModel";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import ModelsRout from "../ModelRout/ModelRoute";
import Settings from "../Settings/Settings";
import AllModelsRout from "../AllModels/AllModelRoute";
import Swal from "sweetalert2";
// import ModelPage from "../ModelPage/ModelPage";

function Dashboard() {
  const [isOpen, setIsOpen] = React.useState(false);
  const values = useContext(AuthContext);
  // const history = useHistory();
  // const goTo = (path: string) => {
  //   // console.log(
  //   //   "location",
  //   //   window.location.pathname.split("/")[2],
  //   //   " path",
  //   //   path.split("/")[2]
  //   // );
  //   if (
  //     window.location.pathname.split("/")[2] !== path.split("/")[2] ||
  //     window.location.pathname.split("/")[2] !== "create"
  //   ) {
  //     // console.log(true);
  //     history.push(path);
  //   }
  // };

  const logout = () => {
    const url = "https://graduationprojectt.herokuapp.com/api/logout";
    fetch(url, {
      method: "post",
      headers: {
        Authorization: `Bearer ` + values.data.token,
        // "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          values.onLogout();
          return res.json();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: res.statusText,
            footer: "<a href>Why do I have this issue?</a>",
          });
        }
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <div
        className={`${styles.container} ${
          isOpen ? styles.close_container : ""
        }`}
      >
        <div className={styles.nav}>
          <div className={styles.navLogo}>
            <div>hi5 logo</div>
          </div>
          <div className={styles.navList}>
            <NavLink
              className={`${styles.item} ${isOpen ? styles.close_item : ""}`}
              // onClick={() => goTo("/dashboard/model")}
              activeStyle={{ backgroundColor: "red" }}
              to="/dashboard/model"
            >
              <div
                className={`${styles.icon} ${isOpen ? styles.close_icon : ""}`}
              >
                <AiFillHome />
              </div>
              <span className={` ${isOpen ? styles.close_span : ""}`}>
                my model
              </span>
            </NavLink>
            <NavLink
              className={`${styles.item} ${isOpen ? styles.close_item : ""}`}
              // onClick={() => goTo("/dashboard/create")}
              to="/dashboard/create"
            >
              <div
                className={`${styles.icon} ${isOpen ? styles.close_icon : ""}`}
              >
                <AiOutlinePlusCircle />
              </div>
              <span className={` ${isOpen ? styles.close_span : ""}`}>
                create new model
              </span>
            </NavLink>
            <NavLink
              className={`${styles.item} ${isOpen ? styles.close_item : ""}`}
              // onClick={() => goTo("/dashboard/setting")}
              to="/dashboard/setting"
            >
              <div
                className={`${styles.icon} ${isOpen ? styles.close_icon : ""}`}
              >
                <IoMdSettings />
              </div>
              <span className={` ${isOpen ? styles.close_span : ""}`}>
                setting
              </span>
            </NavLink>

            <NavLink
              className={`${styles.item} ${isOpen ? styles.close_item : ""}`}
              // onClick={() => goTo("/dashboard/AllModels")}
              to="/dashboard/AllModels"
            >
              <div
                className={`${styles.icon} ${isOpen ? styles.close_icon : ""}`}
              >
                <IoMdSettings />
              </div>
              <span className={` ${isOpen ? styles.close_span : ""}`}>
                All Models
              </span>
            </NavLink>
          </div>

          <div
            className={`${styles.navShrink} ${
              isOpen ? styles.close_navShrink : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${styles.back} ${isOpen ? styles.close_back : ""}`}
            >
              <IoIosArrowBack />
            </div>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.logout} onClick={() => logout()}>
            <p>logout</p>
            <FiLogOut />
          </div>
        </div>
        <div className={styles.content}>
          <Switch>
            <Route path={["/dashboard/model"]}>
              {/* <Models /> */}
              <ModelsRout />
            </Route>
            <Route path="/dashboard/create">
              <CreateNewModel />
            </Route>
            <Route path="/dashboard/setting">
              <Settings />
            </Route>

            <Route path={["/dashboard/AllModels"]}>
              <AllModelsRout />
            </Route>

            {/* <Route path="/dashboard/setting">setting</Route>  */}
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
