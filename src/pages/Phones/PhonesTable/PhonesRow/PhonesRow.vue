<template>
  <div :class="['phones-row', {'phones-row--header': isHeaderRow}]">
    <div class="phones-row__wrapper">
      <div class="phones-row__cell" :style="{'width': `calc(50% - ${depth * 16}px)`}">
        <img
          v-if="depth > 0"
          src="../../../../assets/images/icons/close.png"
          alt="plus"
          class="phones-row__icon"
        >
        {{ name }}
      </div>
      <div class="phones-row__cell">{{ phone }}</div>
    </div>
    <PhonesRow
      v-for="item in children"
      :key="item.id"
      :name="item.name"
      :phone="item.phone"
      :depth="depth + 1"
      :children="item.children"
    />
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" src="./style.scss" scoped></style>
