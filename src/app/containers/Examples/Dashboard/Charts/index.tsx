import { View as DataView } from "@antv/data-set"
import DataSet from "@antv/data-set"
import { Col, Row } from "antd"
import {
  Axis,
  Chart,
  Coord,
  Geom,
  Guide,
  Label,
  Legend,
  Shape,
  Tooltip,
  View
} from "BizCharts"
import cx from "classnames"
import { inject, observer } from "mobx-react"
import React from "react"
import { STORE_APP } from "../../../../constants/stores"
import { AppStore } from "../../../../stores"
// 如果需要用到css
import style from "./style.css"
const { Text } = Guide
export interface ChartsProps {}

export interface ChartsState {}

// 如果要注入store
@inject(STORE_APP)
@observer
export default class Charts extends React.Component<ChartsProps, ChartsState> {
  private data1 = [
    { month: "2015-01-01", acc: 84.0 },
    { month: "2015-02-01", acc: 14.9 },
    { month: "2015-03-01", acc: 17.0 },
    { month: "2015-04-01", acc: 20.2 },
    { month: "2015-05-01", acc: 55.6 },
    { month: "2015-06-01", acc: 56.7 },
    { month: "2015-07-01", acc: 30.6 },
    { month: "2015-08-01", acc: 63.2 },
    { month: "2015-09-01", acc: 24.6 },
    { month: "2015-10-01", acc: 14.0 },
    { month: "2015-11-01", acc: 9.4 },
    { month: "2015-12-01", acc: 6.3 }
  ]
  private data2 = [
    { item: "事例一", count: 40 },
    { item: "事例二", count: 21 },
    { item: "事例三", count: 17 },
    { item: "事例四", count: 13 },
    { item: "事例五", count: 9 }
  ]
  private dv1 = new DataView()
  private dv3 = new DataView()
  private userDv = new DataView()

  private cols2 = {
    percent: {
      formatter: val => {
        val = val * 100 + "%"
        return val
      }
    }
  }
  private cols3 = {
    percent: {
      formatter: val => {
        return (val * 100).toFixed(2) + "%"
      }
    }
  }
  private text3 = [
    "MIDNIGHT",
    "3 AM",
    "6 AM",
    "9 AM",
    "NOON",
    "3 PM",
    "6 PM",
    "9 PM"
  ]
  private userData = [
    { type: "睡眠", value: 70 },
    { type: "淡茶 & 烟斗 & 冥想", value: 10 },
    { type: "写作", value: 10 },
    { type: "教课", value: 40 },
    { type: "酒吧吃肉配红酒", value: 40 },
    { type: "散步", value: 10 },
    { type: "拜访约瑟夫", value: 30 },
    { type: "阅读", value: 30 }
  ]
  private data3 = []

  constructor(props: ChartsProps, context: any) {
    super(props, context)
    this.state = {}
  }

  public componentWillMount() {
    // 此处可以加载请求
  }
  public componentDidMount() {
    // 此处可以处理带ref的
    const app = this.props[STORE_APP] as AppStore
    app.setTitle("Dashboard")
    this.dv1.source(this.data2).transform({
      type: "percent",
      field: "count",
      dimension: "item",
      as: "percent"
    })

    for (let i = 0; i < 24; i++) {
      const item: { type?: string; value?: number } = {}
      item.type = i + ""
      item.value = 10
      this.data3.push(item)
    }

    this.dv3.source(this.data3).transform({
      type: "percent",
      field: "value",
      dimension: "type",
      as: "percent"
    })
    this.userDv.source(this.userData).transform({
      type: "percent",
      field: "value",
      dimension: "type",
      as: "percent"
    })
    setTimeout(() => {
      this.forceUpdate()
    }, 20)
  }
  public render() {
    return (
      <div className={style.bg}>
        <Row>
          <Chart
            className={style.fullWidth}
            height={400}
            data={this.data1}
            forceFit
          >
            <Axis
              name="month"
              title={null}
              tickLine={null}
              line={{ stroke: "#E6E6E6" }}
            />
            <Axis
              name="acc"
              line={null}
              tickLine={null}
              grid={null}
              title={null}
            />
            <Tooltip />
            <Geom
              type="line"
              position="month*acc"
              size={1}
              color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
              shape="smooth"
              style={{
                shadowColor: "l (270) 0:rgba(21, 146, 255, 0)",
                shadowBlur: 60,
                shadowOffsetY: 6
              }}
            />
          </Chart>
        </Row>
        <br />
        <br />
        <Row type="flex" justify="space-between" align="bottom">
          <Col span={8}>
            <Chart
              className={style.fullWidth}
              height={400}
              data={this.dv1}
              padding={[80, 100, 80, 80]}
              forceFit
            >
              <Coord type="theta" radius={0.75} />
              <Axis name="percent" />
              <Legend
                position="right"
                offsetY={-400 / 2 + 120}
                offsetX={-100}
              />
              <Tooltip
                showTitle={false}
                itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;>
                </span>{name}: {value}</li>"
              />
              <Geom
                type="intervalStack"
                position="percent"
                color="item"
                tooltip={[
                  "item*percent",
                  (item, percent) => {
                    percent = percent * 100 + "%"
                    return {
                      name: item,
                      value: percent
                    }
                  }
                ]}
                style={{ lineWidth: 1, stroke: "#fff" }}
              >
                <Label
                  content="percent"
                  formatter={(val, item) => {
                    return item.point.item + ": " + val
                  }}
                />
              </Geom>
            </Chart>
          </Col>
          <Col span={14}>
            <Chart
              className={cx(style.fullWidth, style.autoHeight)}
              width={400}
              height={400}
              data={this.data3}
              padding={60}
              forceFit
            >
              <Coord type="theta" radius={0.8} />
              <Tooltip showTitle={false} />
              <View data={this.dv3}>
                <Coord type="theta" innerRadius={0.9} />
                <Geom
                  type="intervalStack"
                  position="percent"
                  color={["type", ["rgba(255, 255, 255, 0)"]]}
                  style={{ stroke: "#444", lineWidth: 1 }}
                />
                <Guide>
                  <Text position={["50%", "50%"]} content="24 hours" />
                </Guide>
              </View>
              <View data={this.data3}>
                <Coord type="polar" innerRadius={0.9} />
                <Geom
                  type="interval"
                  position="type*value"
                  color="#444"
                  size={[
                    "type",
                    val => {
                      if (val % 3 === 0) {
                        return 4
                      } else {
                        return 0
                      }
                    }
                  ]}
                  style={{ stroke: "#444", lineWidth: 1 }}
                >
                  <Label
                    content={[
                      "type",
                      val => {
                        if (val % 3 === 0) {
                          return this.text3[val / 3]
                        }
                        return ""
                      }
                    ]}
                    offset={15}
                    textStyle={{
                      fontSize: 12,
                      fontWeight: "bold",
                      fill: "#bfbfbf"
                    }}
                  />
                </Geom>
                <Guide>
                  <Text
                    position={["50%", "50%"]}
                    content="24 hours"
                  />
                </Guide>
              </View>
              <View data={this.userDv}>
                <Coord type="theta" innerRadius={0.75} />
                <Geom
                  tooltip={[
                    "item*percent",
                    (item, percent) => {
                      percent = percent.toFixed(3) * 100 + "%"
                      return {
                        name: item,
                        value: percent
                      }
                    }
                  ]}
                  type="intervalStack"
                  position="percent"
                  color={"type"}
                >
                  <Label content="type" offset={40} />
                </Geom>
              </View>
            </Chart>
          </Col>
        </Row>
      </div>
    )
  }
}
