<template>
  <div class="app-body--list">
    <div
      v-for="(contact,i) in contacts"
      :key="i"
      :class="focusedClass(i)"
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
import { mapGetters, mapActions } from 'vuex'
import ContactList from './contact-list/Index'
export default {
  name: 'ComponentBodyList',
  components: { ContactList },
  computed: {
    ...mapGetters(['getFocusedConversation', 'getContacts']),
    contacts () {
      return this.getContacts
    },
    focused () {
      return this.getFocusedConversation
    }
  },
  mounted () {
    setInterval(() => {
      const tmpId = Number(this.focused.replace('Contact ', ''))
      if (tmpId !== this.contacts[0].id) {
        this.updateStatusMessageContact({
          index: 0,
          update: { ...this.contacts[0], hasUnreadMessages: true }
        })
        // this.play('/assets/sounds/msn.mp3')
      }
    }, 5000)
  },
  methods: {
    ...mapActions(['updateStatusMessageContact']),
    focusedClass (id) {
      if ('Contact '.concat(id) === this.focused) {
        return 'focused'
      }
      return ''
    },
    play (sound) {
      this.sound = new Audio(sound)
      this.sound.play()
    }
  }
}
</script>
