import { useState } from 'react';

import Filter from '../components/home/Filter';
import DeveloperCard from '../components/home/DeveloperCard';
import { developerList } from '../data/developer';
import PlusIcon from '../components/ui/icons/PlusIcon';
import DeveloperProfileTooltip from '../components/home/DeveloperProfileTooltip';

export interface AllSelectedList {
  company: number[];
  job: number[];
  jobYear: number[];
  techStack: number[];
}

const HomePage = () => {
  const [allSelectedList, setAllSelectedList] = useState<AllSelectedList>({
    company: [],
    job: [],
    jobYear: [],
    techStack: [],
  });

  return (
    <div>
      <header
        className="flex h-[15rem] flex-col items-center justify-center gap-8 px-8 py-12 sm:h-[20rem] sm:gap-12"
        style={{
          background:
            'linear-gradient(152deg, rgba(2, 17, 18, 0.85) 35.2%, rgba(17, 83, 60, 0.85) 115.82%)',
        }}
      >
        <img
          src="/images/banner-title.svg"
          alt="네카라쿠배 개발자에게 지금 바로 코드리뷰 받아보세요"
          className="scale-75"
        />
        <img
          src="/images/banner-logo.svg"
          alt="RE;CODING"
          className="scale-75 opacity-70 sm:scale-100"
        />
      </header>
      <div className="px-5">
        <div className="mx-auto mt-5 w-[1060px] items-start">
          <div className="flex items-center justify-between">
            <h1 className="headline-sm">
              원하는 조건의 현직 개발자를 찾아보세요
            </h1>
            <DeveloperProfileTooltip>
              <button className="flex items-center gap-2 rounded-md bg-green-10 px-4 py-3 text-green-70">
                <span className="text-[1.125rem]">
                  <PlusIcon />
                </span>
                <span className="label-md-pro">개발자 프로필 등록</span>
              </button>
            </DeveloperProfileTooltip>
          </div>
          <div className="mt-5 flex gap-3">
            <Filter
              label="회사"
              description="회사를 선택해주세요."
              labelList={['대기업', '중견기업', '스타트업']}
              allSelectedList={allSelectedList}
              setAllSelectedList={setAllSelectedList}
              keyName="company"
              maxSelect={1}
            />
            <Filter
              label="직무"
              description="직무를 선택해주세요."
              labelList={[
                '프론트엔드 개발',
                '백엔드 개발',
                '안드로이드 개발',
                'iOS 개발',
                '서버 개발',
              ]}
              allSelectedList={allSelectedList}
              setAllSelectedList={setAllSelectedList}
              keyName="job"
              maxSelect={2}
            />
            <Filter
              label="경력"
              description="경력을 선택해주세요."
              labelList={['신입', '1년차', '2년차', '3년차', '그 이상']}
              allSelectedList={allSelectedList}
              setAllSelectedList={setAllSelectedList}
              keyName="jobYear"
              maxSelect={1}
            />
            <Filter
              label="개발 스택"
              description="개발 스택을 선택해주세요."
              labelList={[
                'Python',
                'Spring Framework',
                'AWS',
                'Git',
                'iOS',
                'HTML',
                'Javascript',
                'MySQL',
                'SQL',
                'Linux',
                'Android',
                'Kotlin',
                'Swift',
                'C / C++',
                'PHP',
                'Docker',
                'React',
                'Github',
                'JPA',
                'C++',
              ]}
              allSelectedList={allSelectedList}
              setAllSelectedList={setAllSelectedList}
              keyName="techStack"
            />
          </div>
          <main>
            <p className="label-lg my-6 text-gray-80">
              조건에 맞는{' '}
              <b className="label-lg-pro text-green-70">
                {developerList.length}
              </b>
              명의 현직 개발자가 기다리고 있어요.
            </p>
            <div className="grid grid-cols-1 gap-x-5 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
              {developerList.map((developer) => (
                <DeveloperCard key={developer.id} developer={developer} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
