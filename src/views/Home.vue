<template>
  <div class="home">
    <Sidebar />
    <MainPage :accounts = "accounts"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
import Sidebar from "@/components/layout/Sidebar";


export default {
  name: "Home",
  components: {
    MainPage,
    Sidebar
  },
  data() {
    return {
      accounts: [
        {
            id: 1,
            description: "Transfer from CDN001654321",
            debcre: "5,000.00",
            availbal: "21,418.00",
            status: "success",
            date: "17-02-2020"
          },
          {
            id: 2,
            description: "Transfer from GHT009876534",
            debcre: "-5,000.00",
            availbal: "21,418.00",
            status: "failed",
            date: "17-02-2020"
          },
          {
            id: 3,
            description: "Transfer from KLO00989675234",
            debcre: "-5,000.00",
            availbal: "21,418.00",
            status: "failed",
            date: "17-02-2020"
          },
          {
            id: 4,
            description: "Transfer from FBH234765890",
            debcre: "5,000.00",
            availbal: "21,418.00",
            status: "success",
            date: "17-02-2020"
          }
      ]
    }
  }
}
</script>
