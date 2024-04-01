import ProfileImg from '../ui/ProfileImg';
import Tag from '../ui/Tag';

interface Props {
  developer: {
    name: string;
    company: string;
    job: string;
    jobYear: number;
    introduction: string;
    techStack: string[];
    codeReviewCount: number;
    reviewCount: number;
  };
}

const DeveloperCard = ({ developer }: Props) => {
  return (
    <article className="border p-5 border-gray30 rounded-xl">
      <div className="flex items-center gap-3">
        <ProfileImg size="lg" />
        <div>
          <h2 className="label-md-pro">{developer.name}</h2>
          <ul className="flex">
            <li className="flex items-center">
              <span className="label-sm text-green70">{developer.company}</span>
              <div className="h-3 w-px bg-gray30 mx-1.5" />
            </li>
            <li className="flex items-center">
              <span className="label-sm text-gray70">{developer.job}</span>
              <div className="h-3 w-px bg-gray30 mx-1.5" />
            </li>
            <li className="flex items-center">
              <span className="label-sm text-gray70">
                {developer.jobYear}년차
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p className="line-clamp-2 mt-6 body-md text-gray60">
        {developer.introduction}
      </p>
      <ul className="mt-5 flex gap-1.5">
        {developer.techStack.map((tech, index) => (
          <Tag key={index} as="li" color="blue" textSize="xs">
            {tech}
          </Tag>
        ))}
      </ul>
      <ul className="mt-5 flex">
        <li className="flex items-center">
          <span className="text-gray70 label-sm">
            코드리뷰{' '}
            <b className="text-green70 label-sm">{developer.codeReviewCount}</b>
            회
          </span>
          <div className="h-3 w-px bg-gray30 mx-1.5" />
        </li>
        <li className="flex items-center">
          <span className="text-gray70 label-sm">
            후기{' '}
            <b className="text-green70 label-sm">{developer.reviewCount}</b>개
          </span>
        </li>
      </ul>
    </article>
  );
};

export default DeveloperCard;