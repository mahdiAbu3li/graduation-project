import { Route, Switch, useHistory } from "react-router";
import ModelPage from "../ModelPage/ModelPage";
import Models from "../Models/Models";

export const ModelRoute = () => {
    return(
        <Switch>
        <Route exact path="/dashboard/model">var
        <Models/>
        </Route>
        <Route  path="/dashboard/model/modelpage">
          <ModelPage/>
          {/* <div style={{backgroundColor:"red" , width:"500px" , height:"500px"}}>hi</div> */}
        </Route>
      </Switch>
    )

}

export default ModelRoute;