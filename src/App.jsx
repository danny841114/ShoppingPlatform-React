import { Fragment } from "react/jsx-runtime";
import NavBar from "./components/NavBar";
import Index from "./pages/Index";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Index />
    </Fragment>
  );
}

export default App;
