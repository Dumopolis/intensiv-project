export function reducer(state, { type, payload }) {
    switch (type) {
        case 'SET_TELEGRAM_SHARE_STATUS':
            return{
                ...state,
                isTelegramShareEnabled: payload.status,
            };
        default:
            return state;
    }

}