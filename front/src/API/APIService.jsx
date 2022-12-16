import { WorkingAverageSessionData, WorkingUserData } from './models'

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




    



