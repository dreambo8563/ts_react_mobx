import { action, autorun, computed, observable } from "mobx"

export class AppStore {
  public loadingChange = autorun(() => {
    console.log(this.loading)
  })
  @observable public loading
  constructor() {
    this.loading = false
  }

  @action
  public setLoading = (loading: boolean): void => {
    this.loading = loading
  }
}

export default AppStore
