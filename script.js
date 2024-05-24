let team1Votes = 0;
let team2Votes = 0;
let hasVoted = false;

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
    updateResults();
}

function updateResults() {
    document.getElementById('team1Votes').innerText = `Team 1: ${team1Votes} votes`;
    document.getElementById('team2Votes').innerText = `Team 2: ${team2Votes} votes`;
    document.getElementById('totalVotes').innerText = `Total Votes: ${team1Votes + team2Votes}`;
}
