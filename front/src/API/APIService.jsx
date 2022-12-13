import { WorkingUserData } from './models'

export async function fetchDatas (id) {

    const res = await fetch('http://localhost:3000/user/' + id)
    const datas = await res.json()
    const userInformation = new WorkingUserData(datas.data)
    return userInformation
}




    



