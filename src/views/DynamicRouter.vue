<template>
  <div>
    <div class="card" style="width: 18rem">
      <img
        :src="axiosData.picture.large"
        class="card-img-top"
        alt="..."
        :title="axiosData.name.first"
      />
      <div class="card-body">
        <p class="card-text">
          {{ axiosData.name.first }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      axiosData: {}
    }
  },
  created() {
    console.log(this.$route)
    // console.log(this.$route.params.id)
    // const seed = '9325fd6d29f1935d'
    const seed = 'this.$route.params.id'
    const url = `https://randomuser.me/api/?seed=${seed}`

    axios
      .get(url)
      .then((res) => {
        console.log(res)
        this.axiosData = res.data.results[0]
        // console.log(this.axiosData)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}
</script>
