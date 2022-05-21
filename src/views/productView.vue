<template>
  <div class="row">
    <div class="col-3">
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
        <router-link
          to="/product/NamedView/Art-Design-Shot"
          class="list-group-item list-group-item-action"
        >
          藝術叢書
        </router-link>
        <router-link
          to="/product/NamedView/Shot-Art-Design"
          class="list-group-item list-group-item-action"
        >
          旅遊指南
        </router-link>
      </div>
    </div>

    <div class="col-9">
      <router-view />
    </div>
  </div>
</template>
