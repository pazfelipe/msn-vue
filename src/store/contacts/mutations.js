export const UPDATE_STATUS_MESSAGE_CONTACT = (state, payload) => {
  state.contacts[payload.index] = { ...payload.update }
}
