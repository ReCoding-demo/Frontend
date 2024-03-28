import { useRef } from 'react';
import ReviewCard from '../components/review/ReviewCard';
import Button from '../components/ui/Button';
import ProfileImg from '../components/ui/ProfileImg';
import StarRating from '../components/ui/StarRating';
import Tag from '../components/ui/Tag';

const DeveloperDetailPage = () => {
  const stacks = ['개발 스택1', '개발 스택2', '개발 스택3', '개발 스택4'];
  const hashtags = ['친절해요', '준비를 잘 해줘요', '다양한 방법을 제시해줘요'];
  const reviewData = [
    {
      reviewId: 1,
      starRating: 4.0,
      date: '2024.03.04',
      hashtags: ['친절해요', '준비를 잘 해줘요', '다양한 방법을 제시해줘요'],
      content:
        '리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. ',
      project: '의뢰한 프로젝트에 대한 설명',
      request: '코드에 코멘트를 꼼꼼하게 달아주세요. ~~가 모르겠어요. ...',
      stacks: ['개발 스택1', '개발스택2'],
      profileUrl: '',
      nickname: '후니',
    },
    {
      reviewId: 2,
      starRating: 4.0,
      date: '2024.03.04',
      hashtags: ['친절해요', '준비를 잘 해줘요', '다양한 방법을 제시해줘요'],
      content:
        '리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. ',
      project: '의뢰한 프로젝트에 대한 설명',
      request: '코드에 코멘트를 꼼꼼하게 달아주세요. ~~가 모르겠어요. ...',
      stacks: ['개발 스택1', '개발스택2'],
      profileUrl: '',
      nickname: '후니',
    },
    {
      reviewId: 3,
      starRating: 4.0,
      date: '2024.03.04',
      hashtags: ['친절해요', '준비를 잘 해줘요', '다양한 방법을 제시해줘요'],
      content:
        '리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. 리뷰 작성 글 텍스트가 들어갑니다. ',
      project: '의뢰한 프로젝트에 대한 설명',
      request: '코드에 코멘트를 꼼꼼하게 달아주세요. ~~가 모르겠어요. ...',
      stacks: ['개발 스택1', '개발스택2'],
      profileUrl: '',
      nickname: '후니',
    },
  ];

  const contentsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* 베너 */}
      <div className="w-full h-[183px] flex justify-center items-center bg-slate-100">
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
          <p className="text-gray100 headline-sm">닉네임</p>

          <div className="w-full p-6 grid grid-cols-[1fr_3.3fr] grid-rows-3 gap-y-3 gap-x-4 rounded-xl border-[1px] border-gray20 bg-gray10">
            <p className="label-md text-gray60">회사명</p>
            <p className="label-md text-gray80">카카오</p>
            <p className="label-md text-gray60">직무명</p>
            <p className="label-md text-gray80">프론트엔드 개발자</p>
            <p className="label-md text-gray60">경력</p>
            <p className="label-md text-gray80">3년차</p>
          </div>

          <div className="flex w-full justify-center items-center gap-7 p-5 rounded-xl border-[1px] border-gray20 bg-gray10">
            <div className="flex flex-col items-center gap-1">
              <p className="label-sm text-gray80">리뷰한 프로젝트</p>
              <p className="headline-sm text-green70">15개</p>
            </div>
            <div className="h-[50px] w-[1px] bg-gray30" />
            <div className="flex flex-col items-center gap-1">
              <p className="label-sm text-gray80">후기 평균 평점</p>
              <div className="flex gap-2 items-center">
                <p className="headline-sm text-green70">4.0</p>
                <p className="label-md text-gray50">/5.0</p>
              </div>
            </div>
          </div>
          <Button size="lg" color="" fullWidth onClick={() => {}}>
            코드리뷰 신청하기
          </Button>
        </div>

        {/* 컨텐츠 */}
        <div
          className="absolute flex flex-col gap-10 top-[-40px] right-0 bg-slate-300 w-[68%] max-w-[700px]"
          ref={contentsRef}
        >
          {/* Info Box */}
          <div className="w-full p-7 grid grid-cols-[1fr_5fr] grid-rows-3 gap-y-4 gap-x-3 rounded-xl border-[1px] border-gray30 bg-white">
            <p className="label-md text-gray80 self-center">기술 스택</p>
            <div className="flex items-center gap-[10px]">
              {stacks.map((item, idx) => (
                <Tag key={idx} color="blue">
                  {item}
                </Tag>
              ))}
            </div>
            <p className="label-md text-gray80 self-center">직무</p>
            <Tag color="purple">프론트엔드 개발</Tag>
            <p className="label-md text-gray80 self-center">Github 링크</p>
            <a
              className="label-md underline text-gray60 self-center"
              href="https://github.com/seungzzok"
              target="_blank"
            >
              https://github.com/seungzzok
            </a>
          </div>
          {/* 소개글 */}
          <div className="flex flex-col gap-5">
            <p className="title-lg text-gray100">개발자 소개</p>
            <p className="body-lg text-gray70">
              안녕하세요, 프론트엔드 개발자 류관곤입니다. 근데 백엔드도 해요. 전
              천재랍니다.. 우하하하하 저에게 코드리뷰 받으시면 네이버
              가실수있어요 그럴걸요 ? 후회하지않으실겁니다다다다 안녕하세요,
              프론트엔드 개발자 류관곤입니다. 근데 백엔드도 해요. 전
              천재랍니다.. 우하하하하
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="title-lg text-gray100">코드 스타일</p>
            <p className="body-lg text-gray70">
              안녕하세요, 프론트엔드 개발자 류관곤입니다. 근데 백엔드도 해요. 전
              천재랍니다.. 우하하하하 저에게 코드리뷰 받으시면 네이버
              가실수있어요 그럴걸요 ? 후회하지않으실겁니다다다다 안녕하세요,
              프론트엔드 개발자 류관곤입니다. 근데 백엔드도 해요. 전
              천재랍니다.. 우하하하하
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="title-lg text-gray100">커리어 정보</p>
            <p className="body-lg text-gray70">
              안녕하세요, 프론트엔드 개발자 류관곤입니다. 근데 백엔드도 해요. 전
              천재랍니다.. 우하하하하 저에게 코드리뷰 받으시면 네이버
              가실수있어요 그럴걸요 ? 후회하지않으실겁니다다다다 안녕하세요,
              프론트엔드 개발자 류관곤입니다. 근데 백엔드도 해요. 전
              천재랍니다.. 우하하하하
            </p>
          </div>
          <div className="w-full h-[1px] bg-gray30" />
          {/* 리뷰 */}
          <div className="flex flex-col gap-7">
            <p className="headline-sm text-gray100">
              <span className="text-green70">5</span>건의 코드리뷰 후기
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <StarRating score={4.0} size={20} gap={2} />
                <p className="label-md-pro text-gray60 leading-none">
                  후기 평균 평점 <span className="text-green70">4.0</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                {hashtags.map((item, idx) => (
                  <Tag key={idx} color="green">
                    {item}
                  </Tag>
                ))}
              </div>
            </div>
            {/* 리뷰 리스트 */}
            <div className="flex flex-col gap-5">
              {reviewData.map((item) => (
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
