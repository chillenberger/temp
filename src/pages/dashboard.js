import React, {useState} from 'react'
import Menubar, {SideNavBar} from '../components/menu-bar'
import {
  BarChart,
  DoughnutChart
} from '../components/charts'
import {
  ShipmentTable,
  ShippingTableDisplay
} from '../components/tables'


const AccountDash = () => {
  return (
    <div id='accountC8R'>
      <div id='businessData'>
        <div>
          <p><b>Company:</b> Digikey</p>
        </div>
        <div>
          <p><b>Account:</b> ACB45TEST1</p>
        </div>
      </div>
      <hr/>
      <div id='chartC8R'>
        <div className='smallChart'>
          <DoughnutChart/>
        </div>
        <div className='smallChart'>
          <BarChart/>
        </div>
      </div>
    </div>
  )
}

const ShipmentDash = () => {
  return (
    <div>
      <ShipmentTable/>
    </div>
  )
}

const BillingDash = () => {
  return (
    <>
      <p>Work in progress</p>
    </>
  )
}

const SettingsDash = () => {
  return (
    <>
      <p>Work in progress</p>
    </>
  )
}

export default function Dashboard() {

  const [dash, setDash] = useState({
    display: 'account'
  })

  return (
    <div className='mainDashC8R'>
      <SideNavBar
        action={setDash}/>
      <div className='displayArea'>
        <Menubar/>
        {dash.display == 'account' && <AccountDash/>}
        {dash.display == 'shipment' && <ShipmentDash/>}
        {dash.display == 'billing' && <BillingDash/>}
        {dash.display == 'settings' && <SettingsDash/>}
      </div>
    </div>
  )
}
