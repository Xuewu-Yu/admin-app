/*
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-06 09:24:38
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-25 09:56:36
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
    title: '首页',
  },
  {
    path: '/oldHome',
    component: oldHome,
    name: 'oldHome',
  },
  // {
  //   path: '/videoGroup',
  //   component: () => import('@/views/videoGroup/videoGroup.vue'),
  //   name: 'videoGroup',
  // },
  {
    path:'/organization',
    component: () => import('@/views/organization/organization.vue'),
    name: 'organization',
    title: '组织机构',
  },
  {
    path: '/characteristicindustry',
    component: () => import('@/views/characteristicindustry/characteristicindustry.vue'),
    name: 'characteristicindustry',
    title: '特色产业',
  },
  {
    path: '/publicservice',
    component: () => import('@/views/publicservice/publicservice.vue'),
    name: 'publicservice',
    title: '公共服务',
  },
  {
    path: '/ruralconstruction',
    component: () => import('@/views/ruralconstruction/ruralconstruction.vue'),
    name: 'ruralconstruction',
    title: '乡村建设',
  },
  {
    path: '/humansettlements',
    component: () => import('@/views/humansettlements/humansettlements.vue'),
    name: 'humansettlements',
    title: '人居环境',
  },
  {
    path: '/ruralgovernance',
    component: () => import('@/views/ruralgovernance/ruralgovernance.vue'),
    name: 'ruralgovernance',
    title: '乡村治理',
  },
  {
    path: '/midpoint',
    component: () => import('@/views/midpoint/midpoint.vue'),
    name: 'midpoint',
    title: '党建引领数字乡村',
  },
  {
    path: '/monitor',
    component: () => import('@/views/monitor/monitor.vue'),
    name: 'monitor',
    title: '监控视频',
  }
]