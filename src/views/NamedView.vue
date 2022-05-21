<template>
  <h2>命名視圖</h2>
  <div class="row row-cols-1 row-cols-lg-3 g-3 ms-auto">
    <div class="col">
      <router-view name="left" />
    </div>
    <div class="col">
      <router-view name="middle" />
    </div>
    <div class="col">
      <router-view name="right" />
    </div>
  </div>
</template>
