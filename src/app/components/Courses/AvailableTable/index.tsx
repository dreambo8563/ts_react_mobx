import { Button, Divider, Table } from "antd"
import { Pagination } from "antd"
import { observer } from "mobx-react"
import * as React from "react"

// 如果需要用到css
// import * as style from "./style.css"

// 已预约可能table

export interface AvailableTableProps {
  dataSource: any[]
  onSortChange: (sorter: object) => void
}

export interface AvailableTableState {
  dataSource: any[]
  total: number
  current: number
}

const columns = [
  {
    title: "Time for class",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "TEACHER",
    sorter: true,
    dataIndex: "age",
    key: "age"
  },
  {
    title: "INFO",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "MANGE",
    dataIndex: "address",
    key: "address5",
    render: (text, record) => (
      <span>
        <Button size="small">To add a class</Button>
      </span>
    )
  }
]
// 如果要注入store
// @inject(STORE_TODO, STORE_ROUTER)
@observer
export default class AvailableTable extends React.Component<
  AvailableTableProps,
  AvailableTableState
> {
  constructor(props: AvailableTableProps, context: any) {
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
   * @memberof AvailableTable
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
   * @memberof AvailableTable
   */
  public handleTableChange = (pagination, filters, sorter) => {
    // console.log(sorter)
    const { onSortChange } = this.props
    onSortChange(sorter)
  }
  /**
   * 翻页触发
   *
   * @memberof AvailableTable
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
