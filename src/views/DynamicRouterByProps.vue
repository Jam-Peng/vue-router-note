<template>
  <div></div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],

  created() {
    console.log('props', this.id)
    // const seed = '9325fd6d29f1935d'
    const seed = 'this.id'
    const url = `https://randomuser.me/api/?seed=${seed}`

    axios
      .get(url)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}
</script>
