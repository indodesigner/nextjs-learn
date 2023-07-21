import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/google/repos");
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 2s
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Repos</h2>
      <ul>
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="backdrop-filter backdrop-blur-xl bg-opacity-25 bg-neutral-500 rounded-md border-[1px] border-neutral-500 border-opacity-20 hover:bg-neutral-900 hover:bg-opacity-50 hover:drop-shadow-md transition duration-300 mb-2 p-2"
          >
            <Link href={`/code/repos/${repo.name}`}></Link>
            <h3 className="text-lg font-medium">{repo.name}</h3>
            <p className="text-sm">{repo.description}</p>

            <div className="flex flex-row repo_status">
              <span>
                <FaStar />
                {repo.stargazers_count}
              </span>
              <span>
                <FaCodeBranch />
                {repo.forks_count}
              </span>
              <span>
                <FaEye />
                {repo.watchers_count}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
