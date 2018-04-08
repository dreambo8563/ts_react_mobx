import { Button, Dropdown, Icon, Menu, Popover, Row, Table, Tag } from "antd"
import cx from "classnames"
import { observer } from "mobx-react"
import React from "react"
import av from "../../../../../assets/img/example/av.jpeg"

import style from "./style.css"

// 如果需要用到css
export interface ContactsListProps {}

export interface ContactsListState {}

// 如果要注入store
// @inject(STORE_TODO, STORE_ROUTER)
@observer
export default class ContactsList extends React.Component<
  ContactsListProps,
  ContactsListState
> {
  public rowOperation = (
    <div>
      <p>
        <i className="fa fa-edit" /> Edit Contact
      </p>
      <p>
        <i className="fa fa-trash" /> Remove Contact
      </p>
      <p>
        <i className="fa fa-copy" /> Duplicate Contact
      </p>
    </div>
  )
  public data = [
    {
      key: "1",
      name: "Brown",
      last: "John",
      email: "bj@aa.xom",
      leader: 90,
      phone: "177291288321",
      tags: ["New York", "No. 1", "Lake Park"],
      date: "22 Oct 2016"
    },
    {
      key: "2",
      name: "Green",
      last: "Jim",
      email: "gj@aa.xom",
      leader: 120,
      phone: "2323-299383",
      tags: ["New York", "No. 1", "Lake Park"],
      date: "22 Oct 2016"
    },
    {
      key: "3",
      name: "Black",
      last: "Joe",
      email: "bjj@aa.xom",
      leader: 880,
      phone: "67543876",
      tags: ["New York", "No. 1", "Lake Park"],
      date: "22 Oct 2016"
    }
  ]
  public columns = [
    {
      title: "FIRST NAME",
      dataIndex: "name",
      key: "name",
      className: style.columnHead,
      render: (text, record) => (
        <span>
          <img className={style.avatar} src={av} alt="avatar" /> {text}
        </span>
      )
    },
    {
      title: "LAST NAME",
      dataIndex: "last",
      className: style.columnHead,
      key: "last"
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      className: style.columnHead,
      key: "email"
    },
    {
      title: "LEADER SCOPE",
      dataIndex: "leader",
      className: style.columnHead,
      key: "leader"
    },
    {
      title: "PHONE",
      dataIndex: "phone",
      className: style.columnHead,
      key: "phone"
    },
    {
      title: "TAGS",
      dataIndex: "tags",
      className: style.columnHead,
      key: "tags",
      render: (text, record) =>
        (record.tags || []).map((t, i) => <Tag key={i}>{t}</Tag>)
    },
    {
      title: "CREATED DATE",
      dataIndex: "date",
      className: style.columnHead,
      key: "date"
    },
    {
      title: "",
      key: "action",
      className: style.columnHead,
      render: (text, record) => (
        <Popover placement="bottom" content={this.rowOperation} trigger="click">
          <Icon className={style.rowOperation} type="ellipsis" />
        </Popover>
      )
    }
  ]
  public menu = (
    <Menu>
      <Menu.Item key="0">
        <span className={cx(style.selectedColor, style.menuItemPad)}>
          Contacts
        </span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <span className={style.menuItemPad}>+ Add or Edit Filters</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item disabled key="3">
        <span className={style.menuItemPad}>Custom Filters</span>
      </Menu.Item>
      <Menu.Item key="4">
        <span className={style.menuItemPad}>My Contacts</span>
      </Menu.Item>
      <Menu.Item key="5">
        <span className={style.menuItemPad}>Price</span>
      </Menu.Item>
      <Menu.Item key="6">
        <span className={style.menuItemPad}>Facebook</span>
      </Menu.Item>
    </Menu>
  )
  public headerSettings = (
    <div>
      <p>Settings</p>
    </div>
  )
  public addContactOps = (
    <div>
      <p>
        <i className="fa fa-address-book" /> Import Contacts
      </p>
      <p>
        <i className="fa fa-plus" /> Add Dashlet
      </p>
    </div>
  )
  public content = (
    <div>
      <p>
        <i className="fa fa-list-ul" /> List View
      </p>
      <p>
        <i className="fa fa-th-large" /> Grid View
      </p>
      <p>
        <i className="fa fa-align-justify" /> Small List View
      </p>
    </div>
  )
  constructor(props: ContactsListProps, context: any) {
    super(props, context)
    this.state = {}
  }

  public componentWillMount() {
    // 此处可以加载请求
  }
  public componentDidMount() {
    // 此处可以处理带ref的
  }
  public render() {
    return (
      <div className={style.wholeFrame}>
        <Row type="flex" justify="space-between" align="middle">
          <div>
            <Dropdown overlay={this.menu} trigger={["click"]}>
              <span className={cx(style.title, style.rightM8)}>
                <span className={style.rightM8}>Contacts</span>
                <Icon type="down" />
              </span>
            </Dropdown>
            <span className={cx(style.smallLable, style.rightM8)}>
              14,234 Total
            </span>
            <span className={cx(style.smallLable, style.leftM8, style.rightM8)}>
              Sort by:
            </span>
            <Dropdown overlay={this.menu} trigger={["click"]}>
              <span className={cx(style.smallBlack, style.rightM8)}>
                Date Created<Icon type="down" />
              </span>
            </Dropdown>
          </div>
          <div className={style.headerHeight}>
            <Row type="flex" justify="end" align="middle">
              <Popover
                placement="bottomLeft"
                content={this.content}
                trigger="click"
              >
                <Button
                  className={cx(
                    style.headerHeight,
                    style.smallLable,
                    style.noBorder,
                    style.leftM8
                  )}
                >
                  <Icon className={style.fz20} type="bars" />
                </Button>
              </Popover>
              <Button
                className={cx(
                  style.headerHeight,
                  style.smallLable,
                  style.noBorder,
                  style.leftM8
                )}
              >
                Filter <i className={cx(style.fz20, "fa fa-filter")} />
              </Button>
              <Popover
                placement="bottomLeft"
                content={this.addContactOps}
                trigger="click"
              >
                <Button className={cx(style.btnBG, style.leftM8)}>
                  <i className={cx(style.fz20, "fa fa-user-plus")} /> Add
                  Contact
                </Button>
              </Popover>
              <Popover
                placement="bottomLeft"
                content={this.headerSettings}
                trigger="click"
              >
                <Button
                  className={cx(
                    style.headerHeight,
                    style.smallLable,
                    style.noBorder,
                    style.leftM8,
                    style.lightBlueBG
                  )}
                >
                  <Icon className={style.fz20} type="ellipsis" />
                </Button>
              </Popover>
            </Row>
          </div>
        </Row>
        <br />
        <br />
        <Table
          rowSelection={{}}
          rowClassName={style.rowClass}
          columns={this.columns}
          dataSource={this.data}
        />
      </div>
    )
  }
}
