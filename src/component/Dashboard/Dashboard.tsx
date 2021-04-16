import React from "react";
import styles from "./DashboardStyles.module.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { Switch, Route, useHistory } from "react-router-dom";
import Models from "../Models/Models";
function Dashboard() {
  const [isOpen, setIsOpen] = React.useState(false);
  const history = useHistory();
  const goTo = (path: string) => {
    history.push(path);
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
            <div
              className={`${styles.item} ${isOpen ? styles.close_item : ""}`}
              onClick={() => goTo("/dashboard/model")}
            >
              <div
                className={`${styles.icon} ${isOpen ? styles.close_icon : ""}`}
              >
                <AiFillHome />
              </div>
              <span className={` ${isOpen ? styles.close_span : ""}`}>
                my model
              </span>
            </div>
            <div
              className={`${styles.item} ${isOpen ? styles.close_item : ""}`}
              onClick={() => goTo("/dashboard/create")}
            >
              <div
                className={`${styles.icon} ${isOpen ? styles.close_icon : ""}`}
              >
                <AiOutlinePlusCircle />
              </div>
              <span className={` ${isOpen ? styles.close_span : ""}`}>
                create new model
              </span>
            </div>
            <div
              className={`${styles.item} ${isOpen ? styles.close_item : ""}`}
              onClick={() => goTo("/dashboard/setting")}
            >
              <div
                className={`${styles.icon} ${isOpen ? styles.close_icon : ""}`}
              >
                <IoMdSettings />
              </div>
              <span className={` ${isOpen ? styles.close_span : ""}`}>
                setting
              </span>
            </div>
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
        <div className={styles.header}>header</div>
        <div className={styles.content}>
          <Switch>
            <Route exact path={["/dashboard", "/dashboard/model"]}>
              <Models />
            </Route>
            <Route path="/dashboard/create">create new model</Route>
            <Route path="/dashboard/setting">setting</Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
