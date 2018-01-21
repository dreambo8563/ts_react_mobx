import "antd/dist/antd.less"
import { useStrict } from "mobx"
import * as React from "react"
import * as ReactDOM from "react-dom"
import "../assets/main.css"
import App from "./routers"

// enable MobX strict mode
useStrict(true)

// render react DOM
ReactDOM.render(<App />, document.getElementById("app"))
