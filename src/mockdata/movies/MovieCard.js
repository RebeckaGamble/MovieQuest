<ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
  {movies &&
    movies.slice(0, 2).map((movie) => <li key={movie.id}>{movie.title}</li>)}
  {movies.length > 0
    ? movies &&
      movies.slice(0, 2).map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <li className="flex flex-col w-full py-6 h-auto mx-auto bg-white text-black sm:shadow-yellow-400/70 shadow-md">
            <div className="h-full px-4">
              <div className="w-full h-[380px]">
                <img
                  className="w-full h-full object-cover"
                  src={movie.img}
                  alt={movie.title}
                />
              </div>
              <div className="relative">
                <h2 className="text-center text-xl font-semibold py-6">
                  {movie.title}
                </h2>
                <p>
                  <span className="font-semibold text-lg py-1">Genre:</span>{" "}
                  {movie.genre.join(", ")}
                </p>

                <i className="absolute flex flex-row items-center top-2 right-0">
                  Rating: {movie.rating}{" "}
                  <FaRegStar className="pl-1" size={20} />
                </i>
                <ul>
                  <span className="font-semibold text-lg py-1">Actors:</span>
                  {movie.actors.map((actor, index) => (
                    <li key={index}> {actor}</li>
                  ))}
                </ul>
                <div>
                  <span className="text-lg font-semibold py-1">Plot:</span>
                  <p>{movie.about}</p>
                </div>
              </div>
            </div>
          </li>
        </Link>
      ))
    : null}
</ul>;
