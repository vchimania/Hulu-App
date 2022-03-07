import Image from "next/image";
import React from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ result },ref) => {
  const src =
    `https://image.tmdb.org/t/p/w500/${
      result.backdrop_path || result.poster_path
    }` || `https://image.tmdb.org/t/p/w500/${result.poster_path}`;

  return (
    <div ref={ref} className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        loader={() => src}
        src={src}
        height={500}
        width={500}
        alt="thumbnail"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} ~`}
          {""}
          {result.release_date || result.first_air_date} ~{""}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
