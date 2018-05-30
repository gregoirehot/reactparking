import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableInput from './TableInput';

class TableCell extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.conducteur !== this.props.conducteur) {

        }
    }

    render() {
        return (
            <div>test
            <TableInput conducteur={this.props.conducteur} onChange={this.props.onChange} />
            </div>
        );
    }
}

TableCell.propTypes = {
    conducteur: PropTypes.string,
    onChange: PropTypes.func.isRequired
}


export default TableCell;
