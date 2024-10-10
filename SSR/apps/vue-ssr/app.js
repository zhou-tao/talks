import { createSSRApp } from 'vue'

export function createApp(context) {
  return createSSRApp({
    data: () => ({
      count: 1,
      fruits: []
    }),
    template: `
      <div>
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
      </div>
    `,
    created() {
      this.fruits = context.fruits
    }
  })
}