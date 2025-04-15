document.addEventListener("DOMContentLoaded", function () {
    const darkBtn = document.getElementById("darkModeBtn");
  
    if (darkBtn) {
      darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
      });
    }
  });
  
  function showPlan(type) {
    const planContainer = document.getElementById("planContainer");
  
    if (type === "week") {
      planContainer.innerHTML = `
        <h4>⚽ 1 Week Football Plan</h4>
        <ul class="list-group mt-3 text-start" data-aos="fade-left">
          <li class="list-group-item">Day 1 – Warm-up, speed drills, ball control</li>
          <li class="list-group-item">Day 2 – Endurance run + passing accuracy</li>
          <li class="list-group-item">Day 3 – Strength training + lower body focus</li>
          <li class="list-group-item">Day 4 – HIIT + small-sided games</li>
          <li class="list-group-item">Day 5 – Tactical drills + shooting practice</li>
          <li class="list-group-item">Day 6 – Recovery run + mobility/stretching</li>
          <li class="list-group-item">Day 7 – Rest and visualization</li>
        </ul>
      `;
    } else if (type === "month") {
      planContainer.innerHTML = `
        <h4>🏆 1 Month Football Plan</h4>
        <ul class="list-group mt-3 text-start" data-aos="fade-left">
          <li class="list-group-item">Week 1 – Aerobic base + skill refinement</li>
          <li class="list-group-item">Week 2 – Power training + endurance matches</li>
          <li class="list-group-item">Week 3 – Sprint drills + strength sessions</li>
          <li class="list-group-item">Week 4 – Match simulation + active recovery</li>
        </ul>
      `;
    }
  
    AOS.init();
  }
  