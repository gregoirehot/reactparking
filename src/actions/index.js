export const UPDATE_PARKING = 'UPDATE_PARKING';

export const actions = {
    updateParking(parking) {
        return {
            type: UPDATE_PARKING,
            parking
        }
    }
}