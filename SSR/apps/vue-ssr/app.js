import { createSSRApp } from 'vue'

export function createApp() {
  return createSSRApp({
    data: () => ({
      count: 1,
      fruits: []
    }),
    template: `
      <button @click="count++">click: {{ count }}</button>
      <br>
      <table>
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
    `,
    created() {
      console.log(this)
      if (this.$ssrContext) {
        this.fruits = this.$ssrContext.fruits
      }
    }
    // setup() {
    //   const fruits = ref([])
    //   const ctx = useSSRContext()
    //   fruits.value = ctx.fruits
    //   return {
    //     count: 1,
    //     fruits
    //   }
    // }
  })
}