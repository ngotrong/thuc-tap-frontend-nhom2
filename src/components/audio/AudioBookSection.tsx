import React from "react";
import AudioBookItem from "./AudioBookItem";
import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  data: any[];
}

const AudioBookSection = ({ title, subtitle, data }: Props) => {
  // console.log(data)

  return (
    <>
      <div className="pt-6">
        <div className="text-2xl font-semibold cursor-pointer hover:text-red-500">
          {title}
        </div>
        <p className="mt-2">
          {subtitle}
          <Link href="/audiobook" className="text-blue-700 cursor-pointer">
            tại đây
          </Link>
        </p>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-5 gap-4">
          {data?.map((book, index) => (
            <div className="col-span-1" key={index}>
              <Link href={`/audiobook/${book.id}`}>
                <AudioBookItem
                  imgSrc={book.image}
                  bookName={book.title}
                  author={book.author}
                  audiobookId={book.id}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AudioBookSection;
