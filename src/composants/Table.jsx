import React, { Component } from 'react';
import TableRow from './TableRow'
import PropTypes from 'prop-types';

class Table extends Component {
    render() {
        return (
            <div className="App">
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
                        {this.props.parkings.map((p, index) => <TableRow key={index} parking={p} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

Table.propTypes = {
    parkings: PropTypes.array.isRequired
}


export default Table;
