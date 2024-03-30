import ProfileImg from '../ui/ProfileImg';
import Tag from '../ui/Tag';

const DeveloperCard = () => {
  return (
    <article className="border p-5 border-gray30 rounded-xl">
      <div className="flex items-center gap-3">
        <ProfileImg size="lg" />
        <div>
          <h2 className="text-sm font-semibold">닉네임</h2>
          <ul className="flex">
            <li className="flex items-center">
              <span className="font-medium text-xs text-green70">회사명</span>
              <div className="h-3 w-px bg-gray30 mx-1.5" />
            </li>
            <li className="flex items-center">
              <span className="font-medium text-xs text-gray70">직무명</span>
              <div className="h-3 w-px bg-gray30 mx-1.5" />
            </li>
            <li className="flex items-center">
              <span className="font-medium text-xs text-gray70">0년차</span>
            </li>
          </ul>
        </div>
      </div>
      <p className="line-clamp-2 mt-6 text-sm text-gray60">
        개발자 소개(서포팅 텍스트)가 들어갑니다. 두 줄만 보이고 말줄임 ...
        처리됩니다. 개발자 소개(서포팅 텍스트)가 들어갑니다. 두 줄만 보이고
        말줄임 ... 처리됩니다.개발자 소개(서포팅 텍스트)가 들어갑니다. 두 줄만
        보이고 말줄임 ... 처리됩니다.개발자 소개(서포팅 텍스트)가 들어갑니다. 두
        줄만 보이고 말줄임 ... 처리됩니다.
      </p>
      <ul className="mt-5 flex gap-1.5">
        <Tag as="li" color="blue" textSize="xs">
          개발 스택1
        </Tag>
        <Tag as="li" color="blue" textSize="xs">
          개발 스택2
        </Tag>
        <Tag as="li" color="blue" textSize="xs">
          개발 스택3
        </Tag>
        <Tag as="li" color="blue" textSize="xs">
          개발 스택4
        </Tag>
      </ul>
      <ul className="mt-5 flex">
        <li className="flex items-center">
          <span className="text-xs text-gray70 font-medium">
            코드리뷰 <b className="text-green70 font-medium">1</b>회
          </span>
          <div className="h-3 w-px bg-gray30 mx-1.5" />
        </li>
        <li className="flex items-center">
          <span className="text-xs text-gray70 font-medium">
            후기 <b className="text-green70 font-medium">1</b>개
          </span>
        </li>
      </ul>
    </article>
  );
};

export default DeveloperCard;
