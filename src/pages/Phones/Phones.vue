<template>
  <div class="phones">
    <Button
      :text="'Добавить'"
      @click="isVisibleModalAddPhone = true"
    />

    <PhonesTable :data="phonesList"/>

    <ModalAddPhone v-if="isVisibleModalAddPhone"
                   :phonesList="phonesList"
                   :last-phone-id="lastPhoneId"
                   @close="isVisibleModalAddPhone = !isVisibleModalAddPhone"
                   @add-phone="addPhone"
    />
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss" src="./style.scss" scoped></style>
