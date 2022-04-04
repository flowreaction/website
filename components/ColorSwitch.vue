<template>
  <canvas
    @click="handleClick"
    ref="canvas"
    :width="computedWidth"
    :height="computedHeight"
  ></canvas>
</template>

<script>
import { Rive, Layout } from '@rive-app/webgl'
import { useColorMode } from '@vueuse/core'

export default {
  name: 'Rive',
  props: {
    src: {
      type: String,
      default:
        'https://public.rive.app/community/runtime-files/2386-4793-light-to-dark-mode-switch.riv',
    },
    fit: {
      type: String,
      default: 'fill',
    },
    alignment: {
      type: String,
      default: 'TopLeft',
    },
  },
  emits: ['modeswitch'],
  data() {
    return {
      riveInstance: null,
      computedWidth: 0,
      computedHeight: 0,
    }
  },

  methods: {
    handleClick() {
      this.riveInput.value = !this.riveInput.value
      this.$emit('modeswitch', this.riveInput.value)
      this.mode = this.riveInput.value ? 'dark' : 'light'
      // console.log(this.riveInput.value);
    },
    newRive() {
      const riveInstance = new Rive({
        canvas: this.$refs.canvas,
        src: this.$props.src,
        layout: new Layout({
          fit: this.$props.fit,
          alignment: this.$props.alignment,
        }),
        autoplay: true,
        stateMachines: 'default',
        onLoad: (_) => {
          const inputs = riveInstance.stateMachineInputs('default')

          this.riveInput = inputs.find((i) => i.name === 'input')
          this.riveInput.value = this.mode === 'dark' ? true : false
        },
      })
    },
  },
  setup() {
    const mode = useColorMode()
    const riveInput = null

    return {
      mode,
      riveInput,
    }
  },
  mounted() {
    console.log(window.getComputedStyle(this.$refs.canvas).height)
    this.computedWidth =
      parseInt(window.getComputedStyle(this.$refs.canvas).width) * 2
    this.computedHeight = this.computedWidth / 2
    this.newRive()
  },
  updated() {
    this.newRive()
  },
}
</script>
