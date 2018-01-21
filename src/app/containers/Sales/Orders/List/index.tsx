import { Button } from "antd"
import { inject, observer } from "mobx-react"
import * as React from "react"
import { RouteComponentProps } from "react-router"
import { httpAll, httpGet } from "../../../../utils/http"
import * as style from "./style.css"

export interface TestProps extends RouteComponentProps<any> {}

export interface TestState {}

// @inject(STORE_TODO, STORE_ROUTER)
@observer
export default class Test extends React.Component<TestProps, TestState> {
  constructor(props: TestProps, context: any) {
    super(props, context)
    this.state = {}
  }
  public componentDidMount() {
    httpAll(
      (a, b) => {
        console.log(a, b)
      },
      httpGet("http://jsonplaceholder.typicode.com/posts/1"),
      httpGet("http://jsonplaceholder.typicode.com/posts/2")
    )
  }
  public render() {
    return <Button type="primary">test</Button>
  }
}
