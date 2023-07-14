// 最简代码，也就是这些字段必须有
import { $t } from "@/plugins/i18n";

export default {
  path: "/position",
  meta: {
    icon: "icon-park-twotone:database-position",
    title: $t("menus.position")
  },
  children: [
    {
      path: "/position/modify",
      name: "Modify",
      component: () => import("@/views/position/modify.vue"),
      meta: {
        title: $t("menus.positionModify"),
        showParent: true
      }
    },
    {
      path: "/position/test",
      name: "Test",
      component: () => import("@/views/position/test.vue"),
      meta: {
        title: $t("menus.positionTest"),
        showParent: true
      }
    }
  ]
};
