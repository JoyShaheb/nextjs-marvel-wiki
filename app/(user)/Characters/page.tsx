"use client";
import React from "react";
import { fetchCharactersURL } from "@/libs/utils";
import { IMarvelApiCharactersResponse } from "@/types/characters.interface";

const page = async () => {
  const fetchCharacters: IMarvelApiCharactersResponse = await fetch(
    fetchCharactersURL
  )
    .then((res) => res.json())
    .catch((err) => {
      throw new Error("Error fetching data from API");
    });

  console.log(fetchCharacters?.data?.results);

  return <div>page</div>;
};

export default page;
