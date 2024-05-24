let team1Votes = 0;
let team2Votes = 0;
let hasVoted = false;

// Load votes from local storage
function loadVotes() {
    team1Votes = parseInt(localStorage.getItem('team1Votes')) || 0;
    team2Votes = parseInt(localStorage.getItem('team2Votes')) || 0;
    hasVoted = localStorage.getItem('hasVoted') === 'true';

    updateResults();
}

// Save votes to local storage
function saveVotes() {
    localStorage.setItem('team1Votes', team1Votes);
    localStorage.setItem('team2Votes', team2Votes);
    localStorage.setItem('hasVoted', hasVoted);
}

function vote(team) {
    if (hasVoted) {
        alert("You have already voted!");
        return;
    }

    if (team === 'team1') {
        team1Votes++;
    } else if (team === 'team2') {
        team2Votes++;
    }
    hasVoted = true;
    saveVotes();
    updateResults();
}

function updateResults() {
    document.getElementById('team1Votes').innerText = `Team 1: ${team1Votes} votes`;
    document.getElementById('team2Votes').innerText = `Team 2: ${team2Votes} votes`;
    document.getElementById('totalVotes').innerText = `Total Votes: ${team1Votes + team2Votes}`;
}

// Load the votes when the page loads 
// done
window.onload = loadVotes;
