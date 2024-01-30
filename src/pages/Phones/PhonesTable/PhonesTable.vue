<template>
  <div class="phones-table">
    <PhonesRow
      :name="'Имя'"
      :phone="'Телефон'"
      :is-header-row="true"
    />
    <PhonesRow
      v-for="item in data"
      :key="item.id"
      :name="item.name"
      :phone="item.phone"
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
  margin-top: 32px;
}
</style>
