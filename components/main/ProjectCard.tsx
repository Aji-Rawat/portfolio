import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink: string;
}

const ProjectCard = ({ src, title, description, githubLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
        aria-label={`Image for ${title}`}
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link "
          aria-label={`View ${title} project on GitHub`}
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
