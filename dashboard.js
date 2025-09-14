document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("performanceChart");
  const ctx = canvas.getContext("2d");

  // Performance data
  const data = {
    labels: ["Quizzes", "Reading", "Actions", "Community"],
    values: [35, 25, 20, 20],
    colors: ["#4a7c59", "#8fbc8f", "#a7d7c5", "#f9f7cf"],
  };

  function drawPieChart() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    let total = data.values.reduce((sum, value) => sum + value, 0);
    let startAngle = 0;

    data.values.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();

      ctx.fillStyle = data.colors[index];
      ctx.fill();

      startAngle += sliceAngle;
    });

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI);
    ctx.fillStyle = "#1e3c32";
    ctx.fill();

    ctx.fillStyle = "#ecf0f1";
    ctx.font = "bold 20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Daily", centerX, centerY - 10);
    ctx.fillText("Performance", centerX, centerY + 10);
  }

  drawPieChart();

  const progressBars = document.querySelectorAll(".progress-fill");
  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });

  const badges = document.querySelectorAll(".badge");
  badges.forEach((badge) => {
    badge.addEventListener("mouseenter", () => {
      if (badge.classList.contains("earned")) {
        badge.style.transform = "scale(1.15)";
        badge.style.boxShadow = "0 6px 20px rgba(255, 107, 107, 0.6)";
      }
    });

    badge.addEventListener("mouseleave", () => {
      if (badge.classList.contains("earned")) {
        badge.style.transform = "scale(1)";
        badge.style.boxShadow = "0 4px 15px rgba(255, 107, 107, 0.4)";
      } else {
        badge.style.transform = "scale(1)";
      }
    });
  });
});
