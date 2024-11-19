import { useState } from "react";

export default function VoteButton({ id, votes, updateVotes }) {
  const [voteChange, setVoteChange] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState(null);

  const handleVote = (inc) => {
    setVoteChange(inc);
    setHasVoted(true);
    updateVotes(id, inc)
      .then(() => {
        setError(null);
      })
      .catch((err) => {
        setVoteChange(0);
        setHasVoted(false);
        setError("Failed to update vote. Please try again.");
        console.error("Error updating votes", err);
      });
  };

  return (
    <div className="vote-button">
      <button onClick={() => handleVote(1)} disabled={hasVoted}>
        +
      </button>
      <p>{votes + voteChange}</p>
      <button onClick={() => handleVote(-1)} disabled={hasVoted}>
        -
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
