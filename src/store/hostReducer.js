const initialState = {
    appName: 'host',
};
export default {
    name: 'host',
    state: { ...initialState },
    reducers: {
        setAppName: (state, appName) => ({ ...state, appName }),
    },
};