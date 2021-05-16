import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Blog from './Blog'
function App() {
  return (
    <>
      <h1 className="text-center text-info mt-3">React Dynamic Router</h1>
      <Router>
        <Link to="/blog1">Blog1</Link>
        <Routes>
          <Route path="/blog1" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
