/*
 * @Author: yuxuewu 18329517675@163.com
 * @Date: 2022-07-10 18:48:07
 * @LastEditors: yuxuewu 18329517675@163.com
 * @LastEditTime: 2022-07-10 22:18:39
 * @FilePath: \admin-app\src\utils\api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from './request';
export function getList(data){
  return axios.request({
    url: '/api/Industry/plant',
    method: 'post',
    data,
  })
}