<template>
  <div class="phones container">
    <h1>Телефонная книга</h1>
    <PhonesTable :data="phonesList"/>
    <Button
      :text="'Добавить'"
      @click="isVisibleModalAddPhone = true"
    />
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
