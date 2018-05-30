export const UPDATE_PARKING = 'UPDATE_PARKING';
export const FETCH_PARKINGS_BEGIN = 'FETCH_PARKINGS_BEGIN';
export const FETCH_PARKINGS_SUCCESS = 'FETCH_PARKINGS_SUCCESS';
export const FETCH_PARKINGS_ERROR = 'FETCH_PARKINGS_ERROR';

export const fetchParkingsBegin = () => ({
    type: FETCH_PARKINGS_BEGIN
});

export const fetchParkingsSuccess = parkings => ({
    type: FETCH_PARKINGS_SUCCESS,
    payload: { parkings }
});

export const fetchParkingsError = error => ({
    type: FETCH_PARKINGS_ERROR,
    payload: { error }
});

export function fetchParkings() {
    return dispatch => {
        dispatch(fetchParkingsBegin());
        return fetch("http://localhost:3001/parkings")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchParkingsSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchParkingsError(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const actions = {
    updateParking(parking) {
        return {
            type: UPDATE_PARKING,
            parking
        }
    }
}