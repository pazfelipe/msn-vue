<template>
  <div class="app">
    <div class="app-menu"></div>
    <div class="app-body">
      <BodyList/>
      <div class="app-body--msg-container">
        <div class="container">
          <TabContainer />
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
import { mapGetters } from 'vuex'
import BodyList from '@/components/body-list/Index'
import TabContainer from '@/components/tab-container/Index'
export default {
  name: 'ViewApp',
  components: { BodyList, TabContainer },
  data () {
    return {
      sound: null
    }
  },
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
  }
}
</script>
