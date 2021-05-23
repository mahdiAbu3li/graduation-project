import { Route, Switch } from "react-router";

import AllModels from "../AllModels/AllModels";
import ModelDescription from "../AllModels/Description/Description";

export const ModelRoute = () => {
  return (
    <Switch>
      <Route exact path="/dashboard/AllModels">
        var
        <AllModels />
      </Route>
      <Route exact path="/dashboard/Allmodels/:modelId/modeldescription">
        <ModelDescription />
      </Route>
    </Switch>
  );
};

export default ModelRoute;
