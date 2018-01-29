import { Button, Tabs } from "antd"
import { Select } from "antd"
import { inject, observer } from "mobx-react"
import * as React from "react"
const Option = Select.Option
import PreservedTable from "../../../../components/Courses/PreservedTable"
import { STORE_APP } from "../../../../constants/stores"
import { AppStore } from "../../../../stores"

const TabPane = Tabs.TabPane
// 如果需要用到css
// import * as style from "./style.css"

export interface SubscribeListProps {}

export interface SubscribeListState {
  currentTab: "1" | "2"
}

// 如果要注入store
@inject(STORE_APP)
@observer
export default class SubscribeList extends React.Component<
  SubscribeListProps,
  SubscribeListState
> {
  constructor(props: SubscribeListProps, context: any) {
    super(props, context)
    this.state = {
      currentTab: "1"
    }
  }
  public componentWillMount() {
    // 此处可以加载请求
    const app = this.props[STORE_APP] as AppStore
    app.setTitle("Class Management")
  }
  public sortChange = sorter => {
    console.log(sorter)
  }
  public handleChange = value => {
    console.log(`selected ${value}`)
  }
  public tabChange = key => {
    this.setState({
      currentTab: key
    })
  }
  public componentDidMount() {
    // 此处可以处理带ref的
  }
  public render() {
    const { currentTab } = this.state
    const operations = (
      <div>
        <Select
          defaultValue="0"
          style={{ width: 150 }}
          onChange={this.handleChange}
        >
          <Option value="0">All</Option>
          <Option value="1">正式课</Option>
          <Option value="2">demo</Option>
          <Option value="3">学生请假/提前请假</Option>
          <Option value="4">老师请假</Option>
        </Select>
      </div>
    )
    return (
      <div>
        <Tabs activeKey={currentTab} onChange={this.tabChange}>
          <TabPane tab="Preserved" key="1">
            {currentTab === "1" ? (
              <Tabs tabBarExtraContent={operations}>
                <TabPane tab="All" key="0">
                  <PreservedTable
                    onSortChange={this.sortChange}
                    dataSource={[
                      {
                        key: "1",
                        name: "Mike",
                        age: 32,
                        address: "10 Downing Street"
                      },
                      {
                        key: "2",
                        name: "John",
                        age: 42,
                        address: "10 Downing Street"
                      }
                    ]}
                  />
                </TabPane>
                <TabPane tab="Mon" key="1">
                  Content of tab 1
                </TabPane>
                <TabPane tab="Tue" key="2">
                  Content of tab 2
                </TabPane>
                <TabPane tab="Wed" key="3">
                  Content of tab 2
                </TabPane>
                <TabPane tab="Thur" key="4">
                  Content of tab 2
                </TabPane>
                <TabPane tab="Fri" key="5">
                  Content of tab 2
                </TabPane>
                <TabPane tab="Sat" key="6">
                  Content of tab 2
                </TabPane>
                <TabPane tab="Sun" key="7">
                  Content of tab 2
                </TabPane>
              </Tabs>
            ) : (
              undefined
            )}
          </TabPane>
          <TabPane tab="Available" key="2">
            Content of tab 2
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
