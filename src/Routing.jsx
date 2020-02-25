import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home/Home";
import { Notfound } from "./Notfound/Notfound";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { ProjectDetail } from "./ProjectDetail/ProjectDetail";

export function Routing() {
  return (
    <Switch>
      <Route path="/work/:id" component={ProjectDetail}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
      <Route path="*" component={Notfound} />
    </Switch>
  );
}
