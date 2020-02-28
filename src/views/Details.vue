<template>
  <div class="details">
    <Sidebar />
    <!-- <h1>This is a page for the bank details of the sender</h1> -->
    <div class="container">
      <div class="top flex justify-start">
        <p class="font-bold my-auto"><router-link to="/"> Account </router-link> &#62; 
        <span class="text-gray-400"> Transactions</span> </p> 
      </div>
      <div class="trans">
        <div class="toptrans w-full h-12 flex justify-start">
          <p class="ml-5 font-bold my-auto">
            Transaction Details
          </p>
        </div>

        <div class="bigtrans w-full">
          <div class="div1 w-1/2 h-auto float-left">
            <table class="border-collapse">
              <tr class="text-left h-20">
                <td class="tdtext pl-5">Transaction</td>
                <td class="pl-5"></td>
              </tr>

              
              <tr class="text-left">
                <td class="h-10 text-gray-600 pl-5">Available Balance:</td>
                <td 
                 class="h-10 pl-5">{{ transactions.availBal }}</td>
              </tr>
              <tr class="text-left">
                <td class="h-10 text-gray-600 pl-5">Date:</td>
                <td class="h-10 pl-5">{{ transactions.date }}</td>
              </tr>
              <tr class="text-left">
                <td class="h-10 text-gray-600 pl-5">Status:</td>
                <td class="h-10 pl-5">
                  <div class="h-7 w-20 text-center border border-green-200 text-green-500">
                    Success
                  </div>
                </td>
              </tr>
              <tr class="text-left">
                <td class="h-10 text-gray-600 pl-5">Debit/Credit:</td>
                <td class="h-10 pl-5">Credit</td>
              </tr>
              <tr class="text-left">
                <td class="h-10 text-gray-600 pl-5">Amount:</td>
                <td class="h-10 pl-5">{{ transactions.amount }}</td>
              </tr>
              <tr class="text-left">
                <td class="h-10 text-gray-600 pl-5">Description:</td>
                <td class="h-10 pl-5">{{ transactions.description }}</td>
              </tr>
            </table>
          </div>
          <div class="div2 w-1/4 h-auto float-left">
            <table class="border-collapse">
              <tr class="text-left h-20">
                <td class="tdtext">Sender Account</td>
                <td class="pl-5"></td>
              </tr>
              <tr class="text-left">
                <td class="h-10 text-gray-600">Acount Number:</td>
                <td class="h-10">032019</td>
              </tr>
              <tr class="text-left">
                <td class="h-10 text-gray-600">Account Type:</td>
                <td class="h-10">Savings</td>
              </tr>
              <tr class="text-left">
                <td class="h-10 text-gray-600">First Name:</td>
                <td class="h-10">John</td>
              </tr>
              <tr class="text-left">
                <td class="h-10 text-gray-600">Last Name:</td>
                <td class="h-10">Doe</td>
              </tr>
              <tr class="text-left">
                <td class="h-10 text-gray-600">Company Name:</td>
                <td class="h-10">Lopworks</td>
              </tr>
            </table>
          </div>
          <div class="div3 w-1/4 h-auto float-left">
            <table class="border-collapse">
              <tr class="text-left h-20">
                <td class="tdtext">Recipient Account</td>
                <td class="pl-5"></td>
              </tr>
              <tr class="text-left" >
                <td class="h-10 text-gray-600">Account Number:</td>
                <td class="h-10">{{ transactions.acctNo }}</td>
              </tr>
              <tr class="text-left">
                <td class="h-10 text-gray-600">Account Type:</td>
                <td class="h-10">Savings</td>
              </tr>
              <tr class="text-left" >
                <td class="h-10 text-gray-600">First Name:</td>
                <td class="h-10">{{ transactions.firstName }}</td>
              </tr>
              <tr class="text-left" >
                <td class="h-10 text-gray-600">Last Name:</td>
                <td class="h-10">{{ transactions.lastName }}</td>
              </tr>
              <tr class="text-left">
                <td class="h-10 text-gray-600">Company Name:</td>
                <td class="h-10">Lopworks</td>
              </tr>
            </table>
          </div>

          <div class="bottom w-full h-12 flex justify-end">
            <router-link to="/">
            <button class="btn1 mr-10 mt-10">Go Back</button>
            </router-link>
            <button class="btn2 text-white mt-10">Print</button>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import Sidebar from '@/components/layout/Sidebar';


export default {
  name: 'Details',
  components: {
    Sidebar
  },
  computed: {
    ...mapGetters(["allTransactions", "senderAccount"]),
    transactions(){
      return this.allTransactions.find((transaction)=>transaction.id == this.$route.params.transactionId)
    }
    }
    }
  // data() {
  //   return {
  //     account: findAccount(this.$route.params.account_id)
  //   };
  // },
  // methods: {
  //   findAccount(accountId) {
  //     return accounts[findAccountKey(accountId)];
  //   },

  //   findProductKey (accountId) {
  //     for (var key = 0; key < accounts.length; key++)
  //     if (accounts[key].id == accountId){
  //       return key;
  //     }
  //   }
  // },
  // computed: mapGetters(['allAccounts'])
</script>

<style scoped>
  .container {
    width: 1182px;
    height: 593px;
    /* border: 1px solid black; */
    margin-left: 118px;
  }
  .top {
    height: 104.5px;
    width: 1182px;
  }
  .trans {
    width: 1182px;
    height: 489px;
    background-color: #ffffff;
    /* border: 1px solid black; */
  }
  .bigtrans {
    height: 441px;
  }
  .tdtext {
    color: #6964d9;
  }
  .btn1 {
    height: 45px;
    width: 152px;
    color: #6964d9;
    background-color: #ffffff;
    border: solid 1px #6a65d9;
  }
  .btn2 {
    height: 45px;
    width: 152px;
    color: #ffffff;
    background-color: #6964d9;
  }
</style>
