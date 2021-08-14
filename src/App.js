import React, { Suspense, useContext } from "LibApp/react";
import { Route, Switch, withRouter } from 'LibApp/react-router-dom';
import { ContextProvider } from "@mfe/sharedapp";

const UIComponent_Button = React.lazy(
  () => import('UIComponent/Button')
);

const DomainComponent_Button = React.lazy(
  () => import('DomainComponent/ButtonWrapper')
);

const DomainComponent_AppName = React.lazy(
  () => import('DomainComponent/AppName')
);

import allRoutes from "LibApp/routes";

function App({ history }) {
  const contextName = useContext(ContextProvider);
  return (
    <Suspense fallback='Loading....'>
      <h1>Wrapper Component, {contextName}</h1>
      <div>
        <h2>Button from UIComponent, click to Change Route Page1</h2>
        <UIComponent_Button name="To Page1" onClick={() => history.push('/page1')}/>
      </div>
      <div>
        <h2>Button from DomainComponent, click to Change Route Page2</h2>
          <DomainComponent_Button name="To Page2" onClick={() => history.push('/page2')} />
      </div>
      <div>
        <h2>Page Routing</h2>
        <Switch>
          <Route path="/" exact component={DomainComponent_AppName} />
          {allRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </div>
    </Suspense>
  );
}

export default withRouter(App);
