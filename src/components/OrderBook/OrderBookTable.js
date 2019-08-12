import React from 'react'
import Table from './Table'
import TableHead from './TableHead'
import TableData from './TableData'
import TableRow from './TableRow'

let rateList = [{ count: 1, amount: 20, total: 50, price: 60 }, { count: 1, amount: 20, total: 50, price: 60 }, { count: 1, amount: 20, total: 50, price: 60 }, { count: 1, amount: 20, total: 50, price: 60 }, { count: 1, amount: 20, total: 50, price: 60 }, { count: 1, amount: 20, total: 50, price: 60 }, { count: 1, amount: 20, total: 50, price: 60 }, { count: 1, amount: 20, total: 50, price: 60 }, { count: 1, amount: 20, total: 50, price: 60 }, { count: 1, amount: 20, total: 50, price: 60 }, { count: 1, amount: 20, total: 50, price: 60 }, { count: 1, amount: 20, total: 50, price: 60 }]

const OrderBookTable = () => {
    return (
        <div >
            <Table>
                <tbody>
                    <tr>
                        <TableHead>COUNT</TableHead>
                        <TableHead>AMOUNT</TableHead>
                        <TableHead>TOTAL</TableHead>
                        <TableHead>PRICE</TableHead>
                    </tr >
                    {rateList.map(rate =>
                        <TableRow>
                            <TableData>{rate.count}</TableData>
                            <TableData>{rate.amount}</TableData>
                            <TableData>{rate.total}</TableData>
                            <TableData>{rate.price}</TableData>
                        </TableRow >
                    )}
                </tbody>
            </Table>

            <Table>
                <tbody>
                    <tr>
                        <TableHead>PRICE</TableHead>
                        <TableHead>TOTAL</TableHead>
                        <TableHead>AMOUNT</TableHead>
                        <TableHead>COUNT</TableHead>
                    </tr >
                    {rateList.map(rate =>
                        <TableRow>
                            <TableData>{rate.price}</TableData>
                            <TableData>{rate.total}</TableData>
                            <TableData>{rate.amount}</TableData>
                            <TableData>{rate.count}</TableData>
                        </TableRow >
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default OrderBookTable;
