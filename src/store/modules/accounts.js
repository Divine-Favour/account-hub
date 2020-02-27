const state = {
    accounts: [
        {
            id: 1,
            description: "Transfer from CDN001654321",
            debcre: "5,000.00",
            availbal: "21,418.00",
            status: "success",
            date: "17-02-2020",
          },
          {
            id: 2,
            description: "Transfer from GHT009876534",
            debcre: "-5,000.00",
            availbal: "21,418.00",
            status: "failed",
            date: "17-02-2020",
            acct: "",
            fullname: "",
            amount: ""
          },
          {
            id: 3,
            description: "Transfer from KLO00989675234",
            debcre: "-5,000.00",
            availbal: "21,418.00",
            status: "failed",
            date: "17-02-2020",
            acct: "",
            fullname: "",
            amount: ""
          },
          {
            id: 4,
            description: "Transfer from FBH234765890",
            debcre: "5,000.00",
            availbal: "21,418.00",
            status: "success",
            date: "17-02-2020",
            acct: "",
            fullname: "",
            amount: ""
          },
          {
            id: 5,
            description: "Transfer from CDN001654321",
            debcre: "5,000.00",
            availbal: "21,418.00",
            status: "success",
            date: "17-02-2020",
            acct: "",
            fullname: "",
            amount: ""
          },
          {
            id: 6,
            description: "Transfer from GHT009876534",
            debcre: "-5,000.00",
            availbal: "21,418.00",
            status: "failed",
            date: "17-02-2020",
            acct: "",
            fullname: "",
            amount: ""
          },
          {
            id: 7,
            description: "Transfer from KLO00989675234",
            debcre: "-5,000.00",
            availbal: "21,418.00",
            status: "failed",
            date: "17-02-2020",
            acct: "",
            fullname: "",
            amount: ""
          },
          {
            id: 8,
            description: "Transfer from FBH234765890",
            debcre: "5,000.00",
            availbal: "21,418.00",
            status: "success",
            date: "17-02-2020",
            acct: "",
            fullname: "",
            amount: ""
          }
    ],
    transfers: [
      {
        id: 1,
        acct: "0122666808",
        firstName: "Divine",
        lastName: "Favour",
        amount: "4,000.00"
      }
    ]
};

const getters = {
    allAccounts: state => state.accounts,
    allTransfers: state => state.transfers
};

const actions = {
  addTransfer: (context, transfers) => {
    context.commit('newTransfer', transfers);
  } 
};

const mutations = {
    newTransfer: (state, account) => state.transfers.splice(0,1,account)
};

export default {
    state,
    getters,
    actions,
    mutations
};