import Image from "next/image";
import Link from "next/link";

interface Props {
  imgSrc: string;
  bookName: string;
  author: [{ name: String }];
  audiobookId: string;
}

const AudioBookItem = ({ imgSrc, bookName, author, audiobookId }: Props) => {
  return (
    <div className="w-full h-full">
      <Link href={`/audiobook/${audiobookId}`}>
        <Image
          className="w-full aspect-[198/297]"
          width={198}
          height={297}
          src={imgSrc}
          alt={bookName}
        />
        <div className="font-semibold pt-2 text-[18px]">{bookName}</div>
        <div className="pt-2">{author?.[0]?.name}</div>

      </Link>
    </div>
  );
};

export default AudioBookItem;
