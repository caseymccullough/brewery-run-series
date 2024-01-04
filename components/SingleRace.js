app.component('single-race', {
  props: {
    race: {
      type: Object,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class = "single-race">
  <img class = "race-logo" v-bind:src="race.logo">
  <div class = "race-info">
    <div class = "race-name"> {{ race.name }} </div>
    <div class = "race-venue"> {{ race.host }} </div>
    <div class = "race-city"> {{ race.city }} </div>
  </div>
  <div class = "race-distance"> {{ race.distance }}K </div>
</div>
`
})