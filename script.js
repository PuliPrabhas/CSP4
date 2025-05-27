document.addEventListener("DOMContentLoaded", function () {
    // Get Chart Canvas
    const barCtx = document.getElementById("barChart").getContext("2d");
    const pieCtx = document.getElementById("pieChart").getContext("2d");

    // Data
    const labels = ["HP", "Asus", "Dell", "Lenovo", "Acer", "Apple", "Honor"];
    const data = [9, 7, 6, 6, 3, 3, 1];
    const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#8D99AE"];

    // Bar Chart
    new Chart(barCtx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Number of Users",
                data: data,
                backgroundColor: colors,
                borderColor: "#000",
                borderWidth: 1,
            }],
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true },
            },
            animation: { duration: 1500 },
        },
    });

    // Pie Chart
    new Chart(pieCtx, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
            }],
        },
        options: {
            responsive: true,
            animation: { animateRotate: true, duration: 2000 },
        },
    });
});
