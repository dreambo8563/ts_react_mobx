import { inject, observer } from "mobx-react"
import * as React from "react"
import { RouteComponentProps } from "react-router"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { TodoList } from "../../components/TodoList"
import { STORE_ROUTER, STORE_TODO } from "../../constants/stores"
import { TODO_FILTER_LOCATION_HASH, TodoFilter } from "../../constants/todos"
import { TodoModel } from "../../models/TodoModel"
import { RouterStore, TodoStore } from "../../stores"
import * as style from "./style.css"

export interface TodoAppProps extends RouteComponentProps<any> {}

export interface TodoAppState {
  filter: TodoFilter
}

@inject(STORE_TODO, STORE_ROUTER)
@observer
export default class TodoApp extends React.Component<
  TodoAppProps,
  TodoAppState
> {
  constructor(props: TodoAppProps, context: any) {
    super(props, context)
    this.state = { filter: TodoFilter.ALL }
  }

  public componentWillMount() {
    this.checkLocationChange()
  }

  public componentWillReceiveProps(nextProps: TodoAppProps, nextContext: any) {
    this.checkLocationChange()
  }

  public checkLocationChange() {
    const router = this.props[STORE_ROUTER] as RouterStore
    const filter = Object.keys(TODO_FILTER_LOCATION_HASH)
      .map(key => Number(key) as TodoFilter)
      .find(v => TODO_FILTER_LOCATION_HASH[v] === router.location.hash)
    this.setState({ filter })
  }

  public toTest = () => {
    const router = this.props[STORE_ROUTER] as RouterStore
    router.push("/xxx")
  }
  public handleFilter = (filter: TodoFilter) => {
    const router = this.props[STORE_ROUTER] as RouterStore
    const currentHash = router.location.hash
    const nextHash = TODO_FILTER_LOCATION_HASH[filter]
    if (currentHash !== nextHash) {
      router.replace(nextHash)
    }
  }
  public getFilteredTodo(filter: TodoFilter) {
    const todoStore = this.props[STORE_TODO] as TodoStore
    switch (filter) {
      case TodoFilter.ACTIVE:
        return todoStore.activeTodos
      case TodoFilter.COMPLETED:
        return todoStore.completedTodos
      default:
        return todoStore.todos
    }
  }
  public render() {
    const todoStore = this.props[STORE_TODO] as TodoStore
    const { children } = this.props
    const { filter } = this.state
    const filteredTodos = this.getFilteredTodo(filter)

    const footer = todoStore.todos.length ? (
      <Footer
        filter={filter}
        activeCount={todoStore.activeTodos.length}
        completedCount={todoStore.completedTodos.length}
        onClearCompleted={todoStore.clearCompleted}
        onChangeFilter={this.handleFilter}
      />
    ) : (
      undefined
    )

    return (
      <div className={style.normal}>
        <Header addTodo={todoStore.addTodo} />
        <TodoList
          todos={filteredTodos}
          completeAll={todoStore.completeAll}
          deleteTodo={todoStore.deleteTodo}
          editTodo={todoStore.editTodo}
        />
        {footer}
        {children}
        <div onClick={this.toTest}>go to test</div>
      </div>
    )
  }
}
