<template>
  <div class="transfers">
    <Sidebar2 />
    <div class="mainmain">
      <div class="topdiv flex justify-start">
        <p class="text-2xl my-auto">Transfer Between Users</p>
      </div>
      <div class="maindiv flex w-full">
          <div class="float-left w-1/2">
            <div class="accnum">
              <div class="text float-left">
                <div id="account">Account</div>
                <div id="savings">SAVINGS - 0703444572</div>
              </div>
              <div class="dropdown">
                <img src="../assets/Arrow-down.svg" alt="" id="arrow">
              </div>
            </div>
          </div>
          
        <div class="form flex w-1/2">
          <div class="formdiv">
            <form @submit="createAcc">
              <p class="title font-bold text-left mb-6">Transfer</p>
              <div class="number mb-6">
                <input type="number" class="input p-3" 
                v-model="transaction.acctNo" 
                placeholder="Account Number" required/>
              </div>

              <div class="number mb-6">
                <input type="text" class="input p-3" 
                v-model="name" @input="names"
                placeholder="Name of Beneficiary" required/>
              </div>

              <div class="number mb-6">
                <input type="text" class="input p-3" 
                v-model="transaction.amount" 
                placeholder="Amount to Transfer" required/>
              </div>

              <div class="number mb-16">
                <textarea v-model="transaction.description" class="input1 p-3" name="" id="" cols="30" rows="10" placeholder="Description">
                </textarea>

              </div>
              
              <input type="submit" value="Continue" class="button">
              
            </form>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar2 from '@/components/layout/Sidebar2';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'Transfers',
  components: {
    Sidebar2
  },
  data() {
    return {
        transaction: {
            id: "",
            description: "",
            deb_cre: "Debit",
            availBal: "",
            status: "success",
            date: new Date(Date.now()).toDateString(),
            acctNo: "",
            acctType: "savings",
            firstName: "",
            lastName: "",
            company: "Lopworks",
            amount: "",
      },
      name: ""
    }
  },
  methods: {
    names(){
      let fullName = this.name.split(' ');
      this.transaction.firstName = fullName[0];
      this.transaction.lastName = fullName[1];
    },
    addTransaction(){

    },
    ...mapActions(['addTransaction']),
    createAcc(e) {
      e.preventDefault();
      this.transaction.id = this.allTransactions.length + 1;
      this.transaction.availBal = this.senderAccount.availBal
      this.addTransaction(this.transaction)
      console.log(this.transaction)
     this.$router.push("/details/"+this.transaction.id)
    }
  },
  computed: {
    ...mapGetters(["allTransactions", "senderAccount"]),
  }
};
</script>

<style scoped>

  .mainmain {
    height: 677.5px;
    width: 828px;
    margin-left: 105px;
    margin-top: -30px;
  }
  .maindiv {
    width: 828px;
    height: 596px;
    background-color: #ffffff;
  }
  .topdiv {
    width: 828px;
    height: 81.5px;
  }
  .accnum {
    width: 267px;
    height: 83px;
    border-radius: 2px;
    border: solid 1px #6964d9;
    margin-left: 44px;
    margin-top: 43px;
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
  .formdiv {
    width: 165px;
    margin-top: 43px;
  }
  .input {
    width: 348px;
    height: 40px;
    border-radius: 2px;
    background-color: #eeeeee;
  }
  .input1 {
    width: 348px;
    height: 165px;
    border-radius: 2px;
    background-color: #eeeeee;
  }
  /* ::placeholder {
  color: red;
  } */
  .button {
    width: 152px;
    height: 45px;
    border-radius: 2px;
    background-color: #6964d9;
    color: white;
    margin-left: 195px;
    cursor: pointer;
  }
</style>


// this.allTransactions.length + 1
// this.senderAccount.availBal