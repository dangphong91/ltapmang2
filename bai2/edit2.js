let arr = [];
for (let i = 0; i <= 9; i++) {
    arr[i] = prompt("Nhập giá trị thứ " + i + " của mảng:");
}
document.write(arr + "<br>");
arr.reverse();
let a = arr.join("");
document.write(a);