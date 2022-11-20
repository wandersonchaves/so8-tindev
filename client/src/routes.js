import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { Main } from "./pages/Main";

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/dev/:id" component={Main} />
    </BrowserRouter>
  );
}
