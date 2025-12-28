// File: main.js

let myChart = null;

function startSimulation() {
    const n = parseInt(document.getElementById('inputN').value);

    if (isNaN(n) || n < 1) {
        alert("Mohon masukkan angka N yang valid!");
        return;
    }

    const labels = [];
    const dataIterative = [];
    const dataRecursive = [];
    
    // BATASAN:
    // Rekursif sangat berat, jadi kita batasi inputnya.
    const limitRecursive = 35; 
    
    // JUMLAH PENGULANGAN (BENCHMARKING):
    // Kita jalankan fungsi Iteratif ribuan kali agar waktunya terukur (tidak 0).
    const iterations = 5000; 

    for (let i = 1; i <= n; i++) {
        labels.push("N=" + i);

        // --- 1. UKUR ITERATIF (DENGAN RATA-RATA) ---
        // Karena sangat cepat, kita jalankan 5000 kali lalu ambil rata-ratanya.
        const startIter = performance.now();
        for (let k = 0; k < iterations; k++) {
            fibonacciIterative(i);
        }
        const endIter = performance.now();
        
        // Waktu total dibagi jumlah pengulangan untuk dapat waktu per 1 eksekusi
        const avgTimeIter = (endIter - startIter) / iterations;
        dataIterative.push(avgTimeIter);


        // --- 2. UKUR REKURSIF (SINGLE RUN) ---
        // Rekursif sudah lambat, jadi CUKUP 1 KALI saja. Jangan di-looping!
        if (i <= limitRecursive) {
            const startRec = performance.now();
            fibonacciRecursive(i); 
            const endRec = performance.now();
            dataRecursive.push(endRec - startRec);
        } else {
            dataRecursive.push(null); 
        }
    }

    // Tampilkan Hasil Perhitungan Terakhir
    const resultVal = fibonacciIterative(n); 
    document.getElementById('calcResult').innerText = `${resultVal.toLocaleString()} Unit Koloni`;

    // Tampilkan Waktu Terakhir (Format angka lebih presisi)
    const lastTimeIter = dataIterative[dataIterative.length - 1].toFixed(8); // 8 desimal
    const lastTimeRec = n <= limitRecursive ? dataRecursive[n-1].toFixed(5) : "> Timeout";
    
    document.getElementById('timeResult').innerHTML = 
        `Iteratif (Avg): <b>${lastTimeIter} ms</b> <br> Rekursif: <b>${lastTimeRec} ms</b>`;

    // Render Grafik
    renderChart(labels, dataIterative, dataRecursive);
}

function renderChart(labels, dataIter, dataRec) {
    const ctx = document.getElementById('complexityChart').getContext('2d');
    
    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Iteratif O(n)',
                    data: dataIter,
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0, 0, 255, 0.1)',
                    borderWidth: 2,
                    tension: 0.3
                },
                {
                    label: 'Rekursif O(2^n)',
                    data: dataRec,
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    borderWidth: 2,
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Grafik Perbandingan Running Time (ms)'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                // Tampilkan angka dengan presisi tinggi di tooltip
                                label += context.parsed.y.toFixed(8) + " ms";
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Waktu (milidetik)'
                    }
                }
            }
        }
    });
}