let text = prompt("Nhập 1 chuỗi:");
let arr = [];
for (let i = 0; i <= text.length -1; i++) {
    arr[i] = text[i];
}
document.write(arr + "<br>");
let arr2 = arr.filter(el => +(el) != Number(el));
document.write("Số kí tự chữ trong mảng :" + arr2.length +"<br>");
for ( let j = 0; j <= arr2.length -1; j++) {
    document.write(arr2[j]);
}