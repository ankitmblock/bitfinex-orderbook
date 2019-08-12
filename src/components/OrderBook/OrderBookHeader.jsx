import React from 'react'
import HeaderButton from './HeaderButton';


const OrderBookHeader = () => {
    return (
        <div >
            <div style={{ float: 'left' }}>
                <i class="fa fa-chevron-down" style={{ color: "white", "width": "0.8rem", "opacity": "0.6", "margin-right": "5px" }}></i>
                <span style={{ padding: "0px 8px 0px", color: "white" }}>Order Book</span>
                <span style={{ padding: "0px 0px 0px", color: "#7b7d76" }} >BTC</span>
                <span style={{ color: "#7b7d76" }}>/</span>
                <span style={{ color: "#7b7d76" }}>USD</span>
            </div >
            <div style={{ "display": "flex", "justify-content": "flex-end" }}>
                <HeaderButton title="Decrease Precision">
                    <i class="fa fa-minus"></i>
                </HeaderButton>
                <HeaderButton title="Increase Precision">
                    <i class="fa fa-plus"></i>
                </HeaderButton>
                <HeaderButton title="Manage price alert">
                    <i class="fa fa-bell"></i>
                </HeaderButton>
                <HeaderButton title="Interface setting for order book" >
                    <i class="fa fa-gear"></i>
                </HeaderButton>
                <HeaderButton>
                    <i class="fa fa-search-minus" title="Zoom out book depth visualization"></i>
                </HeaderButton>
                <HeaderButton>
                    <i class="fa fa-search-plus" title="Zoom in book depth visualization"></i>
                </HeaderButton>
            </div>
        </div>
    )
}

export default OrderBookHeader;