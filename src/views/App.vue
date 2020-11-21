<template>
  <div class="app">
    <div class="app-menu"></div>
    <div class="app-body">
      <div class="app-body--list"></div>
      <div class="app-body--msg-container">
        <button @click="play('/assets/sounds/msn.mp3')">Play Message </button>
        <button @click="play('/assets/sounds/msn_nudge.mp3')">Play Nudge </button>
        <button @click="play('/assets/sounds/msn_outgoing_ctone.mp3')">Play Outgoing </button>
        <button @click="play('/assets/sounds/msn_contact_on.mp3')">Play Contact On </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewApp',
  data() {
    return {
      sound: null
    }
  },
  methods: {
    play(sound) {
      this.sound = new Audio(sound)
      this.sound.play()
    }
  }
}
</script>