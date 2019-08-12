import React from 'react'
import HeaderButton from './HeaderButton';


const OrderBookFooter = () => {
  return (
    <div style={{ padding: '1px' }}>
      <HeaderButton type="button">
        <i class="fa fa-window-restore bfx-blue"></i>
      </HeaderButton>
      <div style={{ float: 'right' }}>
        <i class="fa fa-circle" style={{ "color": "rgb(157, 194, 74)", "margin-right": "5px" }}></i>
        REAL-TIME
					</div>
      <a href="#" style={{ float: 'right' }} target="_blank">Full Book| &nbsp; </a>
    </div>
  )
}

export default OrderBookFooter;