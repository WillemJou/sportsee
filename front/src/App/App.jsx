import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchActivityDatas, fetchAverageSessionDatas, fetchMainUserDatas, fetchPerfDatas } from '../API/APIService'
import { LeftNavBar } from '../container/leftNavBar/leftNavBar'
import { TopNavBar } from '../container/topNavBar/topNavBar'
import { Dashboard } from '../pages/dashboard'
import './app.css'

export function App() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [datas, setData] = useState([])
  const [average, setAverage] = useState([])
  const [activity, setActivity] = useState([])
  const [performance, setPerformance] = useState([])
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
      await fetchActivityDatas(id).then((res) => setActivity(res))
      await fetchPerfDatas(id).then((res) => setPerformance(res))
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
          activity={activity}
          performance={performance}
          nutriments={datas.nutriments}
          score={datas.percent}
          rest={datas.rest}
        />
      </div>
    </>
  )
}
