<template>
  <div class="contacts-tabs">
    <div
      v-for="tab in tabs"
      :key="tab"
      class="contact-tab noselect"
      :class="[
        focused === tab ? 'focused': '',
        hasUnreadMessages(tab)
      ]"
      @contextmenu.stop.prevent="removeTab(tab)"
      @click="setFocus(tab)"
    >
      {{tab}}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ComponentContainerTabs',
  computed: {
    ...mapGetters(['getOpenedConversations', 'getFocusedConversation',
      'getContacts']),
    tabs () {
      return this.getOpenedConversations
    },
    focused () {
      return this.getFocusedConversation
    },
    contacts () {
      return this.getContacts
    }
  },
  watch: {
    focused (value) {
      this.removeUnreadClass(value)
    }
  },

  methods: {
    ...mapActions(['removeContactFromConversation', 'setFocusedConversation', 'updateStatusMessageContact']),
    removeUnreadClass (index) {
      const tmpId = this.focused.replace('Contact ', '')
      const contact = this.contacts.find(c => c.id === Number(tmpId))
      const contactIndex = this.contacts.findIndex(c => c.id === Number(tmpId))
      if (contact.hasUnreadMessages) {
        delete contact.hasUnreadMessages
        this.updateStatusMessageContact({ index: contactIndex, update: { ...contact } })
      }
    },
    removeTab (id) {
      this.removeContactFromConversation(String(id))
    },
    setFocus (id) {
      this.setFocusedConversation(String(id))
    },
    hasUnreadMessages (tab) {
      const id = Number(tab.replace('Contact ', ''))
      const { hasUnreadMessages } = this.contacts.find(c => c.id === id)
      if (hasUnreadMessages) {
        return 'has-unread-messages'
      }
      return ''
    }
  }
}
</script>
