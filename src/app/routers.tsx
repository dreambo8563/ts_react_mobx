import { createBrowserHistory } from "history"
import { Provider } from "mobx-react"
import * as React from "react"
import { Redirect, Route, Router, Switch } from "react-router"

import { STORE_APP, STORE_ROUTER, STORE_TODO } from "./constants/stores"
import { Root } from "./layouts/Root"
import { TodoModel } from "./models/TodoModel"
import { AppStore, RouterStore, TodoStore } from "./stores"
import { loadComponent } from "./utils/loadComponent"
import { loadComponentWithSidebar } from "./utils/loadComponentWithSidebar"

// default fixtures for TodoStore
const defaultTodos = [
  new TodoModel("Use Mobx"),
  new TodoModel("Use React", true)
]

// prepare MobX stores
const history = createBrowserHistory()
const todoStore = new TodoStore(defaultTodos)
const routerStore = new RouterStore(history)
export const appStore = new AppStore()
const rootStores = {
  [STORE_TODO]: todoStore,
  [STORE_ROUTER]: routerStore,
  [STORE_APP]: appStore
}
export default class App extends React.Component {
  public render() {
    return (
      <Provider {...rootStores}>
        <Root>
          <Router history={history}>
            <Switch>
              <Redirect exact from="/" to="/new-path" />
              <Route
                path="/new-path"
                exact
                component={loadComponentWithSidebar(() =>
                  import("./containers/TodoApp").then(
                    (module: any) => module.default
                  )
                )}
              />
              <Route
                path="/sales/orders/list"
                component={loadComponentWithSidebar(() =>
                  import("./containers/Sales/Orders/List").then(
                    (module: any) => module.default
                  )
                )}
              />
              <Route
                path="/courses/subscribe/list"
                component={loadComponentWithSidebar(() =>
                  import("./containers/Courses/Subscribe/List").then(
                    (module: any) => module.default
                  )
                )}
              />
              <Route
                component={loadComponent(() =>
                  import("./components/Common/NotFound").then(
                    (module: any) => module.default
                  )
                )}
              />
            </Switch>
          </Router>
        </Root>
      </Provider>
    )
  }
}
