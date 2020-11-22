<template>
  <div class="app">
    <div class="app-menu"></div>
    <div class="app-body">
      <BodyList :contacts="contacts" />
      <div class="app-body--msg-container">
        <div class="container">
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
          <div class="history-messages">
            <div class="history-messages--container">
              <div class="container">
                <p
                  v-for="i in 50"
                  :key="i"
                >Mensagem {{i}}</p>
              </div>
            </div>
          </div>
          <div class="user-block"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- <button @click="play('/assets/sounds/msn.mp3')">Play Message </button>
  <button @click="play('/assets/sounds/msn_nudge.mp3')">Play Nudge </button>
  <button @click="play('/assets/sounds/msn_outgoing_ctone.mp3')">Play Outgoing </button>
  <button @click="play('/assets/sounds/msn_contact_on.mp3')">Play Contact On </button> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BodyList from '@/components/body-list/Index'
export default {
  name: 'ViewApp',
  components: { BodyList },
  data () {
    return {
      sound: null,
      contacts: [
        {
          contact: 'João da Silva',
          id: 0,
          status: 'busy',
          isBlocked: false,
          hasUnreadMessages: true
        },
        {
          contact: 'Carlos Junior',
          id: 1,
          status: 'busy',
          isBlocked: false
        },
        {
          contact: 'Mirian Bruna',
          id: 2,
          status: 'online',
          isBlocked: false
        },
        {
          contact: 'Cintia Carla',
          id: 3,
          status: 'away',
          isBlocked: false,
          hasUnreadMessages: true
        },
        {
          contact: 'José Santos',
          id: 4,
          status: 'offline',
          isBlocked: true
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getOpenedConversations', 'getFocusedConversation']),
    tabs () {
      return this.getOpenedConversations
    },
    focused () {
      return this.getFocusedConversation
    }
  },
  watch: {
    focused (value) {
      this.removeUnreadClass(value)
    }
  },
  mounted () {
    setInterval(() => {
      const tmpId = Number(this.focused.replace('Contact ', ''))
      if (tmpId !== this.contacts[0].id) {
        this.contacts[0].hasUnreadMessages = true
        // this.play('/assets/sounds/msn.mp3')
      }
    }, 15000)
  },
  methods: {
    ...mapActions(['removeContactFromConversation', 'setFocusedConversation']),
    play (sound) {
      this.sound = new Audio(sound)
      this.sound.play()
    },
    removeUnreadClass (index) {
      const tmpId = this.focused.replace('Contact ', '')
      const contact = this.contacts.find(c => c.id === Number(tmpId))
      const contactIndex = this.contacts.findIndex(c => c.id === Number(tmpId))
      if (contact.hasUnreadMessages) {
        delete contact.hasUnreadMessages

        this.contacts[contactIndex] = { ...contact }
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
