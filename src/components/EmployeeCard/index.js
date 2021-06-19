import React from "react";

function EmployeeCard(props){
    return(
        <thread>
            <tr>
                <th>
                    <img alt={props.firstName} src={props.picutre} />
                </th>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
                <td>{props.city}</td>
            </tr>
        </thread>
    );
}

export default EmployeeCard;