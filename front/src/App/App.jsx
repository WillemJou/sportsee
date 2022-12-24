import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchActivityDatas, fetchAverageSessionDatas, fetchMainUserDatas, fetchPerfDatas } from '../API/APIService'
import { LeftNavBar } from '../container/leftNavBar/leftNavBar'
import { TopNavBar } from '../container/topNavBar/topNavBar'
import { Dashboard } from '../pages/dashboard'
import { Loader } from '../components/loader/loader'
import './app.css'

/** Hooks to get data and set props into components
 */
export function App() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [datas, setData] = useState([])
  const [average, setAverage] = useState([])
  const [activity, setActivity] = useState([])
  const [performance, setPerformance] = useState([])
  
  useEffect(() => {
    /** retrieve datas from fetch functions and update initial state
     */
    const getDatas = async () => {
      setIsLoading(true)
      await fetchMainUserDatas(id).then((res) => setData(res))
      await fetchAverageSessionDatas(id).then((res) => setAverage(res))
      await fetchActivityDatas(id).then((res) => setActivity(res))
      await fetchPerfDatas(id).then((res) => setPerformance(res)).finally(() => setIsLoading(false))
    }
    getDatas(id)
  }, [])
 
  if(isLoading) {
    return <Loader />
    }
  return (
    <>
      <TopNavBar />
      <div className="wrapper">
        <LeftNavBar />
        <Dashboard
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
