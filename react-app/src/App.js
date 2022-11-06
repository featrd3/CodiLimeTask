import { HashRouter , Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Overview } from './pages/Overview'

import "./styles/common.css"
import "./styles/colors.css"

function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route exact path="About" element={<About />} />
        </Route>
        <Route path="/index.html" element={<Layout />}>
          <Route element={<Overview />} />
        </Route>
      </Routes>
    </HashRouter >
  );
}

export default App;
