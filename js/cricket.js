document.addEventListener("DOMContentLoaded", function () {
  const darkBtn = document.getElementById("darkModeBtn");

  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

function showPlan(type) {
  const planContainer = document.getElementById("planContainer");

  if (type === "week") {
    planContainer.innerHTML = `
      <h4>🏃 1 Week Cricket Plan</h4>
      <ul class="list-group mt-3 text-start" data-aos="fade-left">
        <li class="list-group-item">Day 1 – Warm-up, agility drills, batting</li>
        <li class="list-group-item">Day 2 – Cardio + bowling technique</li>
        <li class="list-group-item">Day 3 – Strength training + core</li>
        <li class="list-group-item">Day 4 – HIIT and catching practice</li>
        <li class="list-group-item">Day 5 – Full body circuit</li>
        <li class="list-group-item">Day 6 – Light jogging, yoga</li>
        <li class="list-group-item">Day 7 – Rest and recovery</li>
      </ul>
    `;
  } else if (type === "month") {
    planContainer.innerHTML = `
      <h4>💪 1 Month Cricket Plan</h4>
      <ul class="list-group mt-3 text-start" data-aos="fade-left">
        <li class="list-group-item">Week 1 – Stamina building and mobility</li>
        <li class="list-group-item">Week 2 – Weight training and endurance</li>
        <li class="list-group-item">Week 3 – Speed drills and dynamic movements</li>
        <li class="list-group-item">Week 4 – Match simulation and mental prep</li>
      </ul>
    `;
  }

  AOS.init(); // reinitialize animation after DOM change
}
