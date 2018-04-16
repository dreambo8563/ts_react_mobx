import "./app"
if (process.env.NODE_ENV === "production") {
  // tslint:disable-next-line
  require("offline-plugin/runtime").install()
}
