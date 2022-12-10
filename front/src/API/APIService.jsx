import { useParams } from 'react-router-dom'
import { ModelMainData } from './models'

export async function getDatas (id) {

    const res = await fetch('http://localhost:3000/user/' + id)
    const datas = await res.json()
    const userInformation = new ModelMainData(datas.data)
    return userInformation
}

export function useId () {
    let { id } = useParams()
    return id
}


    



