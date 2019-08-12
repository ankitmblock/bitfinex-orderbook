import React from 'react'
import OrderBookTable from './OrderBookTable'
import OrderBookFooter from './OrderBookFooter'
import OrderBookHeader from './OrderBookHeader';

const OrderBook = () => {
	return (
		<div style={{ 'background-color': '#1c262e' }}>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
			<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
			<OrderBookHeader />
			<div style={{ border: "0.5px solid gray" }}></div>
			<OrderBookTable/>
			<OrderBookFooter />
		</div>

	);
}


export default OrderBook;