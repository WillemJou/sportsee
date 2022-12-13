export class WorkingUserData {
  constructor(datas) {
    this.id = datas.id
    this.userInfos = datas.userInfos
    this.todayScore = datas.todayScore
    this.keyData = datas.keyData
  }
  get firstName() {
    return this.userInfos.firstName
  }

  get percent() {
    return this.formatPercent
  }

  get rest() {
    return 100 - this.percent
  }

  get formatPercent() {
    return this.todayScore * 100
  }
}
