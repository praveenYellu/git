// Sample match details (you can replace this with actual match data)
const matchDetails = {
    teamA: "Team A",
    teamB: "Team B",
    date: "2023-07-22",
    location: "Cricket Stadium",
  };
  
  // Sample initial scores (you can replace this with actual scores)
  let scores = {
    teamA: { runs: 0, wickets: 0 },
    teamB: { runs: 0, wickets: 0 },
  };
  
  // Function to display match details
  function displayMatchDetails() {
    // Access the match-details div and update its content with the match details
    const matchDetailsDiv = document.querySelector(".match-details");
    matchDetailsDiv.innerHTML = `
      <h2>${matchDetails.teamA} vs ${matchDetails.teamB}</h2>
      <p>Date: ${matchDetails.date}</p>
      <p>Location: ${matchDetails.location}</p>
    `;
  }
  
  // Function to update scores
  function updateScores() {
    // Access the score-update div and update its content with the score update form
    const scoreUpdateDiv = document.querySelector(".score-update");
    scoreUpdateDiv.innerHTML = `
      <h3>Update Scores</h3>
      <form id="score-form">
        <label for="teamA-runs">Runs scored by ${matchDetails.teamA}:</label>
        <input type="number" id="teamA-runs" value="${scores.teamA.runs}" required>
        <br>
        <label for="teamA-wickets">Wickets fallen for ${matchDetails.teamA}:</label>
        <input type="number" id="teamA-wickets" value="${scores.teamA.wickets}" required>
        <br>
        <label for="teamB-runs">Runs scored by ${matchDetails.teamB}:</label>
        <input type="number" id="teamB-runs" value="${scores.teamB.runs}" required>
        <br>
        <label for="teamB-wickets">Wickets fallen for ${matchDetails.teamB}:</label>
        <input type="number" id="teamB-wickets" value="${scores.teamB.wickets}" required>
        <br>
        <button type="submit">Update</button>
      </form>
    `;
  
    // Add event listener to the form for score update submission
    const scoreForm = document.getElementById("score-form");
    scoreForm.addEventListener("submit", handleScoreUpdate);
  }
  
  // Function to handle score update form submission
  function handleScoreUpdate(event) {
    event.preventDefault();
    scores.teamA.runs = parseInt(document.getElementById("teamA-runs").value);
    scores.teamA.wickets = parseInt(document.getElementById("teamA-wickets").value);
    scores.teamB.runs = parseInt(document.getElementById("teamB-runs").value);
    scores.teamB.wickets = parseInt(document.getElementById("teamB-wickets").value);
  
    // Update match result
    displayMatchResult();
  
    // Call function to update UI with latest scores
    updateScores();
  }
  
  // Function to display match result
  function displayMatchResult() {
    // Calculate the winner based on scores
    let winner = "";
    if (scores.teamA.runs > scores.teamB.runs) {
      winner = matchDetails.teamA;
    } else if (scores.teamB.runs > scores.teamA.runs) {
      winner = matchDetails.teamB;
    } else {
      winner = "It's a Tie!";
    }
  
    // Display the match result
    const matchResultDiv = document.querySelector(".match-result");
    matchResultDiv.innerHTML = `
      <h3>Match Result</h3>
      <p>Winner: ${winner}</p>
      <p>${winner !== "It's a Tie!" ? `Won by ${Math.abs(scores.teamA.runs - scores.teamB.runs)} runs` : ""}</p>
    `;
  }
  
  // Initial setup when the page loads
  function initialize() {
    displayMatchDetails();
    updateScores();
  }
  
  // Call the initialize function when the page loads
  window.onload = initialize;
  