import Casts from "@/pages/Casts";
import Movie from "@/pages/Movie";
import Recommendation from "@/pages/Recommendation";

interface PageProps {
  params: {
    id: string;
  };
}

const page = ({ params }: PageProps) => {
  const movieId = Number(params.id);

  return (
    <div className="dark:bg-[#201F31] opacity-95">
      <div className="max-w-[1328px]  opacity-95 w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-10">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <Movie movieId={movieId} />
        </div>

        <div className="py-10">
          <h1 className="text-[20px] md:text-2xl font-bold mb-4 text-black dark:text-white">
            Casts
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-2 md:gap-5">
            <Casts movieId={movieId} />
          </div>
        </div>

        <div>
          <h1 className="text-[20px] md:text-2xl font-bold text-black dark:text-white mb-4">
            Recommended for you
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-2 gap-y-4 md:gap-4 place-items-center">
            <Recommendation movieId={movieId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
