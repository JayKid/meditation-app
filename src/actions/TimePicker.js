export const updateTimerValue = (contents) => {
  return {
      type: 'updateTimerValue',
      contents
  };
}
export const startSession = _ => {
  return {
      type: 'startSession'
  };
}

