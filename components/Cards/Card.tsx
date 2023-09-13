import React, { FC } from "react";
import Image from "next/image";
import { ICharacter } from "@/types/characters.interface";
import { textLimit } from "../Text/TextLimit";
import Link from "next/link";

const Card: FC<ICharacter> = ({
  id,
  name,
  comics,
  description,
  events,
  modified,
  resourceURI,
  series,
  stories,
  thumbnail,
  urls,
}) => {
  return (
    <div className="cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        src={`${thumbnail?.path}.${thumbnail?.extension}`}
        alt={`${name}`}
        className="rounded-t-lg w-[100%] h-[300px] md:h-[350px] object-cover object-left-top"
        height={100}
        width={400}
      />
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description
            ? textLimit(description, 70)
            : "Too Cool for Description..."}
        </p>
      </div>
    </div>
  );
};

export default Card;
