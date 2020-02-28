const state = {
    transactions: [
          {
            id: "1",
            description: "Transfer to divine",
            deb_cre: "5000",
            availBal: "21000",
            status: "success",
            date: "21-03-2019",
            acctNo: "0122666808",
            acctType: "savings",
            firstName: "Divine",
            lastName: "Favour",
            company: "Lopworks",
            amount: "4000",
          },
          {
            id: "2",
            description: "Transfer to favour",
            deb_cre: "6000",
            availBal: "27000",
            status: "success",
            date: "11-03-2019",
            acctNo: "0122666808",
            acctType: "savings",
            firstName: "Ayo",
            lastName: "Blue",
            company: "Lopworks",
            amount: "9000",
          },
    ],
    account: {
      acctNo: "012",
      acctType: "Savings",
      firstName: "Divine",
      lastName: "Favour",
      company: "Lopworks",
      availBal: "500000"
    }
};

const getters = {
    allTransactions: state => state.transactions,
    senderAccount: state => state.account
    // allTransfers: state => state.transfers
};

const actions = {
  addTransaction: (context, transactions) => {
    context.commit('newTransaction', transactions);
  } 
};

const mutations = {
    newTransaction: (state, transaction) => state.transactions.push(transaction)
};

export default {
    state,
    getters,
    actions,
    mutations
};