import React from 'react'
import Table from './Table'
import TableHead from './TableHead'
import TableData from './TableData'
import TableRow from './TableRow'
import styled from 'styled-components';

const OrderBookTableWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #1c262e;
`;

const OrderBookTable = ({ bids, asks }) => {
  return (
    <OrderBookTableWrapper>
      <Table>
        <tbody>
          <tr>
            <TableHead>COUNT</TableHead>
            <TableHead>AMOUNT</TableHead>
            <TableHead>TOTAL</TableHead>
            <TableHead>PRICE</TableHead>
          </tr >
          { bids.map(priceLevel =>
              <TableRow>
                <TableData>{priceLevel.count}</TableData>
                <TableData>{priceLevel.amount}</TableData>
                <TableData>{''}</TableData>
                <TableData>{priceLevel.price}</TableData>
              </TableRow >
            )
          }
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
        { asks.map(priceLevel =>
            <TableRow>
              <TableData>{priceLevel.price}</TableData>
              <TableData>{''}</TableData>
              <TableData>{priceLevel.amount}</TableData>
              <TableData>{priceLevel.count}</TableData>
            </TableRow >
          )
        }
      </tbody>
    </Table>
    </OrderBookTableWrapper>
  )
}

export default OrderBookTable;
