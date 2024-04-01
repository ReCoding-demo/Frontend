import DeveloperCard from '../components/home/DeveloperCard';
import { developerList } from '../data/developer';

const HomePage = () => {
  return (
    <div className="px-5">
      <main className="m-auto max-w-screen-lg">
        <p className="my-6 label-lg text-gray80">
          <b className="text-green70 label-lg-pro">{developerList.length}</b>
          명의 현직 개발자가 기다리고 있어요.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-9">
          {developerList.map((developer) => (
            <DeveloperCard key={developer.id} developer={developer} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
