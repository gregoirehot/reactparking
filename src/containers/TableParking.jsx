import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../actions';

import Table from '../composants/Table'

class TableParking extends Component {
    constructor(props) {
        super(props);
        this.state = { parkings: [] };
    }

    componentDidMount() {
        /*        this.fetchJson().then(p => {
                   if (p) {
                       this.setState({
                           parkings: p
                       })
                   }
               }
               ); */

    }

    fetchJson() {
        return fetch("http://localhost:3001/parkings").then(response =>
            response.json()
        ).catch(e => console.error(e))
    }

    updateParking(event, index) {
        this.props.onUpdateParking({
            index,
            conducteur: event.target.value
        });
    }

    render() {
        return (
            <div className="App">
                <Table parkings={this.props.parkings} updateParking={this.updateParking.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        parkings: state.parkings
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateParking: parking => {
            dispatch(actions.updateParking(parking));
        }
    }
}

const connecter = connect(mapStateToProps, mapDispatchToProps);
TableParking = connecter(TableParking);

export default TableParking;
