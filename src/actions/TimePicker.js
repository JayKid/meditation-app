export const updateTimerValue = (contents) => {
  return {
      type: 'updateTimerValue',
      contents
  };
}
export const startSession = _ => {
  return {
      type: 'sessionStart'
  };
}
export const setPreventSleepMode = (on) => {
  return {
      type: 'updatePreventSleepMode',
      contents: on
  };
}