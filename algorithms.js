// File: algorithms.js

// 1. Algoritma Fibonacci Iteratif (Linear Complexity - O(n))
// Pendekatan: Menggunakan looping untuk menjumlahkan dua angka sebelumnya.
function fibonacciIterative(n) {
    if (n <= 1) return n;
    
    let prev = 0;
    let current = 1;
    let temp;

    for (let i = 2; i <= n; i++) {
        temp = prev + current;
        prev = current;
        current = temp;
    }
    return current;
}

// 2. Algoritma Fibonacci Rekursif (Exponential Complexity - O(2^n))
// Pendekatan: Memanggil fungsi dirinya sendiri (self-calling).
// PERINGATAN: Sangat lambat untuk n > 40.
function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}