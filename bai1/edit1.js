let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
// document.write(a.length);
for (let i = 0; i <= a.length -1; i++) {
    document.write("Row" + i + ": ");
    for(let j = 0; j <= a[i].length -1; j++) {
        document.write('" ' + a[i][j] + ' "');
    }
    document.write("<br>");
}