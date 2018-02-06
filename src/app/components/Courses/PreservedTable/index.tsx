import { Button, Divider, Table } from "antd"
import { Pagination } from "antd"
import { observer } from "mobx-react"
import moment from "moment"
import * as React from "react"

import { WeekEnum } from "../../../constants/text"

// 如果需要用到css
// import * as style from "./style.css"

// 已预约课程table

export interface PreservedTableProps {
  dataSource: any[]
  onSortChange: (sorter: object) => void
  onSizeChange: (page, sizer) => void
  onPage: (p: number) => void
  total: number
  defaultPageSize: number
}

export interface PreservedTableState {
  dataSource: any[]
  total: number
  current: number
  defaultPageSize: number
}

const columns = [
  {
    title: "WEEK",
    key: "week",
    render: (text, record) => WeekEnum[record.week]
  },
  {
    title: "Time for class",
    sorter: true,
    key: "start",
    render: (text, record) => `${record.start} - ${record.end}`
  },
  {
    title: "STUDENT",
    key: "stuName",
    render: (text, record) => (
      <div>
        isNew:{record.isNew} {record.teacheName}/{record.uid}
      </div>
    )
  },
  {
    title: "TEACHER",
    key: "teacher",
    render: (text, record) => (
      <div>
        {record.stuName}/{record.tid}
      </div>
    )
  },
  {
    title: "COURSE INFO",
    key: "course",
    render: (text, record) => (
      <div>
        {record.isDemo ? "demo" : "正式课"}- {record.adminUser} - 已约:{
          record.classCount
        }
      </div>
    )
  },
  {
    title: "BOOKING TIME",
    sorter: true,
    key: "time",
    render: (text, record) => (
      <div>
        {record.bookTime
          ? moment.unix(record.bookTime).format("MM-DD HH:mm")
          : ""}
      </div>
    )
  },
  {
    title: "MANGE",
    dataIndex: "address",
    key: "address5",
    render: (text, record) => (
      <span>
        <Button size="small">放弃</Button>
        <Divider type="vertical" />

        <Button size="small">老师取消</Button>
        <Divider type="vertical" />

        <Button size="small">更改</Button>
        <Divider type="vertical" />

        <Button size="small">Del</Button>
      </span>
    )
  }
]
// 如果要注入store
// @inject(STORE_TODO, STORE_ROUTER)
@observer
export default class PreservedTable extends React.Component<
  PreservedTableProps,
  PreservedTableState
> {
  constructor(props: PreservedTableProps, context: any) {
    super(props, context)
    this.state = {
      total: props.total,
      current: 1,
      dataSource: props.dataSource,
      defaultPageSize: props.defaultPageSize
    }
  }
  public componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: nextProps.dataSource,
      total: nextProps.total
    })
  }
  /**
   * 每页数量变化触发
   *
   * @memberof PreservedTable
   */
  public onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize)
    this.setState({
      current
    })
    const { onSizeChange } = this.props
    onSizeChange(current, pageSize)
  }
  /**
   * sort 触发
   *
   * @memberof PreservedTable
   */
  public handleTableChange = (pagination, filters, sorter) => {
    // console.log(sorter)
    const { onSortChange } = this.props
    onSortChange(sorter)
  }
  /**
   * 翻页触发
   *
   * @memberof PreservedTable
   */
  public onChange = page => {
    const { onPage } = this.props
    this.setState({
      current: page
    })
    onPage(page)
  }
  public componentWillMount() {
    // 此处可以加载请求
  }
  public componentDidMount() {
    // 此处可以处理带ref的
  }
  public render() {
    const { dataSource, current, total, defaultPageSize } = this.state
    return (
      <div>
        <Table
          rowKey="id"
          onChange={this.handleTableChange}
          pagination={false}
          dataSource={dataSource}
          columns={columns}
        />
        <br />
        <Pagination
          defaultPageSize={defaultPageSize}
          showSizeChanger
          onChange={this.onChange}
          onShowSizeChange={this.onShowSizeChange}
          current={current}
          total={total}
        />
      </div>
    )
  }
}
