import React, {PureComponent} from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Chart = ({title, data, dataKey, grid}) => {

  return (
    <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
            {grid &&  <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey={dataKey} stroke='#5550bd'/>
            <Line type="monotone" dataKey={dataKey} activeDot={{ r: 8 }}/>

            <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
