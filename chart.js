const canvas = document.getElementById("trafficChart");

if (canvas) {

    const ctx = canvas.getContext("2d");

    new Chart(ctx, {

        type: "line",

        data: {

            labels: [
                "6 AM",
                "8 AM",
                "10 AM",
                "12 PM",
                "2 PM",
                "4 PM",
                "6 PM",
                "8 PM"
            ],

            datasets: [{

                label: "Traffic Volume",

                data: [300, 1800, 1200, 800, 900, 1300, 2200, 900],

                borderColor: "#38bdf8",

                backgroundColor: "rgba(56,189,248,0.2)",

                fill: true,

                tension: 0.4,

                borderWidth: 3,

                pointRadius: 5

            }]
        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    labels: {

                        color: "white"

                    }

                }

            },

            scales: {

                x: {

                    ticks: {

                        color: "white"

                    }

                },

                y: {

                    ticks: {

                        color: "white"

                    }

                }

            }

        }

    });

}