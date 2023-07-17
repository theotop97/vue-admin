// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/position/modifyMoney",
    method: "post",
    response: () => {
      return {
        success: true,
        code: 200,
        data: {
          result: true,
          clientId: "92551199519",
          timestamp: 1689315454270
        }
      };
    }
  }
] as MockMethod[];
