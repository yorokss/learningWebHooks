import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function GitLab() {
  const [userData, setUserData] = useState(null);
  const [projects, setProjects] = useState([]);
  const username = "yogesh.rajput";
 const data = useLoaderData();

//   useEffect(() => {
//     fetch(`https://gitlab.com/api/v4/users?username=${username}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.length > 0) {
//           const user = data[0];
//           setUserData(user);
//           console.log(user);

//           fetch(`https://gitlab.com/api/v4/users/${user.id}/projects`)
//             .then((res) => res.json())
//             .then((projectsData) => setProjects(projectsData))
//             .catch((error) => console.error("Error fetching projects:", error));
//         } else {
//           console.error("User not found");
//         }
//       })
//       .catch((error) => console.error("Error fetching user data:", error));
//   }, [username]);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {data ? (
        <>
          <h1>{data.name || username}'s GitLab Profile</h1>
          <p>Username: {data.username}</p>
          <img
            src={data.avatar_url}
            alt="GitLab avatar"
            className="w-48 h-48 rounded-full mx-auto mt-4"
          />
          <h2 className="mt-4">Projects:</h2>
          <ul>
            {projects.length > 0 ? (
              projects.map((project) => (
                <li key={project.id}>{project.name}</li>
              ))
            ) : (
              <p>No projects found.</p>
            )}
          </ul>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default GitLab;


export const gitLabInfo = async () => {
      const response = await fetch(`https://gitlab.com/api/v4/users?username=yogesh.rajput`);
      const data = await response.json();
      return data[0];
}