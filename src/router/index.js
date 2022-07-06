/*
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 09:24:38
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-06 20:14:46
 * @FilePath: \admin-app\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Index from '@/views/index/index.vue';
// import HelloWorld from '@/components/HelloWorld.vue';
export const routes = [
  {
    path: '/',
    component: Index,
    name: 'Index',
  },
  // {
  //   path:'/organization',
  //   component: () => import('@/views/sub1/sub1.vue'),
  //   name: 'organization',
  // }
]