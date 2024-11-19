import { useEffect, useState } from "react";
import { fetchTopics } from "../api";
import { Link } from "react-router-dom";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return null;
  if (error) return null;

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
