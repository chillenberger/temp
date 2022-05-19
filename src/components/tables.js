import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBox,
  faIndustry,
  faPlane,
  faFileCircleCheck
} from '@fortawesome/free-solid-svg-icons'

const data = [
    {id:"145362ABTEST", status:'Pickup', loc:'MN'},
    {id:'245362ABTEST', status:'Processing', loc:'TX'},
    {id:'445362ABTEST', status:'Delivered', loc:'CO'}]



const ShipmentTable = () => {
  const [disp, setdisp] = useState({
    id: '',
    status: ''
  })

  const display = (d) => {
    let id = document.getElementById('id'+d.id.toString())
    console.log(id.style.backgroundColor)
    if(id.style.backgroundColor == 'rgba(34, 42, 48, 0.8)') {
      id.style = {}
    } else {
      id.style.backgroundColor = 'rgba(34, 42, 48, 0.8)'
      id.style.color = 'white'
      let table = document.getElementById('table').children
      for( let i=0; i<table.length; i++) {
        if(table[i].id != 'id'+d.id.toString()) {
          table[i].style = {}
        }
      }

      setdisp({
        id: d.id,
        status: d.status
      })
    }
  }

  const listItems = data.map((d) =>
    <div id={'id'+ d.id.toString()} key={d.id.toString()} className='tableRow' onClick={() => display(d)}>
      <div className='tableItem'>{d.id}</div>
      <div className='tableItem'>{d.status}</div>
      <div className='tableItem'>{d.loc}</div>
    </div>
  )

  return (
    <div id="shipmentDash">
      <hr/>
        <div style={{width: '60vw', marginLeft: '2rem'}}><h1>Shipment Overview</h1></div>
      <div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <div style={{flex: 1, margin: '0rem 2rem 0rem 2rem'}}>
            <p>Pickup</p>
            <div className={['Pickup', 'Processing', 'Transit', 'Delivered'].includes(disp.status)?'iconCircleComplete':'iconCircleNotComplete' }>
              <FontAwesomeIcon icon={faBox} className={['Pickup', 'Processing', 'Transit', 'Delivered'].includes(disp.status)?'iconComplete':'iconNotComplete' }/>
            </div>
          </div>
          <div style={{flex: 1, margin: '0rem 2rem 0rem 2rem'}}>
            <p>Processing</p>
            <div className={['Processing', 'Transit', 'Delivered'].includes(disp.status)?'iconCircleComplete':'iconCircleNotComplete' }>
              <FontAwesomeIcon icon={faIndustry} className={['Processing', 'Transit', 'Delivered'].includes(disp.status)?'iconComplete':'iconNotComplete' }/>
            </div>
          </div>
          <div style={{flex: 1, margin: '0rem 2rem 0rem 2rem'}}>
            <p>Transit</p>
            <div className={['Transit', 'Delivered'].includes(disp.status)?'iconCircleComplete':'iconCircleNotComplete' }>
              <FontAwesomeIcon icon={faPlane} className={['Transit', 'Delivered'].includes(disp.status)?'iconComplete':'iconNotComplete' }/>
            </div>
          </div>
          <div style={{flex: 1, margin: '0rem 2rem 0rem 2rem'}}>
            <p>Delivered</p>
            <div className={['Delivered'].includes(disp.status)?'iconCircleComplete':'iconCircleNotComplete' }>
              <FontAwesomeIcon icon={faFileCircleCheck } className={['Delivered'].includes(disp.status)?'iconComplete':'iconNotComplete' }/>
            </div>
          </div>
        </div>
        <div style={{margin: '3rem 0rem 0rem 0rem'}}>
          <p>TrackingID: {disp.id}</p>
        </div>
      </div>
      <hr/>
      <div style={{width: '60vw', marginLeft: '2rem'}}><h1>Active Shipments</h1></div>
      <div className="tableBody" id='table'>
        <div id="headerTableRow">
          <div className="tableHeadItem">Tracking ID</div>
          <div className="tableHeadItem">Status</div>
          <div className="tableHeadItem">Location</div>
        </div>
        {
          listItems
        }
      </div>
    </div>
  )
}



export {
  ShipmentTable
}
