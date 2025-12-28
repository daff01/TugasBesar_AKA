#  Simulasi Pertumbuhan Koloni Jamur (Analisis Algoritma Fibonacci)

> **Tugas Besar Analisis Kompleksitas Algoritma (AKA)**
>
> Studi komparasi efisiensi antara Algoritma **Iteratif** dan **Rekursif** dalam memodelkan pertumbuhan biologis menggunakan Deret Fibonacci.

![Banner Project](./img/banner.png)
*(Ganti link di atas dengan screenshot tampilan awal aplikasi web Anda)*

## 👥 Tim Penyusun
Proyek ini dikembangkan oleh Mahasiswa **Telkom University**:

| Nama | NIM |
| :--- | :--- |
| **Hafattan Delvis** | 103012400057 |
| **Dafa Izul Haq** | 103012400316 |

---

## 📖 Tentang Proyek
Simulasi ini bertujuan untuk memvisualisasikan perbedaan performa yang drastis antara kompleksitas waktu **Linear** dan **Eksponensial**. Kami menggunakan kasus pertumbuhan koloni jamur (yang mengikuti pola deret Fibonacci) untuk menguji batas kemampuan komputasi browser.

Aplikasi ini membandingkan dua pendekatan:
1.  **Iteratif (Looping):** Menggunakan pendekatan *Dynamic Programming* sederhana.
2.  **Rekursif (Naive):** Menggunakan definisi matematika standar $F(n) = F(n-1) + F(n-2)$.

### ✨ Fitur Utama
* Input dinamis jumlah bulan (N).
* Perhitungan *real-time* jumlah koloni jamur.
* Pengukuran waktu eksekusi (*Running Time*) dalam presisi milidetik (ms).
* Visualisasi Grafik Perbandingan (Iteratif vs Rekursif).
* Penanganan *Big Integer* untuk input besar.

---

## ⚙️ Analisis Kompleksitas (Theoretical Analysis)

Berdasarkan analisis asimtotik yang telah dilakukan, berikut adalah perbandingan kedua algoritma:

### 1. Algoritma Iteratif
Menggunakan satu kali perulangan dari $2$ hingga $n$.
* **Time Complexity:** $O(n)$ (Linear)
* **Space Complexity:** $O(1)$ (Konstan)

### 2. Algoritma Rekursif
Melakukan pemanggilan fungsi berulang untuk sub-masalah yang sama (*Overlapping Subproblems*).
* **Time Complexity:** $O(2^n)$ (Eksponensial)
* **Space Complexity:** $O(n)$ (Stack Memory)

---

## 📊 Hasil Eksperimen (Empirical Results)

Berikut adalah bukti empiris perbedaan performa saat dijalankan pada lingkungan browser:

### 🚀 Kasus 1: Input Kecil ($N \le 20$)
Kedua algoritma berjalan sangat cepat ($< 1$ ms). Perbedaan belum terlihat signifikan.

### ⚠️ Kasus 2: Input Kritis ($N = 35$)
* **Iteratif:** Stabil di `0.00002 ms`.
* **Rekursif:** Melonjak drastis ke `~65.00 ms`.
* *Analisis:* Grafik rekursif mulai membentuk kurva eksponensial vertikal.

### 🛑 Kasus 3: Titik Henti ($N = 36$)
Algoritma Rekursif mengalami **Timeout / Stack Overflow** karena jumlah operasi melebihi batas aman browser, sementara Iteratif tetap berjalan lancar.

### 🌌 Kasus 4: Uji Skalabilitas ($N = 1000$)
![Grafik N=1000](./img/n1000.png)

* **Iteratif:** Berhasil menghitung bilangan Fibonacci ke-1000 (Ratusan digit) dalam `0.00058 ms`.
* **Rekursif:** Gagal total (*Non-scalable*).

> **Kesimpulan:** Algoritma Iteratif terbukti jauh lebih efisien dan *scalable* untuk menangani data besar dibandingkan Rekursif murni.

---

## 🛠️ Teknologi yang Digunakan
* **Frontend:** HTML5, CSS3
* **Logic:** JavaScript (ES6+)
* **Visualization:** Chart.js (Library untuk grafik)
* **Tools:** Visual Studio Code, Git

---

## 📚 Referensi
1.  Tobing, F. A., Prayogo, P., & Chandra, A. (2022). Analisis Perbandingan Fibonacci dengan Iterasi dan Rekursi Terhadap Efektifitas Waktu. *Jurnal Sains dan Teknologi Widyaloka*.
2.  Munir, R. (2011). *Algoritma dan Pemrograman*. Bandung: Informatika.
