let arr = [];
for (let i = 0; i <= 9; i++) {
    arr[i] = prompt("Nhập giá trị thứ " + i + " của mảng:");
}
document.write(arr + "<br>");
for (i = 0; i <= arr.length -1; i++) {
    if (Number(arr[i]) < 0) {
        arr[i] = "_" + (-1 * arr[i])
    } else if (arr[i] == "-") {
        arr[i] = "_";
    }
}
document.write(arr);