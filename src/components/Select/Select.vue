<template>
  <div class="select">
    <div class="select__label">{{ label }}</div>
    <select v-model="selected" @input="onInput">
      <option :value="null"></option>
      <option
        v-for="option in options"
        :key="option.id"
        :value="JSON.stringify(option)"
      >
        {{ option[displayedField] }}
      </option>
    </select>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" scoped>
.select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  select {
    padding: 8px;
    width: 70%;
    border-radius: 8px;
    border: 1px solid black;
  }
}
</style>
