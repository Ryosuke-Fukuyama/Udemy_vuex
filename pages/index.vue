<template>
  <section class="container">
    <!-- <div> --><!-- クラシックモード -->
      <!-- <p>{{ $store.state.message }}</p> -->
      <!-- mutationから受け取る時 -->
      <!-- <button @click="$store.commit('updateMessage')">Update!</button> -->
      <!-- mutationへ値を渡す時 -->
      <!-- <button @click="$store.commit('updateMessage', 'Commit with payload')">Update!</button> -->
      <!-- actionsを介してmutationを呼び出す -->
      <!-- <button @click="$store.dispatch('updateMessageAction')">Dispatch!</button> -->
    <!-- </div> -->

    <div><!-- モジュールモード -->
      <p>{{ $store.state.hello.message }}</p>
      <button @click="$store.dispatch('hello/updateMessageAction')">Dispatch!</button>
    </div>
  </section>
</template>

<script>

export default {

}
</script>
