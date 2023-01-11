const input = document.querySelector(".inputN");
const submitBtn = document.querySelector(".submitBtn");

function sumAll(n) {
  let ret = 0;
for(let i = 1; i < n+1; i++){
ret += i;
}
return ret;
}
function sumall(n) {
  return ((1+n)*n)/2;
}

// submit 버튼을 누르면 실행될 함수에요.
function submit() {
  // 입력창에 있는 값을 n에 저장해요.
  let n = parseInt(input.value);
  // 결과값을 출력해요.
  document.querySelector("#result").innerHTML = "결과: " + sumAll(n);
}
// submitBtn을 클릭하면 submit() 함수가 실행됩니다.
submitBtn.addEventListener("click", submit);
