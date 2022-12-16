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

  get nutriments() {
    return this.keyData
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

export class WorkingAverageSessionData {
  constructor(datas) { 
    this.day = datas.day
    this.duration = datas.sessionLength

    let sessionsData = []
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    this.sessions = datas.sessions.map((session) => {
        return sessionsData.push({
          day: days[session.day - 1],
          duration: session.sessionLength,
        })
      })
      return sessionsData
    }
  
}
