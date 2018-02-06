import { Tabs } from "antd"
import { Select } from "antd"
import { inject, observer } from "mobx-react"
import * as moment from "moment"
import * as React from "react"

import AvailableLegends from "../../../../components/Courses/AvailableLegends"
import PreservedLegends from "../../../../components/Courses/PreservedLegends"
import PreservedTable from "../../../../components/Courses/PreservedTable"
import { STORE_APP } from "../../../../constants/stores"
import { courseSubscribeListAPI } from "../../../../constants/url"
import { AppStore } from "../../../../stores"
import { httpGet } from "../../../../utils/http"

const Option = Select.Option
const TabPane = Tabs.TabPane
// 如果需要用到css
// import * as style from "./style.css"

export interface SubscribeListProps {}

export interface SubscribeListState {
  currentTab: "1" | "2"
  currentWeek: string
  classType: string
  data: any[]
  total: number
  currentPage: number
  pageSize: number
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
      currentTab: "1",
      currentWeek: String(moment().day() || 7),
      classType: "0",
      currentPage: 1,
      data: [],
      total: 0,
      pageSize: 20
    }
  }
  public componentWillMount() {
    // 此处可以加载请求
    const app = this.props[STORE_APP] as AppStore
    app.setTitle("Class Management")
    const { pageSize } = this.state
    this.getList({
      page: 1,
      currentWeek: String(moment().day() || 7),
      pageSize
    })
  }
  public getList(query: object) {
    httpGet(courseSubscribeListAPI(query)).then(res => {
      if (res) {
        this.setState({ data: res.data.data.list, total: res.data.data.counts })
      }
    })
  }
  public sortChange = sorter => {
    console.log(sorter)
  }
  public pageChange = p => {
    this.setState({
      currentPage: p,
      data: [],
      total: 0
    })
    const { currentWeek, pageSize } = this.state
    this.getList({ page: p, currentWeek, pageSize })
  }
  public handleChange = value => {
    console.log(`selected ${value}`)
    this.setState({
      classType: value
    })
  }
  public tabChange = key => {
    this.setState({
      currentTab: key,
      currentWeek: String(moment().day() || 7),
      data: [],
      total: 0
    })
    if (Number(key) === 1) {
      const { pageSize } = this.state
      this.getList({
        page: 1,
        currentWeek: String(moment().day() || 7),
        pageSize
      })
    }
  }
  public onSizeChange = (page, sizer) => {
    console.log(page, sizer)
    this.setState({
      pageSize: sizer,
      currentPage: page
    })
    const { currentWeek } = this.state
    this.getList({ page, currentWeek, pageSize: sizer })
  }
  public weekChange = key => {
    this.setState({
      currentWeek: key,
      data: [],
      total: 0
    })
    const { currentPage, pageSize } = this.state
    this.getList({ page: currentPage, currentWeek: key, pageSize })
  }
  public componentDidMount() {
    // 此处可以处理带ref的
  }
  public render() {
    const { currentTab, pageSize, currentWeek, data, total } = this.state
    const operations =
      currentTab === "1" ? (
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
      ) : (
        <div>
          {" "}
          <Select
            defaultValue="0"
            style={{ width: 150 }}
            onChange={this.handleChange}
          >
            <Option value="0">All</Option>
            <Option value="1">正式课</Option>
            <Option value="2">demo</Option>
            <Option value="3">demo值班</Option>
          </Select>
        </div>
      )
    const legends = currentTab === "1" ? <div /> : <div />
    return (
      <Tabs activeKey={currentTab} onChange={this.tabChange}>
        <TabPane tab="已约课程" key="1">
          {currentTab === "1" ? (
            <div>
              <br />
              <PreservedLegends />
              <br />
              <Tabs
                type="card"
                onChange={this.weekChange}
                activeKey={currentWeek}
                tabBarExtraContent={operations}
              >
                <TabPane tab="All" key="0">
                  <PreservedTable
                    onSizeChange={this.onSizeChange}
                    defaultPageSize={pageSize}
                    total={total}
                    onPage={this.pageChange}
                    onSortChange={this.sortChange}
                    dataSource={data}
                  />
                </TabPane>
                <TabPane tab="Mon" key="1">
                  <PreservedTable
                    onSizeChange={this.onSizeChange}
                    defaultPageSize={pageSize}
                    total={total}
                    onPage={this.pageChange}
                    onSortChange={this.sortChange}
                    dataSource={data}
                  />
                </TabPane>
                <TabPane tab="Tue" key="2">
                  <PreservedTable
                    total={total}
                    onSizeChange={this.onSizeChange}
                    defaultPageSize={pageSize}
                    onPage={this.pageChange}
                    onSortChange={this.sortChange}
                    dataSource={data}
                  />
                </TabPane>
                <TabPane tab="Wed" key="3">
                  <PreservedTable
                    total={total}
                    onSizeChange={this.onSizeChange}
                    defaultPageSize={pageSize}
                    onPage={this.pageChange}
                    onSortChange={this.sortChange}
                    dataSource={data}
                  />
                </TabPane>
                <TabPane tab="Thur" key="4">
                  <PreservedTable
                    total={total}
                    onSizeChange={this.onSizeChange}
                    defaultPageSize={pageSize}
                    onPage={this.pageChange}
                    onSortChange={this.sortChange}
                    dataSource={data}
                  />
                </TabPane>
                <TabPane tab="Fri" key="5">
                  <PreservedTable
                    total={total}
                    onSizeChange={this.onSizeChange}
                    defaultPageSize={pageSize}
                    onPage={this.pageChange}
                    onSortChange={this.sortChange}
                    dataSource={data}
                  />
                </TabPane>
                <TabPane tab="Sat" key="6">
                  <PreservedTable
                    total={total}
                    defaultPageSize={pageSize}
                    onSizeChange={this.onSizeChange}
                    onPage={this.pageChange}
                    onSortChange={this.sortChange}
                    dataSource={data}
                  />
                </TabPane>
                <TabPane tab="Sun" key="7">
                  <PreservedTable
                    total={total}
                    defaultPageSize={pageSize}
                    onSizeChange={this.onSizeChange}
                    onPage={this.pageChange}
                    onSortChange={this.sortChange}
                    dataSource={data}
                  />
                </TabPane>
              </Tabs>
            </div>
          ) : (
            undefined
          )}
        </TabPane>
        <TabPane tab="可约时间" key="2">
          {currentTab === "2" ? (
            <div>
              <br />
              <AvailableLegends />
              <br />
              <Tabs
                onChange={this.weekChange}
                activeKey={currentWeek}
                tabBarExtraContent={operations}
              >
                <TabPane tab="All" key="0">
                  xxx
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
            </div>
          ) : (
            undefined
          )}
        </TabPane>
      </Tabs>
    )
  }
}
