import axios from '@/utils/request.js';
const { data } = await axios.request({ url: 'api/banner/list', method: 'post' });
export default data;