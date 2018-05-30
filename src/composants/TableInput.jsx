import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableInput extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.conducteur !== this.props.conducteur) {
            
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.conducteur}
                    onChange={(event) => this.props.onChange(event.target.value)} />
                <span></span>
            </div>
        );
    }
}

TableInput.propTypes = {
    conducteur: PropTypes.string,
    onChange: PropTypes.func.isRequired
}


export default TableInput;
