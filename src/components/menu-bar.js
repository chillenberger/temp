import React from 'react'



export default function Menubar() {


  return (
    <div className="mainContainer">
    </div>
  )
}

const changeDash=(action, dash)=>{
  action({
    display: dash
  })
}

function SideNavBar(props) {
  return (
    <div className='navBar'>
      <div>
        <img
          src='https://www.aevumspace.com/static/aevum_logo_white.png'
          className='logoSmall'/>
      </div>
        <div id='firstButton' className='dashButton'>
          <button
            onClick={() => changeDash(props.action, 'account')}
            style={{width: '100%'}}>
            <p>Account</p>
          </button>
        </div>
      <div className='dashButton'>
        <button
          onClick={() => changeDash(props.action, 'shipment')}
          style={{width: '100%'}}>
          <p>Shipments</p>
        </button>
      </div>

      <div className='dashButton'>
        <button
          onClick={() => changeDash(props.action, 'billing')}
          style={{width: '100%'}}>
          <p>Billing</p>
        </button>
      </div>
      <div id='lastButton' className='dashButton'>
        <button
          onClick={() => changeDash(props.action, 'settings')}
          style={{width: '100%'}}>
          <p>Settings</p>
        </button>
      </div>
    </div>
  )
}

export {SideNavBar}
