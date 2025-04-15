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
        <h4>🏀 1 Week Basketball Plan</h4>
        <ul class="list-group mt-3 text-start" data-aos="fade-left">
          <li class="list-group-item">Day 1 – Dribbling drills and shooting practice</li>
          <li class="list-group-item">Day 2 – Agility ladder + passing skills</li>
          <li class="list-group-item">Day 3 – Upper body strength + jump training</li>
          <li class="list-group-item">Day 4 – Defensive footwork + sprint work</li>
          <li class="list-group-item">Day 5 – Scrimmage + cooldown yoga</li>
          <li class="list-group-item">Day 6 – Core + flexibility</li>
          <li class="list-group-item">Day 7 – Rest and recovery</li>
        </ul>
      `;
    } else if (type === "month") {
      planContainer.innerHTML = `
        <h4>🏆 1 Month Basketball Plan</h4>
        <ul class="list-group mt-3 text-start" data-aos="fade-left">
          <li class="list-group-item">Week 1 – Skill sharpening + conditioning</li>
          <li class="list-group-item">Week 2 – Explosive power + mobility</li>
          <li class="list-group-item">Week 3 – High-intensity scrimmage training</li>
          <li class="list-group-item">Week 4 – Match simulation + mental focus</li>
        </ul>
      `;
    }
  
    AOS.init();
  }
  