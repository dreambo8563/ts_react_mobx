import { inject, observer } from "mobx-react"
import * as React from "react"

import { STORE_ROUTER } from "../../../constants/stores"
import RouterStore from "../../../stores/RouterStore"

export interface LinkState {
  to: string
}

export interface LinkState {}
@inject(STORE_ROUTER)
@observer
export class Link extends React.Component<LinkState, LinkState> {
  constructor(props?: LinkState, context?: any) {
    super(props, context)
  }
  public render() {
    const { to, children, ...props } = this.props

    return (
      <div {...props} onClick={this.goto}>
        {children}
      </div>
    )
  }

  private goto = (e: React.SyntheticEvent<any>) => {
    const router = this.props[STORE_ROUTER] as RouterStore
    const { to } = this.props
    router.push(to)
  }
}

export default Link
