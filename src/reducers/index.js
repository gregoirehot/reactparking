import { UPDATE_PARKING, FETCH_PARKINGS_BEGIN, FETCH_PARKINGS_ERROR, FETCH_PARKINGS_SUCCESS } from '../actions';
import { REHYDRATE } from 'redux-persist';

const initialState = {
    parkings: [
        {
            "id": 1,
            "title": "13",
            "libre": true,
            "conducteur": "Alexandre Cliquennois",
            "images": [
                {
                    "id": 1,
                    "label": "Image 1",
                    "source": "assets/img/place13.jpg",
                    "description": "",
                    "visible": true
                }
            ],
            "visible": true,
            "reserve": true
        },
        {
            "id": 2,
            "title": "14",
            "libre": true,
            "conducteur": "Frédéric Dumont",
            "images": [
                {
                    "id": 1,
                    "label": "Image 1",
                    "source": "assets/img/place14.jpg",
                    "description": "",
                    "visible": true
                }
            ],
            "visible": true,
            "reserve": true
        },
        {
            "id": 3,
            "title": "14 Moto A",
            "libre": true,
            "conducteur": "",
            "images": [
                {
                    "id": 1,
                    "label": "Image 1",
                    "source": "assets/img/place14moto.jpg",
                    "description": "",
                    "visible": true
                }
            ],
            "visible": true
        },
        {
            "id": 4,
            "title": "14 Moto B",
            "libre": true,
            "conducteur": "",
            "images": [
                {
                    "id": 1,
                    "label": "Image 1",
                    "source": "assets/img/place14moto.jpg",
                    "description": "",
                    "visible": true
                }
            ],
            "visible": true
        },
        {
            "id": 5,
            "title": "14 Moto C",
            "libre": true,
            "conducteur": "",
            "images": [
                {
                    "id": 1,
                    "label": "Image 1",
                    "source": "assets/img/place14moto.jpg",
                    "description": "",
                    "visible": true
                }
            ],
            "visible": true
        },
        {
            "id": 6,
            "title": "15",
            "libre": true,
            "conducteur": "",
            "images": [
                {
                    "id": 1,
                    "label": "Image 1",
                    "source": "assets/img/place15.jpg",
                    "description": "",
                    "visible": true
                }
            ],
            "visible": true
        },
        {
            "id": 7,
            "title": "16",
            "libre": true,
            "conducteur": "",
            "images": [
                {
                    "id": 1,
                    "label": "Image 1",
                    "source": "assets/img/place16.jpg",
                    "description": "",
                    "visible": true
                }
            ],
            "visible": true
        },
        {
            "id": 8,
            "title": "17",
            "libre": true,
            "conducteur": "",
            "images": [
                {
                    "id": 1,
                    "label": "Image 1",
                    "source": "assets/img/place17.jpg",
                    "description": "",
                    "visible": true
                }
            ],
            "visible": true
        },
        {
            "id": 9,
            "title": "18",
            "libre": true,
            "conducteur": "Laurent Louchez",
            "images": [
                {
                    "id": 1,
                    "label": "Image 1",
                    "source": "assets/img/place18.jpg",
                    "description": "",
                    "visible": true
                }
            ],
            "visible": true,
            "reserve": true
        },
        {
            "id": 10,
            "title": "19",
            "libre": true,
            "conducteur": "",
            "images": [
                {
                    "id": 1,
                    "label": "Image 1",
                    "source": "assets/img/place19.jpg",
                    "description": "",
                    "visible": true
                }
            ],
            "visible": true
        },
        {
            "id": 11,
            "title": "20",
            "libre": true,
            "conducteur": "",
            "images": [
                {
                    "id": 1,
                    "label": "Image 1",
                    "source": "assets/img/place20.jpg",
                    "description": "",
                    "visible": true
                }
            ],
            "visible": true
        },
        {
            "id": 12,
            "title": "21",
            "libre": true,
            "conducteur": "Julien Dirson",
            "images": [
                {
                    "id": 1,
                    "label": "Image 1",
                    "source": "assets/img/place21.jpg",
                    "description": "",
                    "visible": true
                }
            ],
            "visible": true,
            "reserve": true
        },
        {
            "id": 13,
            "title": "22",
            "libre": true,
            "conducteur": "Clément Grenez",
            "images": [
                {
                    "id": 1,
                    "label": "Image 1",
                    "source": "assets/img/place22.jpg",
                    "description": "",
                    "visible": true
                }
            ],
            "visible": true,
            "reserve": true
        }
    ],
    loading: false,
    error: null
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case REHYDRATE:
            return {
                ...state,
                parkings: action.payload.parkings
            };
        case FETCH_PARKINGS_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_PARKINGS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                parkings: action.payload.parkings
            };

        case FETCH_PARKINGS_ERROR:
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the items
            // around! Do whatever seems right.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        case UPDATE_PARKING: {
            const parkings = [...state.parkings];
            parkings[action.parking.index] = {
                ...parkings[action.parking.index],
                conducteur: action.parking.conducteur
            };
            return {
                ...state,
                parkings
            };
        };
        default:
            return state;
    }
};