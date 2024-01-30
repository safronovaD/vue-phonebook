export default {
  name: "PhonesRow",
  props: {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    isHeaderRow: {
      type: Boolean,
      default: false
    },
    children: {
      type: Array,
      default: () => []
    },
    depth: {
      type: Number,
      default: 0
    }
  }
}
