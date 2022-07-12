/*
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 09:24:38
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-12 18:49:15
 * @FilePath: \admin-app\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Index from '@/views/index/index.vue';
// import HelloWorld from '@/components/HelloWorld.vue';
import oldHome from '@/views/oldHome/oldHome.vue';
export const routes = [
  {
    path: '/',
    component: Index,
    name: 'Index',
  },
  {
    path: '/oldHome',
    component: oldHome,
    name: 'oldHome',
  },
  {
    path:'/organization',
    component: () => import('@/views/sub1/sub1.vue'),
    name: 'organization',
  },
  {
    path: '/characteristicindustry',
    component: () => import('@/views/sub2/sub2.vue'),
    name: 'characteristicindustry',
  },
  {
    path: '/publicservice',
    component: () => import('@/views/sub3/sub3.vue'),
    name: 'publicservice',
  },
  {
    path: '/ruralconstruction',
    component: () => import('@/views/sub4/sub4.vue'),
    name: 'ruralconstruction',
  },
  {
    path: '/humansettlements',
    component: () => import('@/views/sub5/sub5.vue'),
    name: 'humansettlements',
  },
  {
    path: '/ruralgovernance',
    component: () => import('@/views/sub6/sub6.vue'),
    name: 'ruralgovernance',
  },
]