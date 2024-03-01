<template>
  <div :class="['phones-row', {'phones-row--header': isHeaderRow}]">
    <div class="phones-row__wrapper">
      <div
        :class="['phones-row__cell', {'phones-row__cell--big': isHeaderRow}]"
        :style="{'width': `calc(60% - ${depth * 16}px)`}"
      >
        <img
          v-if="depth > 0"
          src="../../../../../assets/images/icons/close.png" alt="plus"
          class="phones-row__icon"
        >
        {{ firstCell }}
      </div>
      <div :class="['phones-row__cell', {'phones-row__cell--big': isHeaderRow}]">
        {{ secondCell }}
      </div>
    </div>
    <PhonesRow
      v-for="item in children"
      :key="item.id"
      :first-cell="item.name"
      :second-cell="item.phone"
      :depth="depth + 1"
      :children="item.children"
    />
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped></style>
