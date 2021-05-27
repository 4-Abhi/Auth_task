import "./App.css";
import Home from "./pages/home";
import Header from "./component/header";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
