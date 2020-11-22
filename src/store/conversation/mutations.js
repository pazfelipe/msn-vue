export const SET_OPENED_CONVERSATION = (state, payload) => {
  state.opened = payload.map(opened => opened).sort((a, b) => a > b)
}

export const SET_FOCUSED_CONVERSATION = (state, payload) => {
  state.focused = payload
}
