let arr = [];
for (let i = 0; i <= 9; i++) {
    arr[i] = prompt("Nhập giá trị thứ " + i + " của mảng:");
}
document.write(arr + "<br>");
let arr2 = arr.filter(el => Number.isInteger(Number(el)));
document.write("Số kí tự số trong mảng :" + arr2.length +"<br>");
for ( let j = 0; j <= arr2.length -1; j++) {
    document.write(arr2[j]);
}