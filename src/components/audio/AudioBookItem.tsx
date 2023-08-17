import Image from 'next/image';
import Link from 'next/link';

interface Props {
  imgSrc: string;
  bookName: string;
  author: [{name: String}];
  audiobookId: string;
}

const AudioBookItem = ({ imgSrc, bookName, author }: Props) => {
  return (
    <div className="w-full h-full">

      <Image
        className="w-full aspect-[198/297] cursor-pointer"
        width={198}
        height={297}
        src={imgSrc}
        alt={bookName}
      />
      <div className="font-semibold pt-2 text-[18px] cursor-pointer">
        {bookName}
      </div>
      <div className="pt-2 cursor-pointer">{author?.[0]?.name}</div>

      {/* <Link href={`/audiobook/${audiobookId}`}>
        <a>
          <Image
            className="w-full aspect-[198/297] cursor-pointer"
            width={198}
            height={297}
            src={imgSrc}
            alt={bookName}
          />
          <div className="font-semibold pt-2 text-[18px] cursor-pointer">
            {bookName}
          </div>
          <div className="pt-2 cursor-pointer">{author?.[0]?.name}</div>
        </a>
      </Link> */}

      <Link href="`/audiobook/${audiobookId}`" className="cursor-pointer" >
      <Image
            className="w-full aspect-[198/297] cursor-pointer"
            width={198}
            height={297}
            src={imgSrc}
            alt={bookName}
          />
          <div className="font-semibold pt-2 text-[18px] cursor-pointer">
            {bookName}
          </div>
          <div className="pt-2 cursor-pointer">{author?.[0]?.name}</div>
      </Link>

    </div>

  );
};

export default AudioBookItem;
