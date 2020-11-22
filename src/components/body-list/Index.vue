<template>
  <div class="app-body--list">
    <div
      v-for="(contact,i) in contacts"
      :key="i"
      :class="focused(i)"
    >
      <ContactList
        :contact="contact.contact"
        :is-blocked="contact.isBlocked"
        :has-unread-messages="contact.hasUnreadMessages"
        :status="contact.status"
        :id="i"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ContactList from './contact-list/Index'
export default {
  name: 'ComponentBodyList',
  components: { ContactList },
  props: {
    contacts: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters(['getFocusedConversation'])
  },
  methods: {
    focused (id) {
      if ('Contact '.concat(id) === this.getFocusedConversation) {
        return 'focused'
      }
      return ''
    }
  }
}
</script>
