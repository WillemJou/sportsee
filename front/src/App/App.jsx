import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAverageSessionDatas, fetchMainUserDatas } from '../API/APIService'
import { LeftNavBar } from '../container/leftNavBar/leftNavBar'
import { TopNavBar } from '../container/topNavBar/topNavBar'
import { Dashboard } from '../pages/dashboard'
import './app.css'

export function App() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [datas, setData] = useState([])
  const [average, setAverage] = useState([])
 
  useEffect(() => {
      const loader = () => {
          let timer = setTimeout(() => setIsLoading(true), 500)
          return () => {
              clearTimeout(timer)
            }
        }
    const getDatas = async () => {
      await fetchMainUserDatas(id).then((res) => setData(res))
      await fetchAverageSessionDatas(id).then((res) => setAverage(res))
    }
    loader()
    getDatas(id)
  }, [])
  return (
    <>
      <TopNavBar />
      <div className="wrapper">
        <LeftNavBar />
        <Dashboard
          isLoading={isLoading}
          name={datas.firstName}
          average={average}
          nutriments={datas.nutriments}
          score={datas.percent}
          rest={datas.rest}
        />
      </div>
    </>
  )
}
