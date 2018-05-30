import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
    const { parking, index } = props;
    return (
        <tr>
            <td>{parking.libre ? "Libre" : "Occupé"}</td>
            <td>{parking.title}</td>
            <td>{parking.date}</td>
            <td>
                {/* <TableInput conducteur={parking.conducteur} onChange={this.updateConducteur} /> */}
                <div>
                    <input type="text" value={parking.conducteur}
                        onChange={(event) => props.updateParking(event, index)} />
                    <span></span>
                </div>
            </td>
            <td>{parking.libre ? "Libre" : "Occupé"}</td>
        </tr>
    );
};

TableRow.propTypes = {
    parking: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date),
        conducteur: PropTypes.string,
        libre: PropTypes.bool.isRequired
    }).isRequired
}


export default TableRow;
