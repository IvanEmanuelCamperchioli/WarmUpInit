import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from "./pages/Details";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Edit from "./pages/Edit";
import Header from "./components/Header";
import Remove from "./components/Remove";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/edit" component={Edit} />
          <Route path="/remove/:id" component={Remove} />
          <Redirect to="/" />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
