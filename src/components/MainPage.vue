<template>
  <div class="alist">
    <div class="bal">
      <div class="accnum">
        <div class="text">
          <div id="account">Account</div>
          <div id="savings">SAVINGS - 0703444572</div>
        </div>
        <div class="dropdown">
           <img src="../assets/Arrow-down.svg" alt="" id="arrow">
        </div>
      </div>

      <div class="curavail">
        <div class="text">
          <div id="account">Current</div>
          <div id="balance">&#8358; 21,418.00</div>
        </div>

        <div class="text">
          <div id="account">Available Balance</div>
          <div id="balance">&#8358; 21,418.00</div>
        </div>
      </div>
    </div>

    <div class="toptable">
      <div class="top">
        <div class="topcontent">
            <input v-model="searchKey" class="search" 
            placeholder="   Search for transaction ID" id="search-element" 
            requred/>
          <div class="filter">
            <span>Filter</span>
            <img src="../assets/Arrow-down.svg" alt="" id="filarrow">
          </div>

          <div class="view">
            <span>Viewing <strong>1-20</strong> of <strong>36</strong></span>
            <div class="prev">&#8249;</div>
            <div class="next">&#8250;</div>
          </div>

        </div>
      </div>

      <div class="tablediv">
        <table class="table">
          <colgroup>
          <col style="width: 10%;">
          <col style="width: 30%;">
          <col style="width: 15%;">
          <col style="width: 15%;">
          <col style="width: 10%;">
          <col style="width: 20%;">
        </colgroup>
        <thead>
          <tr class="headrow" >
            <th>ID</th>
            <th>Description</th>
            <th>Debit/Credit</th>
            <th>Available Balance</th>
            <th>Status</th>
            <th class="th6">Date</th>
          </tr>                 
        </thead>
        <tbody>
          <tr class="bodyrow" v-for="account in allAccounts" :key="account.id">
            <td class="td1">
              <router-link to="/details">
                {{ account.id }}
              </router-link>
              </td>
            <td class="td2">
              <router-link to="/details">
              {{ account.description }}
              </router-link>
              </td>
            <td class="td3" v-bind:class ="AmtLabel(account.debcre)">{{ account.debcre }}</td>
            <td class="td4">{{ account.availbal }}</td>
            <td class="td5 float-right">
              <div class="mt-4 h-7 w-20 text-center border" v-bind:class ="StatusLabel(account.status)">
                    {{ account.status }}
              </div>
              
              </td>
            <td class="td6">{{ account.date }}</td>
          </tr>
        </tbody>

        </table>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'MainPage',
  methods: {
      AmtLabel (value) {
      return value === '-5,000.00'
      ? 'text-red-800'
      : 'text-green-500'
    },
      StatusLabel (value) {
      return value === 'success'
      ? 'text-green-500 bg-white w-36  border-green-200'
      : 'text-red-800 bg-white w-36  border-red-300'
    },
  },
  computed: mapGetters(['allAccounts'])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.alist {
  height: 932px;
  width: 1227px;
  margin-left: 109px;
}
.bal {
  width: 793px;
  height: 115px;
  border-radius: 2px;
  background-color: #ffffff;
  border: 1px solid white;
}
.accnum {
  width: 267px;
  height: 83px;
  border-radius: 2px;
  border: solid 1px #6964d9;
  margin-left: 16px;
  margin-top: 14px;
  float: left;
}
.text {
  /* display: flex;
  align-items: flex-start; */
  float: left;
}
#account {
  margin-top: 16px;
  display: flex;
  margin-left: 12px;
  font-size: 14px;
}
#savings {
  margin-top: 19px;
  color: #6964d9;
  font-weight: 600;
  margin-left: 12px;
  font-size: 16px
}
#arrow {
  width: 24px;
  height: 24px;
  margin-left: 220px;
  margin-top: 28px
}
.curavail {
  width: 400px;
  height: 83px;
  margin-left: 40px;
  margin-top: 14px;
  float: left; 
  display: flex;
  justify-content: space-between;
}
#current {
  margin-top: 16px;
  display: flex;
  margin-left: 12px;
}
#balance {
  margin-top: 10px;
  color: #6964d9;
  font-weight: 600;
  margin-left: 12px;
  font-size: 30px;
}
.toptable {
  width: 1227px;
  height: 803px;
  background-color: #ffffff;
  margin-top: 14px;
}
.top {
  width: 1227px;
  height: 80px;
  display: flex;
}
.topcontent {
  width: 1227px;
  height: 32px;
  margin: 22px 0;
}
.searchdiv {
  width: 300px;
  height: 32px;
  border-radius: 2px;
  margin-left: 37px;
  float: left;
}
.search {
  width: 300px;
  height: 30px;
  border-radius: 2px;
  border: solid 1px #c6cbd4;
  float: left;
  margin-left: 37px;
}
.filter {
  width: 128px;
  height: 30px;
  border-radius: 2px;
  border: solid 1px #c6cbd4;
  float: left;
  margin-left: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.filter span {
  margin-left: 12px;
}
#filarrow {
  margin-right: 12px;
  width: 12px;
  height: 12px;
}
.view {
  float: right;
  display: flex;
  align-items: center;
  margin-right: 25px;
}
.view span{
  float: left;
}
.prev {
  width: 24px;
  height: 24px;
  border: 1px solid #c6cbd4;
  text-align: center;
  float: left;
  margin-left: 13px;
  padding-top: 3px;
}
.next {
  width: 24px;
  height: 24px;
  border: 1px solid #c6cbd4;
  text-align: center;
  float: left;
  padding-top: 3px;
}
.tablediv{
  height: 665px;
  width: 1227px;
}
.table {
  width: 1227px;
  border-collapse: collapse;
}
.headrow {
  height: 58px;
}
th {
  text-align: left;
  padding-left: 43px;
}
.th6 {
  text-align: left;
  padding-left: 83px;
}
.bodyrow:hover {
  background-color: #b9b9fa;
}
td {
  height: 64px;
  border-bottom: 2px solid #f9f9f9;
}
.td1 {
  text-align: left;
  padding-left: 43px;
}
.td2 {
  text-align: left;
  padding-left: 43px;
}
.td3 {
  text-align: right;
  padding-right: 49px;
}
.td4 {
  text-align: right;
  padding-right: 9px;
}
.td5 {
  text-align: right;
  padding-right: 30px;
}
.td6 {
  text-align: left;
  padding-left: 35px;
}
</style>
