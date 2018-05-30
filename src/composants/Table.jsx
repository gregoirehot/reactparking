import React from 'react';
import TableRow from './TableRow'
import PropTypes from 'prop-types';

const Table = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Etat</th>
                        <th>Place #</th>
                        <th>Date</th>
                        <th>Conducteur</th>
                        <th>Changer l'état</th>
                    </tr>
                </thead>
                <tbody>
                    {props.parkings.map((p, index) =>
                        <TableRow
                            key={index}
                            index={index}
                            parking={p}
                            updateParking={props.updateParking}
                        />)}
                </tbody>
            </table>
        </div>
    );
}

Table.propTypes = {
    parkings: PropTypes.array.isRequired
}


export default Table;
