<template>
  <div class="panel panel-default">
    <div class="panel-heading">Color Transition</div>
    <div class="panel-body">
        <input
          v-model="colorQuery"
          v-on:keyup.enter="updateColor"
          placeholder="Enter a color"
        >
        <button v-on:click="updateColor">Update</button>
        <p>Preview:</p>
        <span
          v-bind:style="{ backgroundColor: tweenedCSSColor }"
          class="example-7-color-preview"
        ></span>
        <p>{{ tweenedCSSColor }}</p>
    </div>
  </div>
  
</template>
<script>
import TWEEN from 'tween.js'
import Color from 'color-js'
// var Color = net.brehaut.Color
export default{
  data(){
    return {
      colorQuery: '',
      color: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1
      },
      tweenedColor: {}
    }
  },
  created(){
    this.tweenedColor = Object.assign({}, this.color)
  },
  watch: {
    color: function () {
      function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween(this.tweenedColor)
        .to(this.color, 750)
        .start()
      animate()
    }
  },
  computed: {
    tweenedCSSColor: function () {
      return new Color({
        red: this.tweenedColor.red,
        green: this.tweenedColor.green,
        blue: this.tweenedColor.blue,
        alpha: this.tweenedColor.alpha
      }).toCSS()
    }
  },
  methods: {
    updateColor: function () {
      this.color = new Color(this.colorQuery).toRGB()
      this.colorQuery = ''
    }
  }
}
</script>
<style scoped>
.example-7-color-preview {
  display: inline-block;
  width: 50px;
  height: 50px;
}
</style>