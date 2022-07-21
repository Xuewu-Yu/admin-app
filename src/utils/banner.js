import axios from '@/utils/request.js';
import { reactive } from 'vue';
const banner = reactive({});
async function getData() {
  const { data } = await axios.request({ url: 'api/banner/list', method: 'post' });
  Object.assign(banner, data);
};
getData();
export default banner; 