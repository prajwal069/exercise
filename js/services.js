// Function to select the sport
function selectSport(sport) {
    selectedSport = sport;  // Set the selected sport to the variable

    // Store the selected sport in sessionStorage
    sessionStorage.setItem("sport", selectedSport);
    
    // Log for debugging
    console.log("Selected Sport:", selectedSport);

    // Show the duration modal after selecting the sport
    document.getElementById("duration-modal").classList.remove("hidden");
}

// Function to select the duration
function selectDuration(duration) {
    // Get the selected sport from sessionStorage
    const sport = sessionStorage.getItem("sport");

    // Store the duration in sessionStorage
    sessionStorage.setItem("duration", duration);

    let redirectUrl = "";

    // Create redirection logic based on sport + duration
    if (sport === "Basketball" && duration === "1week") {
        redirectUrl = "/excersices/pages/plans/basketball-1week.html";
    } else if (sport === "Basketball" && duration === "1month") {
        redirectUrl = "/excersices/pages/plans/basketball-1month.html";
    } else if (sport === "Football" && duration === "1week") {
        redirectUrl = "/excersices/pages/plans/football-1week.html";
    } else if (sport === "Football" && duration === "1month") {
        redirectUrl = "/excersices/pages/plans/football-1month.html";
    } else if (sport === "Cricket" && duration === "1week") {
        redirectUrl = "/excersices/pages/plans/cricket-1week.html";
    } else if (sport === "Cricket" && duration === "1month") {
        redirectUrl = "/excersices/pages/plans/cricket-1month.html";
    } else if (sport === "Hockey" && duration === "1week") {
        redirectUrl = "/excersices/pages/plans/hockey-1week.html";
    } else if (sport === "Hockey" && duration === "1month") {
        redirectUrl = "/excersices/pages/plans/hockey-1month.html";
    }

    // Redirect if URL is found
    if (redirectUrl !== "") {
        window.location.href = redirectUrl;
    } else {
        console.error("No redirect URL found for selected sport and duration.");
    }
}

// Function to close the duration modal
function closeModal() {
    document.getElementById("duration-modal").classList.add("hidden");
}
