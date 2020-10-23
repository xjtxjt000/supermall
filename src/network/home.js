import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/api/admin_system/teacher/appointment_teaId',
    method: 'post',
    withCredentials: true,
    params: {
      teaId: '9dea47b96ae14188a12a6dae19e00cab',
      JSESSIONID: 'E0D2CC6435D08E825ABFCD69AC8EDB43'
    },
    headers: {
      'Content-Type': 'application/json',//设置请求头请求格式为JSON
      "Cookie": 'tab_list=1; JSESSIONID=E0D2CC6435D08E825ABFCD69AC8EDB43; Hm_lvt_b393d153aeb26b46e9431fabaf0f6190=1589534628' //设置token 其中K名要和后端协调好
    },
  })
}
