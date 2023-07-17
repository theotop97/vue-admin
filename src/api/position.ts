import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";
// 这里定义返回值类型，使接口拥有良好的类型推导
export type UserResult = {
  /** 是否请求成功 */
  errMsg: string;
  errNo: number;
  data: {
    result: boolean;
    clientId: string;
    timestamp: number;
  };
};

/** 修改仓位 */
export const modifyMoney = (data?: object) => {
  return http.request<UserResult>("post", baseUrlApi("position/modifyMoney"), {
    data
  });
};
