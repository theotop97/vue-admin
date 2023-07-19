<script setup lang="ts">
defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "Position"
});

import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
import { modifyMoney } from "@/api/position";
// import { http } from "@/utils/http";
import { message } from "@/utils/message";
// import { UserResult } from "@/api/user";

const formRef = ref<FormInstance>();
const loading = ref(false);
const dynamicValidateForm = reactive({
  account_id: "",
  strategy_id: "",
  amount: ""
});

const submitForm = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      modifyMoney({
        account_id: dynamicValidateForm.account_id,
        strategy_id: dynamicValidateForm.strategy_id,
        amount: dynamicValidateForm.amount
      }).then(res => {
        if (res.errNo == 0) {
          message("修改成功", { type: "success" });
          console.log(res);
        } else {
          message("修改失败", { type: "error" });
        }
      });
    } else {
      loading.value = false;
      return fields;
    }
  });
};

// const modifyMoney = (data?: object) => {
//   return http.request<UserResult>("post", "/position/modifyMoney", { data });
// };
</script>

<template>
  <el-form
    label-position="left"
    style="max-width: 700px"
    ref="formRef"
    :model="dynamicValidateForm"
    label-width="120px"
    class="demo-dynamic"
  >
    <el-form-item
      prop="account_id"
      label="Account ID"
      :rules="[
        {
          required: true,
          message: 'Please input account_id',
          trigger: 'blur'
        },
        {
          type: 'string',
          message: 'Please input correct account_id',
          trigger: ['blur', 'change']
        }
      ]"
    >
      <el-input v-model="dynamicValidateForm.account_id" />
    </el-form-item>
    <el-form-item
      prop="strategy_id"
      label="Strategy ID"
      :rules="[
        {
          required: true,
          message: 'Please input strategy_id',
          trigger: 'blur'
        },
        {
          type: 'string',
          message: 'Please input correct Strategy ID',
          trigger: ['blur', 'change']
        }
      ]"
    >
      <el-input v-model="dynamicValidateForm.strategy_id" />
    </el-form-item>
    <el-form-item
      prop="amount"
      label="Amount"
      :rules="[
        {
          required: true,
          message: 'Please input amount',
          trigger: 'blur'
        },
        {
          type: 'string',
          message: 'Please input amount',
          trigger: ['blur', 'change']
        }
      ]"
    >
      <el-input v-model="dynamicValidateForm.amount" />
    </el-form-item>
    <el-form-item>
      <el-button
        class="btn-spacing"
        type="primary"
        @click="submitForm(formRef)"
      >
        Submit
      </el-button>
    </el-form-item>
  </el-form>
</template>

<style>
.btn-spacing {
  margin-top: 40px;
}
</style>
