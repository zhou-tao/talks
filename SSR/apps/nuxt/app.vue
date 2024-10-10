<template>
  <div>
    <h1>Hello Nuxt!</h1>
    <button @click="count++">click: {{ count }}</button>
    <br>
    <table v-if="!pending">
      <thead>
        <tr>
          <th>name</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fruit in fruits" :key="fruit.name">
          <td>{{ fruit.name }}</td>
          <td>{{ fruit.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>

const count = ref(0)

const API_URL = 'http://localhost:8080/fruits'

/* 此调用在水合之前执行 */
// const { pending, data: fruits } = await useFetch(API_URL)

/* 此调用仅在客户端执行 */
const { pending, data: fruits } = useFetch(API_URL, {
  server: false
})

</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  padding: 6px 12px;
  font-size: 1rem;
}

table {
  margin-top: 24px;
  border-collapse: collapse;
  font-size: 1rem;
}

table th,td {
  border: solid 1px #ede;
  padding: 6px 12px;
  text-align: center;
}
</style>
