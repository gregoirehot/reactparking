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
            <TableInput conducteur={this.props.conducteur} onChange={this.props.onChange} />
        );
    }
}

TableCell.propTypes = {
    conducteur: PropTypes.string,
    onChange: PropTypes.func.isRequired
}


export default TableCell;
