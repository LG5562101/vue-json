import { createApp } from 'vue'
import App from './App'
// import HelloWorld from './components/HelloWorld.vue'
// const img = require('./assets/logo.png') // eslint-disable-line
// const App = defineComponent({
//   render() {
//     return h(
//       'div',
//       {
//         id: 'app',
//       },
//       [
//         h('img', {
//           src: img,
//         }),
//         h(HelloWorld, {
//           age: 47357893,
//         }),
//       ],
//     )
//   },
// })
createApp(App).mount('#app')
