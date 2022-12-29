import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  fetchActivityDatas,
  fetchAverageSessionDatas,
  fetchMainUserDatas,
  fetchPerfDatas,
} from '../API/APIService'
import { LeftNavBar } from '../container/leftNavBar/leftNavBar'
import { TopNavBar } from '../container/topNavBar/topNavBar'
import { Dashboard } from '../pages/dashboard'
import { Loader } from '../components/loader/loader'
import './app.css'
import PropTypes from 'prop-types'
import { Error } from '../components/error/error'

/** Hooks to get data and set props into components
 */
export function App() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [datas, setData] = useState([])
  const [average, setAverage] = useState([])
  const [activity, setActivity] = useState([])
  const [performance, setPerformance] = useState([])

  useEffect(() => {
    /** retrieve datas from API SERVICE and update initial state + error 404 management
     */
    const getDatas = async (id) => {
      setIsLoading(true)
      try {
        await fetchMainUserDatas(id).then((res) => setData(res))
      } catch (error) {
        setError(error)
      }
      try {
        await fetchAverageSessionDatas(id).then((res) => setAverage(res))
      } catch (error) {
        setError(error)
      }
      try {
        await fetchActivityDatas(id).then((res) => setActivity(res))
      } catch (error) {
        setError(error)
      }
      try {
        await fetchPerfDatas(id).then((res) => setPerformance(res))
      } catch (error) {
        setError(error)
      }
    }
    getDatas(id).finally(() => setIsLoading(false))
  }, [id])

  if (isLoading) {
    return <Loader />
  }
  if (error) {
    return <Error />
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

App.propTypes = {
  firstname: PropTypes.string,
  average: PropTypes.array,
  activity: PropTypes.array,
  performance: PropTypes.array,
  nutriments: PropTypes.object,
  percent: PropTypes.number,
  rest: PropTypes.number,
}
