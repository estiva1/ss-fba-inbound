import { Fragment } from "react";
import { GlobalStyle } from "./global.styles";
import FBAInbound from "./pages/fba-inbound.component";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <FBAInbound />
    </Fragment>
  );
}

export default App;
