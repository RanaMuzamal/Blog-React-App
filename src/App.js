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
            <h3>your version of react router seems outdated</h3>
            <p>run <b>"npm remove react-router-dom"</b></p>
            <p>then run <b>"npm install react-router-dom"</b> to install it again</p>
            <p>goodluck my brother</p>
            <p>remove this message after reading it</p>
          </Route>
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:name" component={Details} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
