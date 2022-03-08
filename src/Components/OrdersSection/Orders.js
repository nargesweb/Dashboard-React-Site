import React,{useContext} from 'react';
// context 
import { DarkmoodProvider } from '../../Context/DarkmoodContextProvider';
// style 
import {
    OrderContainer,
    OrderH2,
    TableWrap,
}from "./OredersElement"

const Orders = () => {
    const darkmood = useContext(DarkmoodProvider)
    return (
        <OrderContainer darkmood={darkmood}>
            <OrderH2 darkmood={darkmood}>Recent Orders</OrderH2>
            <TableWrap darkmood={darkmood}>
                <table>
                    <thead>
                        <tr>
                            <th>Prouduct Name</th>
                            <th>Prouduct Number</th>
                            <th>Payment</th>
                            <th>status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>85831</td>
                            <td>Due</td>
                            <td>Panding</td>
                            <td>Details</td>
                        </tr>
                        <tr>
                            <td>LARVENDER KF102 Drone</td>
                            <td>36378</td>
                            <td>Refunded</td>
                            <td>Deslined</td>
                            <td>Details</td>
                        </tr>
                        <tr>
                            <td>Ruko Fill Pro Drone</td>
                            <td>49347</td>
                            <td>Due</td>
                            <td>Panding</td>
                            <td>Details</td>
                        </tr>
                        <tr>
                            <td>Drone with Camera Drone</td>
                            <td>96996</td>
                            <td>paid</td>
                            <td>Dilivered</td>
                            <td>Details</td>
                        </tr>
                        <tr>
                            <td>GPS 4k Drone</td>
                            <td>22821</td>
                            <td>paid</td>
                            <td>Dilivered</td>
                            <td>Details</td>
                        </tr>
                        <tr>
                            <td>DJI Air 25</td>
                            <td>81475</td>
                            <td>Due</td>
                            <td>Panding</td>
                            <td>Details</td>
                        </tr>

                    </tbody>
                </table>
            </TableWrap>
        </OrderContainer>
    );
};

export default Orders;