import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from "./pages/Details";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Edit from "./pages/Edit";

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/edit/:id" component={Edit} />
          <Redirect to="/" />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
