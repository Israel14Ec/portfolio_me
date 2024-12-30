import { CardProjectT } from "../../../../types";

type GitHubListProps = {
  gitHubLinks: CardProjectT["gitHubLink"];
};

export function GitHubList({ gitHubLinks }: GitHubListProps) {
  return (
    <>
      {gitHubLinks?.map((git, index) => (
        <div  key={index} className="flex gap-2 mb-1 text-tertiary text-sm">
            <p className=" font-semibold"> { git.title}: </p>
            <a
            href={git.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="" 
            >
            {git.link}
            </a>
        </div>
      ))}
    </>
  );
}
