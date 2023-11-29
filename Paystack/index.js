// let url = 
// "https://api.paystack.co/bank/resolve?account_number=3043995933&bank_code=011"

let bank ="https://api.paystack.co/bank"
let select = document.getElementsByTagName('select')[0];
let banks = []

let xhr = new XMLHttpRequest();
xhr.open("GET", bank)
xhr.setRequestHeader("Authorization", "Bearer sk_test_d3669b2fafd338b319af043ee9a8805f422e579b")
xhr.send();

xhr.onload = function(){
  console.log(JSON.parse(xhr.response));
}

function getOptions(bank){
  let option = document.createElement('option');
  option.innerHTML = bank;
  select.appendChild(option);
}

function changeName(bankName){
  let bankCode = allBanks.data.find(bank => bank.name === bankName);
  return bankCode.code;
}

let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let account_number = document.getElementById('account').value;
  let bankCode = changeName(bankName);
  let bankName = document.getElementById('bankName');

})