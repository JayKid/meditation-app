const defaultState = { value: "10" };
export default(state = defaultState, payload) => {
    switch (payload.type) {
        case 'updateTimerValue':
            return Object.assign({}, state, { value: payload.contents });
        default:
            return state;
    }
};
