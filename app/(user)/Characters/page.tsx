"use client";
import React, { useState } from "react";
import { fetchCharactersURL } from "@/libs/utils";
import {
  ICharacter,
  IMarvelApiCharactersResponse,
} from "@/types/characters.interface";
import { Card } from "@/components/Cards";
import { gradientTextStyles } from "@/components/Text/GradientText";
import { SearchBar } from "@/components/Form";

const page = async () => {
  // const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchCharacters: IMarvelApiCharactersResponse = await fetch(
    fetchCharactersURL("")
  )
    .then((res) => res.json())
    .catch((err) => {
      throw new Error("Error fetching data from API");
    });

  console.log(fetchCharacters?.data?.results);

  return (
    <div>
      <h2
        className={`mb-4 text-center font-bold text-xl md:text-2xl lg:text-3xl xl:text-3xl ${gradientTextStyles}`}
      >
        Characters List
      </h2>
      {/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-4">
        {fetchCharacters?.data?.results?.map((character: ICharacter) => (
          <Card key={character?.id} {...character} />
        ))}
        {fetchCharacters?.data?.results === undefined && (
          <div className="">No Data Found For your search Result</div>
        )}
      </div>
    </div>
  );
};

export default page;
