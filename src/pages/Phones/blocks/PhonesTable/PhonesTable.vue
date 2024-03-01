<template>
  <div class="phones-table">
    <PhonesRow
      :first-cell="'Имя'"
      :second-cell="'Телефон'"
      :is-header-row="true"
    />
    <PhonesRow
      v-for="item in data"
      :key="item.id"
      :first-cell="item.name"
      :second-cell="item.phone"
      :children="item.children"
    />
</div>
</template>

<script>
import PhonesRow from "./PhonesRow/PhonesRow";

export default {
  name: "PhonesTable",
  components: {
    PhonesRow
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.phones-table {
  max-width: 700px;
  margin: 32px 0;

  @media (max-width: 480px) {
    margin: 24px 0;
  }
}
</style>
