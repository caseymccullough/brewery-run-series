app.component('races', {
  props: {
    year: {
      type: Number,
      required: true
    }
  },
  template: 
  /*html*/
  `<div class="races">
    <h1>Race Series {{ year }} </h1>
    <div class="races-container">
      <ul>
        <li v-for="(race, index) in races" :key="index">
          <single-race :race= "race"></single-race>
        </li>
      </ul>
    </div>
  </div>`,
  data() {
    return {

        races: [
          { id: 1, name: 'Bit Twisted 5k', logo: './assets/images/bit_twisted_5k.png', distance: 5, host: 'A Bit Twisted Brewpub', city: 'Aurora'},
          { id: 4, name: 'Boos Brews 5k', logo: './assets/images/boos_brews_5k.png', distance: 5, host: 'Number 38', city: 'Denver' },
          { id: 6, name: 'Veterans Day 5k', logo: './assets/images/veterans_day_5k.png', distance: 5, host: 'Goat Patch Brewing', city: 'city' },
          { id: 2, name: 'Too Much Turkey 5k', logo: './assets/images/too_much_turkey_5k.jpg', distance: 5, host: 'host', city: 'city' },
          { id: 3, name: 'Five Alarm 5k', logo: './assets/images/five_alarm_5k.png', distance: 5, host: 'host', city: 'city' },
          { id: 5, name: 'Ugly Sweater 5k', logo: './assets/images/ugly_sweater_5k.png', distance: 5, host: 'host', city: 'city' },

        ],

    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      updateVariant(index) {
          this.selectedVariant = index
      },
      addReview(review) {
        this.reviews.push(review)
      }
  },
  computed: {
      title() {
          return this.brand + ' ' + this.product
      },
      image() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return 2.99
      }
  }
})