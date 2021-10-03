// Sử dụng yargs để kiểm tra giá trị truyền vào có phải là số nguyên tố hay không

"use strict";

const yargs = require("yargs");

function checkPrimes(n) {
    let flag = true; // true : la SNT ; false : khong la SNT

    if (n < 2) {
        flag = false;
    } else if (n == 2) {
        flag = true;
    } else if (n % 2 == 0) {
        flag = false;
    } else {
        for (let i = 3; i < n - 1; i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}

let argv = yargs.argv;

if (typeof argv.n != "number") {
    console.log("Gia tri n khong hop le!");
} else {
    if (checkPrimes(argv.n)) {
        console.log(argv.n + " la so nguyen to.");
    } else {
        console.log(argv.n + " khong phai la so nguyen to.");
    }
}