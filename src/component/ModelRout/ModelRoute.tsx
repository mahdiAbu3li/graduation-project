import { Route, Switch } from "react-router";

import ModelPage from "../ModelPage/ModelPage";
import Models from "../Models/Models";
import Verify from "../ModelPage/fileVerification/fileVer";
import Description from "../ModelPage/Description/Description";
import ModelController from "../ModelPage/ModelController/ModelController"

export const ModelRoute = () => {
  return (
    <Switch>
      <Route exact path="/dashboard/model">
        var
        <Models />
      </Route>
      <Route exact path="/dashboard/model/modelpage/:modelId">
        <ModelPage />
      </Route>
      <Route exact path="/dashboard/model/modelpage/:modelId/verify">
        <Verify />
      </Route>
      <Route exact path="/dashboard/model/modelpage/:modelId/description">
        <Description />
      </Route>
      <Route exact path="/dashboard/model/modelpage/:modelId/controller">
        <ModelController/>
      </Route>

    </Switch>
  );
};

export default ModelRoute;
