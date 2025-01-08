"use client";
import PostLayout from "src/components/common/post/PostLayout";
import { projects } from "src/components/data/ProjectList";

type ProjectDetailProps = {
  slug: string;
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ slug }) => {
  const project = projects.find((project) => project._id === slug);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <PostLayout
      post={{
        _id: project._id,
        slug: project._id,
        title: project.title,
        publishedAt: new Date(project.workEndedAt),
        // publishedAt: project.workEndedAt,
        readingTime: "5 min read",
        project: project,
      }}
    >
      <p className="whitespace-pre-line">{project.summary}</p>
      <h2 className="font-bold">개발환경</h2>
      <hr />

      <pre className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-transparent dark:bg-black">
        <code className="text-gray-900 dark:text-gray-100">
          {/* project.company가 있으면 아래 코드를 표시 */}
          {project.company && (
            <>
              <span className="code-line">
                근무처: {`${project.company} · ${project.rank}`}
              </span>
              <br />
            </>
          )}

          <span className="code-line">{`${project.position} - ${project.workStartedAt} ~ ${project.workEndedAt}`}</span>
        </code>
      </pre>

      <ul>
        <li>{project.mainSkill}</li>
        <li>{project.subSkill}</li>
      </ul>
      <h2>업무</h2>
      <hr />
      <ul>
        {project.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      <h2>회고</h2>
      <hr />
      <ul>
        {/* {project.recall.map((rc, index) => ( */}
        {project.recall.map((rc, index) => (
          <li key={index}>{rc}</li>
        ))}
      </ul>
    </PostLayout>
  );
};

export default ProjectDetail;
