import React from 'react'
import "./Home.css"
import { FeaturedInfo } from '../../Components/featuredinfo/Featuredinfo'
import { Chart } from '../../Components/chart/Chart'
import {userData} from '../../dummyData.js'

export const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data = {userData} title="User Analytics" dataKey = "Active Users" grid/>
    </div>
  )
}
