<template>
  <div>
    <div
      class="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio1"
        autocomplete="off"
        checked
        @click="push"
      />
      <label class="btn btn-outline-primary" for="btnradio1">push</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
        @click="replace"
      />
      <label class="btn btn-outline-primary" for="btnradio2">Replace</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio3"
        autocomplete="off"
        @click="go"
      />
      <label class="btn btn-outline-primary" for="btnradio3">Go</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio4"
        autocomplete="off"
        @click="getRoute"
      />
      <label class="btn btn-outline-primary" for="btnradio4">getRoute</label>
    </div>
  </div>
  <hr />
  <div
    class="btn-group"
    role="group"
    aria-label="Basic radio toggle button group"
  >
    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio5"
      autocomplete="off"
      @click="addRoute"
    />
    <label class="btn btn-outline-primary" for="btnradio5">新增路由</label>
  </div>
</template>

<script>
export default {
  methods: {
    // 包含歷史紀錄
    push() {
      // this.$router.push('/product/NamedView/Shot-Art-Design')
      this.$router.push({
        name: 'about'
      })
    },
    // 沒有歷史紀錄
    replace() {
      this.$router.replace({
        name: 'home'
      })
    },
    // 操作歷史紀錄
    go() {
      this.$router.go(-1)
    },
    // 取得常用參數
    getRoute() {
      // this.$ruote.fullPath(目前網址)
      console.log('取得路由屬性', this.$route)
      console.log('呼叫路由方法', this.$router)
    },
    // 臨時新增路由的方法
    addRoute() {
      this.$router.addRoute({
        path: '/newAbout',
        name: 'newAbout',
        component: () => import('./AboutView.vue')
      })
    }
  }
}
</script>
