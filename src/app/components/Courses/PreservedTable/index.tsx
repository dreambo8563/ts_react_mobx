import { Table } from "antd"
import { Pagination } from "antd"
import { observer } from "mobx-react"
import * as React from "react"

// 如果需要用到css
// import * as style from "./style.css"

// 已预约可能table

export interface PreservedTableProps {
  dataSource: any[]
  onSortChange: (sorter: object) => void
}

export interface PreservedTableState {
  dataSource: any[]
  total: number
  current: number
}

const columns = [
  {
    title: "WEEK",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Time for class",
    sorter: true,
    dataIndex: "age",
    key: "age"
  },
  {
    title: "STUDENT",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "TEACHER",
    dataIndex: "address",
    key: "address2"
  },
  {
    title: "COURSE INFO",
    dataIndex: "address",
    key: "address3"
  },
  {
    title: "BOOKING TIME",
    sorter: true,
    dataIndex: "address",
    key: "address4"
  },
  {
    title: "MANGE",
    dataIndex: "address",
    key: "address5"
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
      total: 100,
      current: 1,
      dataSource: props.dataSource
    }
  }
  public componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: nextProps.dataSource
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
    console.log(page)
    this.setState({
      current: page
    })
  }
  public componentWillMount() {
    // 此处可以加载请求
  }
  public componentDidMount() {
    // 此处可以处理带ref的
  }
  public render() {
    const { dataSource, current, total } = this.state
    return (
      <div>
        <Table
          onChange={this.handleTableChange}
          pagination={false}
          dataSource={dataSource}
          columns={columns}
        />
        <br />
        <Pagination
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
