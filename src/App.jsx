import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/components.index/index"
import { Home, Authentication, Shop } from "././routes/routes.index/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigation /> }>
        <Route index element={ <Home /> }  />
        <Route path="/shop" element={ <Shop /> } />
        <Route path="/auth" element={ <Authentication /> } />
      </Route>
    </Routes>
  );
};

export default App;
