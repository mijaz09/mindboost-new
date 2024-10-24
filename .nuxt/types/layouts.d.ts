import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "manager-layout"
declare module "../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.5_eslint@8.57.1_ioredis@5.4.1_magicast@0.3_qeaore4mp3y7lt5eyvaat2qqoq/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}