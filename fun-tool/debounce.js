// [mixins]
export default {
  data() {
    return {
      DebounceST: null,
      DebounceOver: false
    }
  },
  methods: {
    Debounce(cb, time = 500) {
      if (!this.DebounceOver) { clearInterval(this.DebounceST) }
      this.DebounceOver = false
      this.DebounceST = setInterval(() => {
        cb()
        clearInterval(this.DebounceST)
        this.DebounceOver = true
      }, time)
    },
  }
}