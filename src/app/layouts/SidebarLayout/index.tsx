import { Row, Spin } from "antd"
import { Icon, Layout, Menu } from "antd"
import { inject, observer } from "mobx-react"
import * as React from "react"

import Link from "../../components/Common/Link"
import { STORE_APP, STORE_ROUTER } from "../../constants/stores"
import RouterStore from "../../stores/RouterStore"
import s from "./style.css"

const { Header, Sider, Content } = Layout
const SubMenu = Menu.SubMenu
export interface SidebarLayoutProps {}

export interface SidebarLayoutState {
  collapsed: boolean
  // path: string
  openKeys: string[]
  selectedKeys: string[]
}
@inject(STORE_APP, STORE_ROUTER)
@observer
export class SidebarLayout extends React.Component<
  SidebarLayoutProps,
  SidebarLayoutState
> {
  public rootSubmenuKeys = ["sales", "courses", "examples"]
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      openKeys: ["examples"],
      selectedKeys: []
    }
  }
  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  public componentWillReceiveProps(nextProps: any) {
    // console.log(nextProps)
  }
  public componentDidMount() {
    const router = this.props[STORE_ROUTER] as RouterStore
    const arr = router.location.pathname.split("/")

    this.setState({
      openKeys: [arr[1] || ""],
      selectedKeys: [arr[2] || ""]
    })
  }
  public onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }

  // hide nav bar when embed in iFrame
  public render() {
    const { children } = this.props
    const { loading, title } = this.props[STORE_APP]
    const { openKeys, selectedKeys } = this.state
    return (
      <div className={s.pageFrame}>
        <Layout className={s.pageFrame}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu
              selectedKeys={selectedKeys}
              onOpenChange={this.onOpenChange}
              openKeys={openKeys}
              theme="dark"
              mode="inline"
            >
              <SubMenu
                key={`sales`}
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Sales System</span>
                  </span>
                }
              >
                <Menu.Item key="orders">
                  <Link to="/sales/orders/list">orders list</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key={`examples`}
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Examples</span>
                  </span>
                }
              >
                <Menu.Item key="profiles">
                  <Link to="/examples/profiles/blog">Profiles</Link>
                </Menu.Item>
                <Menu.Item key="contacts">
                  <Link to="/examples/contacts/list">Contacts</Link>
                </Menu.Item>
                <Menu.Item key="dashboard">
                  <Link to="/examples/dashboard/charts">Dashboard</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="courses"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>Navigation Two</span>
                  </span>
                }
              >
                <Menu.Item key="subscribe">
                  <Link to="/courses/subscribe/list">Class Management</Link>
                </Menu.Item>
                <Menu.Item key="monitor">
                  <Link to="/courses/monitor/network">network monitor</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Row gutter={24} align="middle" type="flex">
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.toggle}
                />
                <h2>{title}</h2>
              </Row>
            </Header>
            <Content
              style={{
                background: "#fff",
                margin: "24px 16px",
                padding: 24
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>

        {loading ? <Spin className={s.loading} size="large" /> : undefined}
      </div>
    )
  }
}
