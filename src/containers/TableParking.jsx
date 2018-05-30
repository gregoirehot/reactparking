import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions, fetchParkings } from '../actions';

import TableComponent from '../composants/TableComponent'

class TableParking extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { parkings: [] };
    // }

    componentDidMount() {
        let localState = localStorage.getItem('persist:root');
        if (!localState) {
            this.props.onFetchParkings();
        }
    }

    updateParking(event, index) {
        this.props.onUpdateParking({
            index,
            conducteur: event.target.value
        });
    }

    render() {
        const { error, loading, parkings } = this.props;
        if (error) {
            return (
                <div>Error! {error.message}
                    <TableComponent parkings={parkings} updateParking={this.updateParking.bind(this)} />
                </div>
            );
        }
        if (loading) {
            return <div>Loading...</div>;
        }
        return (
            <div className="App">
                <TableComponent parkings={parkings} updateParking={this.updateParking.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        parkings: state.parkings,
        loading: state.loading,
        error: state.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchParkings: () => {
            dispatch(fetchParkings())
        },
        onUpdateParking: parking => {
            dispatch(actions.updateParking(parking));
        }
    }
}

const connecter = connect(mapStateToProps, mapDispatchToProps);
TableParking = connecter(TableParking);

export default TableParking;
