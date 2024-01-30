<template>
<button @click="$emit('click')" :disabled="disabled">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  padding: 8px 16px;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #e8fcd0;
    transition: all 0.2s linear;
  }
}
</style>
