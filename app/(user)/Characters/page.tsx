"use client";
import React, { useState } from "react";
import { ICharacter } from "@/types/characters.interface";
import { Card } from "@/components/Cards";
import { gradientTextStyles } from "@/components/Text/GradientText";
import { SearchBar } from "@/components/Form";
import { useGetAllCharactersQuery } from "@/app/store";
import LoadingUI from "@/components/SkeletonLoader/LoadingUI";

const CharactersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useGetAllCharactersQuery(searchTerm);

  if (isLoading) {
    return <LoadingUI />;
  }
  return (
    <div>
      <h2
        className={`mb-4 text-center font-bold text-xl md:text-2xl lg:text-3xl xl:text-3xl ${gradientTextStyles}`}
      >
        Characters List
      </h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-4">
        {data?.data?.results?.map((character: ICharacter) => (
          <Card key={character?.id} {...character} />
        ))}
        {(data?.data?.results === undefined ||
          data?.data?.results?.length === 0) && (
          <div className="">No Data Found For your search Result</div>
        )}
      </div>
    </div>
  );
};

export default CharactersPage;
