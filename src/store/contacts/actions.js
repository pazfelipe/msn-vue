
export const updateStatusMessageContact = ({ commit }, payload) => {
  commit('UPDATE_STATUS_MESSAGE_CONTACT', { index: payload.index, update: { ...payload.update } })
}
