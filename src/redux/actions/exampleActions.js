export const exampleActions = {
  startTesting: () => {
    return dispatch => {
      dispatch({
        type: 'START_TEST',
      });
    };
  },
  stopTesting: () => {
    return dispatch => {
      dispatch({
        type: 'STOP_TEST',
      });
    };
  },
};
