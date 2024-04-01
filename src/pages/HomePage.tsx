import { useState } from 'react';

import Filter from '../components/home/Filter';

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
    <div className="mx-auto mt-5 w-[1060px] items-start">
      <div className="flex gap-3">
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
    </div>
  );
};

export default HomePage;
