import React from 'react'
import "./Home.css"
import { FeaturedInfo } from '../../Components/featuredinfo/Featuredinfo'
import { Chart } from '../../Components/chart/Chart'
import {userData} from '../../dummyData'
import { WidgetSmall } from '../../Components/widgetSmall/WidgetSmall.jsx'
import { WidgetLarge } from '../../Components/widgetLarge/WidgetLarge.jsx'

export const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data = {userData} title="User Analytics" dataKey = "Active Users" grid/>
      <div className="homeWidget">
        <WidgetSmall/>
        <WidgetLarge/>
      </div>
    </div>
  )
}
