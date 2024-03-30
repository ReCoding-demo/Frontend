import DeveloperCard from '../components/home/DeveloperCard';

const HomePage = () => {
  return (
    <div className="px-5">
      <main className="m-auto max-w-screen-lg">
        <p className="my-6 font-medium text-gray80">
          <b className="text-green70 font-semibold">10</b>명의 현직 개발자가
          기다리고 있어요.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-9">
          <DeveloperCard />
          <DeveloperCard />
          <DeveloperCard />
          <DeveloperCard />
          <DeveloperCard />
          <DeveloperCard />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
