/** create object that return raw user data formatted
 */
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

/** create object that return raw average data formatted
 */
export class WorkingAverageSessionData {
  constructor(datas) { 
    let sessionsData = []
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    this.day = datas.day
    this.duration = datas.sessionLength
    // create array of objects with day letter in place of number
    this.sessions = datas.sessions.map((session) => {
        return sessionsData.push({
          day: days[session.day - 1],
          duration: session.sessionLength,
        })
      })
      return sessionsData
    }
}

/** create object that return raw activity data formatted
 */
export class WorkingActivityData {
  constructor(datas) {
    const sessionsData = []
    //create array of objets with number in place of date
    this.sessions = datas.sessions.map((session) => {
      return sessionsData.push({
        day: session.day.slice(-1),
        kg: session.kilogram,
        kCal: session.calories,
      })
    })
    return sessionsData
  }
}

/** create object that return raw performance data formatted
 */
export class WorkingPerfData {
  constructor(datas) {
      this.value = datas.data
      this.kind = datas.kind
// switch case that allows to match kind with value
      this.value.map((kind) => {
        switch (kind.kind) {
          case 1:
            kind.kind = 'Intensité'
            break
          case 2:
            kind.kind = 'Vitesse'
            break
          case 3:
            kind.kind = 'Force'
            break
          case 4:
            kind.kind = 'Endurance'
            break
          case 5:
            kind.kind = 'Energie'
            break
          case 6:
            kind.kind = 'Cardio'
        }
        return kind.kind
           })
      return this.value
    }
  }
