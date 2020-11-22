<template>
  <div class="app-body--list-contact">
    <div
      class="contact"
      :class="[
        isBlocked ? 'blocked' : '',
        hasUnreadMessages ? 'unread-messages' : ''
      ]"
      @click="openFocusConversation"
      ref="rowContact"
    >
      <span
        class="status"
        :class="[status]"
      ></span>
      <span class="contact-name">{{contact}}</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ComponentContactList',
  props: {
    contact: { type: String, default: null },
    status: { type: String, default: 'offline' },
    isBlocked: { type: Boolean, default: false },
    hasUnreadMessages: { type: Boolean, default: false },
    id: { type: Number, default: null }
  },
  methods: {
    ...mapActions(['setOpenedConversation']),
    openFocusConversation () {
      this.setOpenedConversation(String(this.id))
      this.$refs.rowContact.classList.remove('unread-messages')
    }
  }
}
</script>
