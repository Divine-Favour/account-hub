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
            <form v-on:submit="createTrans">
              <p class="title font-bold text-left mb-6">Transfer</p>
              <div class="number mb-6">
                <input type="text" class="input" 
                v-model="form.acctNum" 
                placeholder="Account Number" required/>
              </div>

              <div class="number mb-6">
                <input type="text" class="input" 
                v-model="form.beneficiary" 
                placeholder="  Name of Beneficiary" required/>
              </div>

              <div class="number mb-6">
                <input type="text" class="input" 
                v-model="form.amount" 
                placeholder="  Amount to Transfer" required/>
              </div>

              <div class="number mb-16">
                <input type="textarea" class="input1" 
                v-model="form.description" 
                placeholder="  Description" required/>
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


export default {
  name: 'Transfers',
  components: {
    Sidebar2
  },
  data() {
    return {
        form: {
        accNum: '',
        beneficiary: '',
        amount: '',
        description: ''
      }
    }
  },
  // methods: {
  //   createTrans: function() {
  //     var form = this.form;
  //     products.push({
  //       id: Math.random().toString().split('.')[1],
  //       accNum: form.accNum,
  //       beneficiary: form.beneficiary,
  //       amount: form.amount,
  //       description: form.description
  //     });
  //     router.push('/');
  //   }
  // }
}
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