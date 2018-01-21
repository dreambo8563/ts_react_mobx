import { action, computed, observable } from "mobx"

export class AppStore {
  @observable public loading = false

  @action
  public toggleLoading = (loading: boolean): void => {
    this.loading = loading
  }
}

export default AppStore
