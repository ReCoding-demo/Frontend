import { useRef } from 'react';
import ReviewCard from '../components/review/ReviewCard';
import Button from '../components/ui/Button';
import ProfileImg from '../components/ui/ProfileImg';
import StarRating from '../components/ui/StarRating';
import Tag from '../components/ui/Tag';
import { ExDetailData } from '../data/developerDetail';

const DeveloperDetailPage = () => {
  const contentsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* 베너 */}
      <div className="w-full h-[183px] flex justify-center items-center">
        <img
          src="/images/banner-detail.png"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="m-auto flex h-[2000px] min-w-[850px] max-w-[1060px] w-[95%] relative"
        style={{ height: `${contentsRef.current?.clientHeight}px` }}
      >
        {/* 프로필 */}
        <div className="w-[250px] h-fit flex flex-col items-center gap-5 py-10 sticky top-0">
          <ProfileImg size="xl" />
          <p className="text-gray-100 headline-sm">닉네임</p>

          <div className="w-full p-6 grid grid-cols-[1fr_3.3fr] grid-rows-3 gap-y-3 gap-x-4 rounded-xl border-[1px] border-gray-20 bg-gray-10">
            <p className="label-md text-gray-60">회사명</p>
            <p className="label-md text-gray-80">{ExDetailData.company}</p>
            <p className="label-md text-gray-60">직무명</p>
            <p className="label-md text-gray-80">{ExDetailData.job}</p>
            <p className="label-md text-gray-60">경력</p>
            <p className="label-md text-gray-80">
              {ExDetailData.careerYear}년차
            </p>
          </div>

          <div className="flex w-full justify-center items-center gap-7 p-5 rounded-xl border-[1px] border-gray-20 bg-gray-10">
            <div className="flex flex-col items-center gap-1">
              <p className="label-sm text-gray-80">리뷰한 프로젝트</p>
              <p className="headline-sm text-green-70">
                {ExDetailData.projectCount}개
              </p>
            </div>
            <div className="h-[50px] w-px bg-gray-30" />
            <div className="flex flex-col items-center gap-1">
              <p className="label-sm text-gray-80">후기 평균 평점</p>
              <div className="flex gap-2 items-center">
                <p className="headline-sm text-green-70">
                  {ExDetailData.starRating}
                </p>
                <p className="label-md text-gray-50">/5.0</p>
              </div>
            </div>
          </div>
          <Button size="lg" color="" fullWidth onClick={() => {}}>
            코드리뷰 신청하기
          </Button>
        </div>

        {/* 컨텐츠 */}
        <div
          className="absolute flex flex-col gap-10 top-[-40px] right-0 w-[68%] max-w-[700px]"
          ref={contentsRef}
        >
          {/* Info Box */}
          <div className="w-full p-7 grid grid-cols-[1fr_5fr] grid-rows-3 gap-y-4 gap-x-3 rounded-xl border-[1px] border-gray-30 bg-white">
            <p className="label-md text-gray-80 self-center">기술 스택</p>
            <div className="flex items-center gap-[10px]">
              {ExDetailData.stacks.map((item, idx) => (
                <Tag key={idx} color="blue">
                  {item}
                </Tag>
              ))}
            </div>
            <p className="label-md text-gray-80 self-center">직무</p>
            <Tag color="purple">프론트엔드 개발</Tag>
            <p className="label-md text-gray-80 self-center">Github 링크</p>
            <a
              className="label-md underline text-gray-60 self-center"
              href={ExDetailData.githubLink}
              target="_blank"
            >
              {ExDetailData.githubLink}
            </a>
          </div>
          {/* 소개글 */}
          <div className="flex flex-col gap-5">
            <p className="title-lg text-gray-100">개발자 소개</p>
            <p className="body-lg text-gray-70">{ExDetailData.introduction}</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="title-lg text-gray-100">코드 스타일</p>
            <p className="body-lg text-gray-70">{ExDetailData.codeStyle}</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="title-lg text-gray-100">커리어 정보</p>
            <p className="body-lg text-gray-70">{ExDetailData.carrerInfo}</p>
          </div>
          <div className="w-full h-px bg-gray-30" />
          {/* 리뷰 */}
          <div className="flex flex-col gap-7">
            <p className="headline-sm text-gray-100">
              <span className="text-green-70">{ExDetailData.reviewCount}</span>
              건의 코드리뷰 후기
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <StarRating score={4.0} size={20} gap={2} />
                <p className="label-md-pro text-gray-60 leading-none">
                  후기 평균 평점{' '}
                  <span className="text-green-70">
                    {ExDetailData.starRating}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                {ExDetailData.hashtags.map((item, idx) => (
                  <Tag key={idx} color="green">
                    {item}
                  </Tag>
                ))}
              </div>
            </div>
            {/* 리뷰 리스트 */}
            <div className="flex flex-col gap-5">
              {ExDetailData.reviewData.map((item) => (
                <ReviewCard key={item.reviewId} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeveloperDetailPage;
