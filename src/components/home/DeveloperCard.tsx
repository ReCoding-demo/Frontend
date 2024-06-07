import { Link } from 'react-router-dom';
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
    <article>
      <Link
        to="/developer/1"
        className="block rounded-xl border border-gray-30 p-5"
      >
        <div className="flex items-center gap-3">
          <ProfileImg size="lg" />
          <div>
            <h2 className="label-md-pro">{developer.name}</h2>
            <ul className="flex">
              <li className="flex items-center">
                <span className="label-sm text-green-70">
                  {developer.company}
                </span>
                <div className="mx-1.5 h-3 w-px bg-gray-30" />
              </li>
              <li className="flex items-center">
                <span className="label-sm text-gray-70">{developer.job}</span>
                <div className="mx-1.5 h-3 w-px bg-gray-30" />
              </li>
              <li className="flex items-center">
                <span className="label-sm text-gray-70">
                  {developer.jobYear}년차
                </span>
              </li>
            </ul>
          </div>
        </div>
        <p className="body-md mt-6 line-clamp-2 text-gray-60">
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
            <span className="label-sm text-gray-70">
              코드리뷰{' '}
              <b className="label-sm text-green-70">
                {developer.codeReviewCount}
              </b>
              회
            </span>
            <div className="mx-1.5 h-3 w-px bg-gray-30" />
          </li>
          <li className="flex items-center">
            <span className="label-sm text-gray-70">
              후기{' '}
              <b className="label-sm text-green-70">{developer.reviewCount}</b>
              개
            </span>
          </li>
        </ul>
      </Link>
    </article>
  );
};

export default DeveloperCard;
