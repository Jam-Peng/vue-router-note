<template>
  <div class="row me-auto">
    <div class="col col-3">
      <div class="list-group">
        <router-link
          to="/product/ChBook"
          class="list-group-item list-group-item-action"
        >
          中文書籍
        </router-link>
        <router-link
          to="/product/EnBook"
          class="list-group-item list-group-item-action"
        >
          外文書籍
        </router-link>
      </div>
    </div>

    <div class="col col-9">
      <router-view />
    </div>
  </div>
</template>
