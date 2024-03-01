export default {
  name: "PhonesTableGroup",
  props: {
    firstCell: {
      type: String,
      required: true
    },
    secondCell: {
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
