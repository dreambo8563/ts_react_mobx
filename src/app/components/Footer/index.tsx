import * as classNames from "classnames"
import * as React from "react"
import {
  TODO_FILTER_TITLES,
  TODO_FILTER_TYPES,
  TodoFilter,
} from "../../constants/todos"
import * as style from "./style.css"

export interface FooterProps {
  filter: TodoFilter
  activeCount: number
  completedCount: number
  onChangeFilter: (filter: TodoFilter) => any
  onClearCompleted: () => any
}

export interface FooterState {
  /* empty */
}

export class Footer extends React.Component<FooterProps, FooterState> {
  public renderTodoCount() {
    const { activeCount } = this.props
    const itemWord = activeCount === 1 ? "item" : "items"

    return (
      <span className={style.count}>
        <strong>{activeCount || "No"}</strong> {itemWord} left
      </span>
    )
  }

  public renderFilterLink(filter: TodoFilter) {
    const title = TODO_FILTER_TITLES[filter]

    // destructuring and renaming
    const { filter: selectedFilter, onChangeFilter } = this.props
    const className = classNames({
      [style.selected]: filter === selectedFilter,
    })

    return (
      <a
        className={className}
        style={{ cursor: "pointer" }}
        onClick={() => onChangeFilter(filter)}
      >
        {title}
      </a>
    )
  }

  public renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <button className={style.clearCompleted} onClick={onClearCompleted}>
          Clear completed
        </button>
      )
    }
  }

  public render() {
    return (
      <footer className={style.normal}>
        {this.renderTodoCount()}
        <ul className={style.filters}>
          {TODO_FILTER_TYPES.map((filter) => (
            <li key={filter} children={this.renderFilterLink(filter)} />
          ))}
        </ul>
        {this.renderClearButton()}
      </footer>
    )
  }
}

export default Footer
