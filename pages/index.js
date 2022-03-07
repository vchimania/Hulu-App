import Header from "components/header";
import NavBar from "components/navbar";
import Results from "components/results";
import React from "react";
import requests from "utils/requests";

const Func = ({ results }) => {
  console.log(results);
  return (
    <div className="">
      <title>App</title>
      <Header />
      <NavBar />
      <Results results={results} />
    </div>
  );
};

export default Func;

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`,
    {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent": "*",
        Accept: "application/json; charset=UTF-8, text-plain,*/*",
      },
    }
  ).then((res) => res.json())
  return {
    props: { results: request.results },
  };
}
  
 
