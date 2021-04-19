import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FourOFour from "../views/404";
import Home from "../views/Home";
import PokeDatail from "../views/PokeDatail";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/pokemon/:id">
          <PokeDatail></PokeDatail>
        </Route>
        <Route>
          <FourOFour></FourOFour>
        </Route>
      </Switch>
    </Router>
  );
}
