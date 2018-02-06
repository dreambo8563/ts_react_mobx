import { Button } from "antd"
import { observer } from "mobx-react"
import * as React from "react"

// 如果需要用到css
// import * as style from "./style.css"

export interface PreservedLegendsProps {}

export interface PreservedLegendsState {}

// 如果要注入store
// @inject(STORE_TODO, STORE_ROUTER)
@observer
export default class PreservedLegends extends React.Component<
  PreservedLegendsProps,
  PreservedLegendsState
> {
  constructor(props: PreservedLegendsProps, context: any) {
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
      <div>
        <span className="label label-danger">
          <i className="fa fa-exclamation-triangle" />
        </span>&nbsp;用户剩余课时不足&nbsp;&nbsp;
        <span className="label label-warning">
          Demo
        </span>&nbsp;演示课&nbsp;&nbsp;
        <span className="label label-primary">
          正式课
        </span>&nbsp;已付费用户正式课&nbsp;&nbsp;
        <span className="label" style={{ backgroundColor: "#009999" }}>
          <i className="fa fa-tumblr" />
        </span>&nbsp;临时课&nbsp;&nbsp;
        <span className="label label-success">
          <i className="fa fa-adjust" />
        </span>&nbsp;请假空闲出来的老师&nbsp;&nbsp;
        <span className="label label-danger">
          <i className="fa fa-ban" />
        </span>&nbsp;学生请假/提前请假&nbsp;&nbsp;
        <span className="label bg-blue">
          <i className="fa fa-ban" />
        </span>&nbsp;老师请假&nbsp;&nbsp;
        <span className="label label-danger">
          <i className="fa fa-user-times" />
        </span>&nbsp;不在工作时间&nbsp;&nbsp;
        <span className="label" style={{ backgroundColor: "#990033" }}>
          <i className="fa fa-thumb-tack" />
        </span>&nbsp;占位课& nbsp;&nbsp;
        <span className="label label-danger">
          <i className="fa fa-minus-circle" />
        </span>&nbsp;本周课程被放弃&nbsp;&nbsp;
        <span className="label" style={{ backgroundColor: "#996699" }}>
          <i className="fa fa-tags" />
        </span>&nbsp;以前是占位课&nbsp;&nbsp;
        <i className="fa fa-user" />&nbsp;在线&nbsp;&nbsp;
        <i className="fa fa-comment" />&nbsp;发言&nbsp; &nbsp;
        <i className="fa fa-video-camera" />&nbsp;视频&nbsp;&nbsp;
        <i className="fa fa-envira" /> & nbsp;新用户 & nbsp; & nbsp;
      </div>
    )
  }
}
