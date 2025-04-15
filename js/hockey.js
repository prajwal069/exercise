const planContainer = document.getElementById("planContainer");
const darkBtn = document.getElementById("darkModeBtn");

function showPlan(type) {
  if (type === "week") {
    planContainer.innerHTML = `
      <h5>1 Week Plan</h5>
      <ul class="text-start">
        <li>Day 1: Speed drills</li>
        <li>Day 2: Stickhandling</li>
        <li>Day 3: Rest + Stretch</li>
        <li>Day 4: Lower body strength</li>
        <li>Day 5: Agility sprints</li>
        <li>Day 6: Scrimmage practice</li>
        <li>Day 7: Full body cooldown</li>
      </ul>
    `;
  } else {
    planContainer.innerHTML = `
      <h5>1 Month Plan</h5>
      <ul class="text-start">
        <li>Week 1: Endurance + Core</li>
        <li>Week 2: Power skating + Upper body</li>
        <li>Week 3: Shooting + Stick work</li>
        <li>Week 4: Game simulation + Recovery</li>
      </ul>
    `;
  }
}

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  planContainer.classList.toggle("bg-dark");
});
