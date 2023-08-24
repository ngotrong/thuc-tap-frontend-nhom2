import Image from "next/image";
import Link from "next/link";
interface Props {
  imgSrc: string;
  bookName: string;
  author: [{ name: String }];
  audiobookId: string;
  free?: boolean;
}

const AudioBookItem = ({
  imgSrc,
  bookName,
  author,
  audiobookId,
  free,
}: Props) => {
  return (
    <div className="w-full h-full ">
      <Link href={`/audiobook/${audiobookId}`} className="relative">
        <Image
          className={`w-full aspect-[198/297] object-cover`}
          width={198}
          height={297}
          src={imgSrc}
          alt={bookName}
        />
        {!free ? (
          <div className="absolute top-0 left-0 bg-black text-white px-2 py-1 rounded">
            VIP
          </div>
        ) : (
          ""
        )}
        <div className="font-semibold pt-2 text-[18px]">{bookName}</div>
        <div className="pt-2">{author?.[0]?.name}</div>
      </Link>
    </div>
  );
};

export default AudioBookItem;
