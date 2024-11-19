import { useState } from "react";

interface VoteButtonProps {
  id: number;

  votes: number;

  updateVotes: (comment_id: number, inc_votes: number) => Promise<number>;
}

export default function VoteButton({
  id,
  votes,
  updateVotes,
}: VoteButtonProps) {
  const [voteChange, setVoteChange] = useState<number>(0);
  const [hasVoted, setHasVoted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleVote = (inc: number) => {
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
