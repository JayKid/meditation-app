const defaultState = { value: "10", session: false, duration: null, preventSleep: false };
export default(state = defaultState, payload) => {
    switch (payload.type) {
        case 'updateTimerValue':
            return Object.assign({}, state, { value: payload.contents });
        case 'sessionStart':
            return Object.assign({}, state, { session: true, duration: state.value });
        case 'sessionEnd':
            return Object.assign({}, state, { session: false, duration: null });
        case 'updatePreventSleepMode':
            return Object.assign({}, state, { preventSleep: payload.contents });
        default:
            return state;
    }
};
