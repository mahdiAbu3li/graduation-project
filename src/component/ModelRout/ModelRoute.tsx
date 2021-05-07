import { Route, Switch } from "react-router";

import ModelPage from "../ModelPage/ModelPage";
import Models from "../Models/Models";
import Verify from "../ModelPage/fileVerification/fileVer";
import Description from "../ModelPage/Description/Description";

export const ModelRoute = () => {
    
    return(
        <Switch>
        <Route exact path="/dashboard/model">var
        <Models/>
        </Route>
        <Route exact path="/dashboard/model/modelpage">
          <ModelPage/>
        </Route>

        <Route exact path="/dashboard/model/modelpage/verify">
          <Verify/>
        </Route>
        <Route exact path="/dashboard/model/modelpage/description">
          <Description/>
        </Route>
        

      </Switch>
    )

}

export default ModelRoute;