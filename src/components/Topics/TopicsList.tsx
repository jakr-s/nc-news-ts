import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../../api/index.ts";
import Topic from "../../types/Topic.ts";

export default function TopicsList() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTopics()
      .then((fetchedTopics) => {
        setTopics(fetchedTopics);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch topics.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading topics...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="topics-list">
      {topics.map((topic) => (
        <Link key={topic.slug} to={`/topics/${topic.slug}`}>
          {topic.slug}
        </Link>
      ))}
    </div>
  );
}
