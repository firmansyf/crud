import "./App.css";

import { Suspense } from "react";
import Router from "./router/routes";

function App() {
  return (
    <Suspense fallback={"Please wait..."}>
      <Router />
    </Suspense>
  );
}

export default App;
