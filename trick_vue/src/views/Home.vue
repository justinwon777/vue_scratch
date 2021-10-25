<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <h3 class="text-center" style="font-weight: bold">Combo Generator</h3>
            <p class="bg-light">
                First time? Check out the
                <router-link to="/guide" style="text-decoration: none">guide</router-link>
            </p>
            <h4>Trick Sets</h4>
            <form id="trickset" @change="enableCustom">
                <input class="form-check-input" type="radio" name="set_name" value="all" v-model="trickset"> All Tricks <br>
                <input class="form-check-input" type="radio" name="set_name" value="lk_funds" v-model="trickset"> Loopkicks Top 10 Fundamental Tricks <br>
                <input class="form-check-input" type="radio" name="set_name" value="vert" v-model="trickset"> Vertical Kicks <br>
                <input class="form-check-input" type="radio" name="set_name" value="common" checked v-model="trickset"> Common <br>
                <input class="form-check-input" type="radio" name="set_name" value="challenge" v-model="trickset"> Challenge <br>
                <input class="form-check-input" type="radio" name="set_name" value="custom" v-model="trickset"> Custom Set
            </form>
            <button class="btn btn-regular" :disabled="pick_disabled" type="button" id="pick_tricks" @click="showCustom">
                Pick Tricks
            </button>
            <h4 class="mt-3">Stances</h4>
            <form id="stanceset">
                <input class="form-check-input" type="checkbox" name="stance" value="complete" id="complete" checked v-model="stanceset"> Complete <br>
                <input class="form-check-input" type="checkbox" name="stance" value="hyper" id="hyper" v-model="stanceset"> Hyper <br>
                <input class="form-check-input" type="checkbox" name="stance" value="mega" id="mega" v-model="stanceset"> Mega <br>
                <input class="form-check-input" type="checkbox" name="stance" value="semi" id="semi" v-model="stanceset"> Semi
            </form>
            <h4 class="mt-3">Transitions</h4>
            <form id="transitionset">
                <input class="form-check-input" type="checkbox" name="transition" value="punch" id="punch" checked v-model="transitionset"> Punch
                <input class="form-check-input" type="checkbox" name="transition" value="pop" id="pop" checked v-model="transitionset"> Pop
                <input class="form-check-input" type="checkbox" name="transition" value="backside" id="backside" checked v-model="transitionset"> Backside
                <input class="form-check-input" type="checkbox" name="transition" value="vanish" id="vanish" checked v-model="transitionset"> Vanish
                <input class="form-check-input" type="checkbox" name="transition" value="redirect" id="redirect" checked v-model="transitionset"> Redirect
                <input class="form-check-input" type="checkbox" name="transition" value="reversal" id="reversal" checked v-model="transitionset"> Reversal
                <input class="form-check-input" type="checkbox" name="transition" value="swing" id="swing" checked v-model="transitionset"> Swing
                <input class="form-check-input" type="checkbox" name="transition" value="wrap" id="wrap" checked v-model="transitionset"> Wrap
                <input class="form-check-input" type="checkbox" name="transition" value="frontswing" id="frontswing" checked v-model="transitionset"> Frontswing
                <input class="form-check-input" type="checkbox" name="transition" value="missleg" id="missleg" checked v-model="transitionset"> Missleg
            </form>
            <h4 class="mt-3">Combo Length</h4>
            <select class="form-select" id="length" style="width: 70px;" v-model="length">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5" selected>5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <div class="mt-3">
                <h4 class="mt-3" style="display: inline; vertical-align: middle;">More Options</h4><br>
                <p style="display: inline;" class="text-secondary">Starting and finishing trick cannot be combined</p>
            </div>
            <button class="btn btn-regular me-2" type="button" id="start">
                Starting Trick
            </button>
            <button class="btn btn-regular me-2" type="button" id="finish">
                Finishing Trick
            </button>
            <select class="form-select" id="spin_limit" style="width: 125px; display: inline-block" v-model="spinLimit">
                <option value="none">Spin Limit</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
      </div>
    </div>
  </div>
  <div class="container text-center mt-3">
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-regular btn-lg mt-2 me-2" id="generate" @click="generate">Generate Combo</button>
        <button type="button" class="btn btn-regular btn-lg mt-2" id="load_combo">Load Saved Combo</button>
        <br><br>
        <button type="button" class="btn btn-secondary me-2" id="copy" onclick="copyCombo('#combo')" title="Copied">Copy Combo</button>
        <button type="button" class="btn btn-secondary" id="save" >Save Combo</button>
        <br>
        <button type="button" class="btn btn-regular mt-3" id="regenerate" style="width: fit-content;">Regenerate Selected Parts</button>
      </div>
    </div>
  </div>
  <div class="container mt-2 bg-light">
    <div class="row">
        <div class="col">
            <h5>Check these tricktionaries to learn about a particular trick and see examples</h5>
            <ul>
                <li><a href="https://www.loopkickstricking.com/tricktionary" target="_blank" rel="noopener">loopkickstricking.com/tricktionary</a></li>
                <li><a href="http://www.club540.com/tricktionary" target="_blank" rel="noopener">club540.com/tricktionary</a></li>
            </ul>
        </div>
    </div>
  </div>
  <div class="modal fade" id="start_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <CustomSet />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSet from '../components/CustomSet.vue'

export default {
  components: {
    CustomSet
  },
  data() {
    return {
      trickset: 'common',
      stanceset: ['complete'],
      transitionset: ['punch', 'pop', 'backside', 'vanish', 'redirect', 'reversal', 'swing', 'wrap', 'frontswing', 'missleg'],
      length: '5',
      spinLimit: 'none',
      pick_disabled: 'true'
    }
  },
  methods: {
    generate() {
      let inputs = {
        'trickset': this.trickset,
        'stances': this.stanceset,
        'transitions': this.transitionset,
        'length': this.length,
        'spin limit': this.spinLimit
      }
      console.log(inputs)
    },
    enableCustom() {
      var pick = document.getElementById('pick_tricks')
      if (this.trickset == 'custom') {
        this.pick_disabled = false
      }
      else {
        this.pick_disabled = true
      }
    },
    showCustom() {
      var myModal = new bootstrap.Modal(document.getElementById('start_modal'), {
        keyboard: false
      })
      myModal.show()
    }
  }
}
</script>

<style scoped>
  h4 {
    font-weight: bold;
}
</style>