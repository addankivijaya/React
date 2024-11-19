import { createStore } from "redux";
const initialState = {
  loan: 0,
  balance: 0,
  loanPurpose: "",
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "amount/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "amount/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "amount/loanRequest":
      return { ...state, loan: action.payload };
    default:
      return state;
  }
}
const store = createStore();
store.dispatch({ type: "amount/deposit", payload: 200 });
store.getState();

function deposit(amount) {
  return { type: "amount/deposit", payload: amount };
}
function withdraw() {}
function payLoan() {}
store.dispatch(deposit(200));

function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}
