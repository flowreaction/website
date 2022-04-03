<template>
  <canvas
    @click="handleClick"
    ref="canvas"
    :height="width / 2"
    :width="width"
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
        'https://public.rive.app/community/runtime-files/2386-4790-light-to-dark-mode-switch.riv',
    },
    fit: {
      type: String,
      default: 'fitWidth',
    },
    alignment: {
      type: String,
      default: 'TopLeft',
    },
    size: {
      type: String,
      default: 's',
      validator(value) {
        return ['xs', 's', 'm', 'l', 'xl', '2xl'].includes(value)
      },
    },
  },
  emits: ['modeswitch'],
  data() {
    return {
      riveInstance: null,
      // riveInput: {},
    }
  },
  computed: {
    width() {
      return this.size === 'xs'
        ? 20
        : this.size === 's'
        ? 40
        : this.size === 'm'
        ? 60
        : this.size === 'l'
        ? 80
        : this.size === 'xl'
        ? 100
        : this.size === '2xl'
        ? 120
        : 0
    },
  },
  watch: {
    input: function (newVal) {
      this.riveInput.value.value = newVal
    },
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
          // alignment: this.$props.alignment,
          // minX: 0,
          // minY: 0,
          // maxX: 100,
          // maxY: 100,
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
    this.newRive()
  },
  updated() {
    this.newRive()
  },
}
</script>
