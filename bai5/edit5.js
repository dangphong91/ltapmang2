let chuoi1 = prompt("Nhập chuỗi 1 :");
let i = 0;
let a = [];
for (; i <= chuoi1.length -1; i++) {
    a[i] = chuoi1[i];
}
let chuoi2 = prompt("Nhập chuỗi 2 :");
let j = 0;
let b = [];
for (; j <= chuoi2.length -1; j++) {
    b[j] = chuoi2[j];
}
// document.write(a); document.write(b);
if ( a.join("") == b.join("") ) {
    document.write("Chuỗi 1 giống chuỗi 2.");
} else {
    document.write("Chuỗi 1 không giống chuỗi 2.");
}