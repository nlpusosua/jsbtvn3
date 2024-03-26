//c1
const t= document.getElementById("text");
console.log(t);
t.style.color="#777";
t.style.fontFamily = "2rem";
t.innerHTML="Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."

//c2
const uli = document.querySelectorAll("li");
console.log(uli);
for (let i=0; i< uli.length; i++){
    uli[i].style.color="blue";
}
//c3
// them 3 phan tu
var ul = document.getElementById("list");

for (var i = 8; i <= 10; i++) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode("Item " + i));
  ul.appendChild(li);
}
// sua mau cho li 1

const firstLi = ul.querySelector("li");
console.log(firstLi);
firstLi.style.color="red";

// chuyen background sang xanh
var liList = ul.children;
if (liList.length >= 3) {
  var thirdLi = liList[2];
  thirdLi.style.backgroundColor = "blue";
} 

// loai bo li 4
var liList = ul.children;
if (liList.length >= 4) {
  var fourthLi = liList[3];
  ul.removeChild(fourthLi);
}
// thay the li4
var li1 = document.createElement("li");
li1.innerHTML = "Nội dung bất kỳ";

if (liList.length >= 4) {
  var fourthLi = liList[3];
  ul.insertBefore(li1, fourthLi);
}