import { useEffect, useState } from "react";
import { getTopics } from "../../api";
import { Link } from "react-router-dom";

export const TopicsList = () => {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTopics()
      .then((response) => setTopics(response.data.topics))
      .catch(() => setError("Failed to load topics"));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div className="topics-list">
      <h2>Topics</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
