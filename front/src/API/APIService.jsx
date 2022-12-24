import userMainDatas from '../mockData/userMainData.json'
import averageDatas from '../mockData/userAverageSessions.json'
import activityDatas from '../mockData/userActivity.json'
import performanceDatas from '../mockData/userPerformance.json'
import { WorkingAverageSessionData, WorkingUserData, WorkingActivityData, WorkingPerfData } from './models'
/**
 * @param {Integer} id 
 * @returns {Object} userInformation - api user formatted data with working class 
 */
export async function fetchMainUserDatas(id) {
  try {
    const res = await fetch('http://localhost:3000/user/' + id)
    const datas = await res.json()
    const userFetchInformation = new WorkingUserData(datas.data)
    return userFetchInformation
  } catch {
    return getMainUserMockDatas(id)
  }
}
/**
 * @param {Integer} id
 * @returns {Object} userMockInformation - local user formatted data with working class 
 */
export function getMainUserMockDatas(id) {
  const mockDatas = userMainDatas
  // match array id with use params (id parameter)
  const matchId = mockDatas.find((arr) => (arr.id = id))
  const userMockInformation = new WorkingUserData(matchId)
  return userMockInformation
}

/**
 * @param {Integer} id 
 * @returns {Array} averageSessionInformation - api or mock average formatted data with working class
 */
export async function fetchAverageSessionDatas (id) {
    try{
    const res = await fetch('http://localhost:3000/user/' + id + '/average-sessions')
    const datas = await res.json()
    const averageSessionInformation = new WorkingAverageSessionData(datas.data)
    return averageSessionInformation
    } catch {
        return getAverageMockDatas(id)
    }
}
/**
 * @param {Integer} id
 * @returns {Object} averageMockInformation - local average datas formatted with working class 
 */
 export function getAverageMockDatas(id) {
    const mockDatas = averageDatas
    const matchId = mockDatas.find((arr) => (arr.userId = id))
    const averageMockInformation = new WorkingAverageSessionData(matchId)
    return averageMockInformation
  }

/**
 * @param {Integer} id 
 * @returns {Array} activitySessionInformation - api or mock activity formatted data with working class
 */
export async function fetchActivityDatas (id) {
    try{
    const res = await fetch('http://localhost:3000/user/' + id + '/activity')
    const datas = await res.json()
    const activitySessionInformation = new WorkingActivityData(datas.data)
    return activitySessionInformation
    } catch {
        return getActivityMockDatas(id)
    }
}
/**
 * @param {Integer} id
 * @returns {Object} activityMockInformation - local activity datas formatted with working class 
 */
 export function getActivityMockDatas(id) {
    const mockDatas = activityDatas
    const matchId = mockDatas.find((arr) => (arr.userId = id))
    const activityMockInformation = new WorkingActivityData(matchId)
    return activityMockInformation
  }

/**
 * @param {Integer} id 
 * @returns {Array} perfSessionInformation - api or mock performance formatted data with working class
 */
export async function fetchPerfDatas (id) {
    try {
    const res = await fetch('http://localhost:3000/user/' + id + '/performance')
    const datas = await res.json()
    const perfSessionInformation = new WorkingPerfData(datas.data)
    return perfSessionInformation
    } catch {
        return getPerformanceMockDatas(id)
    }
}
/**
 * @param {Integer} id
 * @returns {Object} performanceMockInformation - local performance datas formatted with working class 
 */
 export function getPerformanceMockDatas(id) {
    const mockDatas = performanceDatas
    const matchId = mockDatas.find((arr) => (arr.userId = id))
    const performanceMockInformation = new WorkingPerfData(matchId)
    return performanceMockInformation
  }








    



