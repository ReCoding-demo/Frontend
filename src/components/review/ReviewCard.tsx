import ProfileImg from '../ui/ProfileImg';
import StarRating from '../ui/StarRating';
import Tag from '../ui/Tag';

interface ReviewCard {
  data: {
    reviewId: number;
    starRating: number;
    date: string;
    hashtags: string[];
    content: string;
    project: string;
    request: string;
    stacks: string[];
    profileUrl: string;
    nickname: string;
  };
}

const ReviewCard = ({ data }: ReviewCard) => {
  return (
    <div className="flex flex-col gap-6 p-5 border-[1px] border-gray-30 rounded-xl">
      {/* 정보 */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <StarRating score={4.0} size={16} gap={2} />
          <p className="label-sm text-gray-60 leading-none">{data.date}</p>
        </div>
        <div className="flex items-center gap-2">
          {data.hashtags.map((item, idx) => (
            <Tag as="span" key={idx} color="green">
              {item}
            </Tag>
          ))}
        </div>
      </div>

      {/* 컨텐츠 */}
      <p className="body-md text-gray-80">{data.content}</p>

      {/* 상세정보 */}
      <div className="w-full p-5 grid grid-cols-[1fr_5fr] grid-rows-3 gap-y-3 gap-x-4 rounded-xl border-[1px] border-gray-20 bg-gray-10">
        <p className="label-md text-gray-60 self-center">의뢰한 프로젝트</p>
        <p className="label-md text-gray-80 self-center">{data.project}</p>
        <p className="label-md text-gray-60 self-center">요청사항</p>
        <p className="label-md text-gray-80 self-center">{data.request}</p>
        <p className="label-md text-gray-60 self-center">도움 받은 스택</p>
        <div className="flex items-center gap-[6px]">
          {data.stacks.map((item, idx) => (
            <Tag as="span" key={idx} color="blue">
              {item}
            </Tag>
          ))}
        </div>
      </div>

      {/* 프로필 */}
      <div className="flex items-center gap-3">
        <ProfileImg size="sm" imgUrl={data.profileUrl} />
        <p className="label-sm text-gray-80">{data.nickname}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
