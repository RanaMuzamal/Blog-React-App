import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blog from "./Blog";
import Details from "./details";
function App() {
  return (
    <>
      <h1 className="text-center text-info mt-3">React Dynamic Router</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <Link to="/blog">Blog</Link>
          </Route>
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:name" component={Details} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
