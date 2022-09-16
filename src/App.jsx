import { Routes, Route } from "react-router-dom";
import { Home, Navigation, Authentication } from "././routes/routes.index/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigation /> }>
        <Route index element={ <Home /> }  />
        <Route path="/auth" element={ <Authentication /> } />
      </Route>
    </Routes>
  );
};

export default App;
