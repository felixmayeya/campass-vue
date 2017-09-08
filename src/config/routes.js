import Hello from '@/components/Hello'
import Login from '../page/login.vue'

export default [{
  path: '/',
  name: 'Hello',
  component: Hello
}, {
  path: '/login',
  name: 'login',
  component: Login
}]
