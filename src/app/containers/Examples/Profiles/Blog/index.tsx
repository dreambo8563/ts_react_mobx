import { Avatar, Button, Col, Icon, List, Row } from "antd"
import cx from "classnames"
import { observer } from "mobx-react"
import React from "react"
import av from "../../../../../assets/img/example/av.jpeg"
import ship1 from "../../../../../assets/img/example/ship1.jpeg"
import ship2 from "../../../../../assets/img/example/ship2.jpeg"
import ship3 from "../../../../../assets/img/example/ship3.jpeg"
// 如果需要用到css
import style from "./style.css"

export interface BlogState {}

export interface BlogState {}
const headerOps = [
  {
    text: "Followers",
    num: 50
  },
  {
    text: "Following",
    num: 40
  },
  {
    text: "Questions",
    num: 32
  },
  {
    text: "Answers",
    num: 30
  }
]
// 如果要注入store
// @inject(STORE_TODO, STORE_ROUTER)
@observer
export default class Blog extends React.Component<BlogState, BlogState> {
  constructor(props: BlogState, context: any) {
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
      <div className={style.frame}>
        <div className={cx(style.headerFrame, style.shadowBox)}>
          <Row type="flex" justify="space-between" align="top">
            <Col span={8}>
              <Row type="flex" justify="space-around" align="middle">
                <img className={style.avatar} src={av} alt="avatar" />
              </Row>
              <br />
              <Row type="flex" justify="center" align="middle">
                <Button
                  className={cx(style.mr20, style.elipBtn, style.followBtn)}
                >
                  follow
                </Button>
                <Button className={cx(style.ml20, style.elipBtn, style.msgBtn)}>
                  message
                </Button>
              </Row>
            </Col>
            <Col span={16}>
              <div className={style.name}>Vincent Guo</div>
              <div className={style.position}>Chief Office</div>
              <br />
              <div className={style.comText}>Age: 37</div>
              <div className={style.comText}>From: Beijing</div>
              <div className={style.comText}>Company: xxxxxx</div>
              <br />
              <hr />
              <br />
              <Row gutter={32} type="flex">
                {headerOps.map((v, i) => {
                  return (
                    <span key={i}>
                      <div className={style.lightLabel}>{v.text}</div>
                      <div className={style.num}>{v.num}</div>
                    </span>
                  )
                })}
              </Row>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <section>
          <div className={style.subTitle}>About</div>
          <br />
          <Row type="flex" justify="space-between" align="top">
            <Col className={style.shadowBox} span={6}>
              <div className={style.aboutTile}>
                <div className={style.title}>Sailed</div>

                <div>
                  <span className={cx(style.num, style.fz90)}>15</span>
                  &nbsp;
                  <span className={style.uint}>ships</span>
                </div>
                <Row type="flex" justify="space-between">
                  <div>
                    <div className={cx(style.comText, style.fz20)}>Master</div>
                    <div className={cx(style.numBlue, style.fz20)}>3</div>
                  </div>
                  <div>
                    <div className={cx(style.comText, style.fz20)}>
                      Other Ranks
                    </div>
                    <div className={cx(style.numGreen, style.fz20)}>12</div>
                  </div>
                </Row>
              </div>
            </Col>
            <Col className={style.shadowBox} span={6}>
              <div className={style.aboutTile}>
                <div className={style.title}>Seatime</div>
                <div>
                  <span className={cx(style.num, style.fz90)}>103</span>
                  &nbsp;
                  <span className={style.uint}>months</span>
                </div>
                <Row type="flex" justify="space-between">
                  <div>
                    <div className={cx(style.comText, style.fz20)}>Master</div>
                    <div className={cx(style.numBlue, style.fz20)}>43</div>
                  </div>
                  <div>
                    <div className={cx(style.comText, style.fz20)}>
                      Other Ranks
                    </div>
                    <div className={cx(style.numGreen, style.fz20)}>60</div>
                  </div>
                </Row>
              </div>
            </Col>
            <Col className={style.shadowBox} span={6}>
              <div className={style.aboutTile}>
                <div className={style.title}>Q & A</div>
                <Row gutter={16} type="flex" justify="center">
                  <Col>
                    <div className={style.greenCir}>300</div>
                  </Col>
                  <Col>
                    <div className={style.blueCir}>200</div>
                  </Col>
                </Row>
                <br />
                <Row type="flex" align="middle">
                  <span className={cx(style.greenSmall, style.mr20)} />{" "}
                  <span className={style.comText}>
                    number of question asked
                  </span>
                </Row>
                <Row type="flex" align="middle">
                  <span
                    className={cx(style.blueSmall, style.mr20, style.comText)}
                  />{" "}
                  <span className={style.comText}>
                    number of question answered
                  </span>
                </Row>
              </div>
            </Col>
          </Row>
        </section>
        <br />
        <br />
        <section>
          <div className={style.subTitle}>Interest</div>
          <br />
          <div className={style.midFrame}>
            <Row type="flex" justify="space-between" align="top">
              <Col className={style.shadowBox} span={6}>
                <img src={ship1} alt="" />
                <br />
                <br />

                <div className={style.pad10}>
                  <div className={style.title}>Ship Navigation</div>

                  <br />
                  <div className={cx(style.comText, style.fz18)}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </div>
                  <hr />
                  <Row type="flex" justify="space-between" align="top">
                    <div>
                      <div className={style.comText}>Followers</div>
                      <div className={style.num}>112</div>
                    </div>
                    <Button
                      className={cx(
                        style.followBtn2,
                        style.elipBtn,
                        style.height40
                      )}
                    >
                      follow
                    </Button>
                  </Row>
                </div>
              </Col>
              <Col className={style.shadowBox} span={6}>
                <img src={ship1} alt="" />
                <br />
                <br />
                <div className={style.pad10}>
                  <div className={style.title}>Ship Navigation</div>

                  <br />
                  <div className={cx(style.comText, style.fz18)}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </div>
                  <hr />
                  <Row type="flex" justify="space-between" align="top">
                    <div>
                      <div className={style.comText}>Followers</div>
                      <div className={style.num}>112</div>
                    </div>
                    <Button
                      className={cx(
                        style.followBtn2,
                        style.elipBtn,
                        style.height40
                      )}
                    >
                      follow
                    </Button>
                  </Row>
                </div>
              </Col>
              <Col className={style.shadowBox} span={6}>
                <img src={ship1} alt="" />
                <br />
                <br />
                <div className={style.pad10}>
                  <div className={style.title}>Ship Navigation</div>

                  <br />
                  <div className={cx(style.comText, style.fz18)}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </div>
                  <hr />
                  <Row type="flex" justify="space-between" align="top">
                    <div>
                      <div className={style.comText}>Followers</div>
                      <div className={style.num}>112</div>
                    </div>
                    <Button
                      className={cx(
                        style.followBtn2,
                        style.elipBtn,
                        style.height40
                      )}
                    >
                      follow
                    </Button>
                  </Row>
                </div>
              </Col>
            </Row>
            <br />
            <Row type="flex" justify="center">
              <Icon
                className={cx(style.followBtn2, style.fz20)}
                type="ellipsis"
              />
            </Row>
          </div>
        </section>
        <br />
        <br />
        <section className={style.feedSection}>
          <div className={style.subTitle}>Feed</div>
          <br />
          <Row gutter={16}>
            <Col span={16}>
              <List
                itemLayout="horizontal"
                dataSource={[1, 2, 3]}
                renderItem={item => (
                  <List.Item
                    className={cx({
                      [style.listItem]: true,
                      [style.selectedItem]: parseInt(item, 10) === 1
                    })}
                  >
                    <List.Item.Meta
                      avatar={<Avatar size="large" src={av} />}
                      title={<a href="https://ant.design">xxxx</a>}
                      description="Ant Design, a design language for background applications,
                       is refined by Ant UED Team"
                    />
                    <Row type="flex" justify="center" align="middle">
                      <Button
                        className={cx(
                          style.mr20,
                          style.elipBtn,
                          style.followBtn
                        )}
                      >
                        follow
                      </Button>
                      <Icon
                        className={cx(style.fz44, style.comText, style.cardOps)}
                        type="ellipsis"
                      />
                    </Row>
                    <div className={cx(style.bottomCard, style.shadowBox)}>
                      <div className={style.header}>
                        <img src={av} alt="" />
                        <div className={style.name}>Vincent Guo</div>
                        <div className={style.title}>Full Stack Developer</div>
                      </div>
                      <br />
                      <Row type="flex" justify="space-around" align="middle">
                        <div className={style.cardInfoItem}>
                          <div className={style.comText}>Followers</div>
                          <div className={style.num}>50</div>
                        </div>
                        <div className={style.cardInfoItem}>
                          <div className={style.comText}>Following</div>
                          <div className={style.num}>40</div>
                        </div>
                        <div className={style.cardInfoItem}>
                          <div className={style.comText}>Questions</div>
                          <div className={style.num}>32</div>
                        </div>
                        <div className={style.cardInfoItem}>
                          <div className={style.comText}>Answers</div>
                          <div className={style.num}>30</div>
                        </div>
                      </Row>
                    </div>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </section>
      </div>
    )
  }
}
