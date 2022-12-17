import { WorkingAverageSessionData, WorkingUserData, WorkingActivityData, WorkingPerfData } from './models'

export async function fetchMainUserDatas (id) {

    const res = await fetch('http://localhost:3000/user/' + id)
    const datas = await res.json()
    const userInformation = new WorkingUserData(datas.data)
    return userInformation
}

export async function fetchAverageSessionDatas (id) {
    const res = await fetch('http://localhost:3000/user/' + id + '/average-sessions')
    const datas = await res.json()
    const averageSessionInformation = new WorkingAverageSessionData(datas.data)
    return averageSessionInformation
}

export async function fetchActivityDatas (id) {
    const res = await fetch('http://localhost:3000/user/' + id + '/activity')
    const datas = await res.json()
    const activitySessionInformation = new WorkingActivityData(datas.data)
    return activitySessionInformation
}

export async function fetchPerfDatas (id) {
    const res = await fetch('http://localhost:3000/user/' + id + '/performance')
    const datas = await res.json()
    const perfSessionInformation = new WorkingPerfData(datas.data)
    return perfSessionInformation
}






    



