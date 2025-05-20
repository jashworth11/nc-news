export const HomePage = ({ user }) => {
  return (
    <main className="home-page">
      <h1>
        {user
          ? `Hello, ${user.username}! Head to the articles to catch up.`
          : "Login to post and interact with articles!"}
      </h1>
    </main>
  );
};
