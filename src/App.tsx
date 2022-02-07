import { defineComponent, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const style = {
  color: 'red',
}
export default defineComponent({
  setup() {
    const numberRef = ref('luoguan')
    return () => {
      return (
        <div style={style}>
          {numberRef.value}
          <HelloWorld age={9000}></HelloWorld>
        </div>
      )
    }
  },
})
