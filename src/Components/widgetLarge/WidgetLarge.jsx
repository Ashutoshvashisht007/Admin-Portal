import React from 'react'
import "./widgetLarge.css"


export const WidgetLarge = () => {

  const Button = ({type}) => {
      return <button className={"WidgetLargeButton" + type}>
        {type}
      </button>
  }

  return (
    <div className='widgetLarge'>
      <h3 className='widgetLargeTitle'>Latest Transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeRow">
          <th className="widgetLargeHeading">
            Customer
          </th>
          <th className="widgetLargeHeading">
            Date
          </th>
          <th className="widgetLargeHeading">
            Amount
          </th>
          <th className="widgetLargeHeading">
            Status
          </th>
        </tr>
        <tr className="widgetLargeRow">
          <td className="widgetLargeTd">
            <img src="assets/pic/passport_size.jpg" alt="Profile Pic" className="widgetLargeImage" />
            <span className="widgetLargeName">Ashutosh Anand Sharma</span>
          </td>
          <td className="widgetLargeDate">24 Dec 2023</td>
          <td className="widgetLargeAmount">$220.00</td>
          <td className="widgetLargeStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLargeRow">
          <td className="widgetLargeTd">
            <img src="assets/pic/passport_size.jpg" alt="Profile Pic" className="widgetLargeImage" />
            <span className="widgetLargeName">Ashutosh Anand Sharma</span>
          </td>
          <td className="widgetLargeDate">24 Dec 2023</td>
          <td className="widgetLargeAmount">$220.00</td>
          <td className="widgetLargeStatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetLargeRow">
          <td className="widgetLargeTd">
            <img src="assets/pic/passport_size.jpg" alt="Profile Pic" className="widgetLargeImage" />
            <span className="widgetLargeName">Ashutosh Anand Sharma</span>
          </td>
          <td className="widgetLargeDate">24 Dec 2023</td>
          <td className="widgetLargeAmount">$220.00</td>
          <td className="widgetLargeStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLargeRow">
          <td className="widgetLargeTd">
            <img src="assets/pic/passport_size.jpg" alt="Profile Pic" className="widgetLargeImage" />
            <span className="widgetLargeName">Ashutosh Anand Sharma</span>
          </td>
          <td className="widgetLargeDate">24 Dec 2023</td>
          <td className="widgetLargeAmount">$220.00</td>
          <td className="widgetLargeStatus"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  )
}
