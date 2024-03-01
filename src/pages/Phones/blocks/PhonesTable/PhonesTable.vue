<template>
  <div class="phones-table">
    <PhonesTableGroup
      :first-cell="'Имя'"
      :second-cell="'Телефон'"
      :is-header-row="true"
    />
    <PhonesTableGroup
      v-for="item in data"
      :key="item.id"
      :first-cell="item.name"
      :second-cell="item.phone"
      :children="item.children"
    />
</div>
</template>

<script>
import PhonesTableGroup from "./PhonesTableGroup/PhonesTableGroup";

export default {
  name: "PhonesTable",
  components: {
    PhonesTableGroup
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
}
</style>
