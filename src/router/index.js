import Index from '@/views/index/index.vue';
import HelloWorld from '@/components/HelloWorld.vue';
export const routes = [
  {
    path: '/',
    component: Index,
    name: 'Index',
  },
  {
    path:'/helloworld',
    component: HelloWorld,
    name: 'HelloWorld',
  }
]