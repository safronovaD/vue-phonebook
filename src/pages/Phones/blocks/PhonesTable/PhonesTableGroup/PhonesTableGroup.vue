<template>
  <div class="phones-table-group">
    <div class="phones-table-group__row">
      <div
        :class="['phones-table-group__cell', {'phones-table-group__cell--header': isHeaderRow}]"
        :style="{'width': `calc(60% - ${depth * 16}px)`}"
      >
        <img
          v-if="depth > 0"
          src="../../../../../assets/images/icons/close.png" alt="plus"
          class="phones-table-group__icon"
        >
        {{ firstCell }}
      </div>
      <div :class="['phones-table-group__cell', {'phones-table-group__cell--header': isHeaderRow}]">
        {{ secondCell }}
      </div>
    </div>
    <PhonesTableGroup
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
