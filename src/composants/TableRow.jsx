import React, { Component } from 'react';
import TableInput from './TableInput'
import PropTypes from 'prop-types';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = { parking: props.parking };
        this.updateConducteur = this.updateConducteur.bind(this);
    }


    updateConducteur(conducteur) {

        if (conducteur) {
            this.setState({
                parking: {
                    ...this.state.parking,
                    conducteur
                }
            })
        }
    }

    render() {
        const { parking } = this.state;
        return (
            <tr>
                <td>{parking.libre ? "Libre" : "Occupé"}</td>
                <td>{parking.title}</td>
                <td>{parking.date}</td>
                <td><TableInput conducteur={parking.conducteur} onChange={this.updateConducteur} /></td>
                <td>{parking.libre ? "Libre" : "Occupé"}</td>
            </tr>
        );
    }
}

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
