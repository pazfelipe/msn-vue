import state from './state'
import _ from 'lodash'

export const setOpenedConversation = ({ commit }, payload) => {
  const conversations = _.cloneDeep(state.opened)
  const conversation = 'Contact '.concat(payload)

  if (!conversations.some(conver => conver === conversation)) {
    conversations.push(conversation)
    commit('SET_OPENED_CONVERSATION', conversations)
    commit('SET_FOCUSED_CONVERSATION', conversation)
  } else {
    commit('SET_FOCUSED_CONVERSATION', conversation)
  }
}

export const removeContactFromConversation = ({ commit }, payload) => {
  const conversations = _.cloneDeep(state.opened)

  if (conversations.find(conver => conver === payload)) {
    const updated = conversations.filter(conver => conver !== payload)
    commit('SET_OPENED_CONVERSATION', updated)
  }
}

export const setFocusedConversation = ({ commit }, payload) => {
  commit('SET_FOCUSED_CONVERSATION', payload)
}
