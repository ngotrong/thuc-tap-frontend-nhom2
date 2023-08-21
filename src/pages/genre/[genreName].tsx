import React from "react";
import { useRouter } from "next/router";
import AudioBookSection from "@/components/audio/AudioBookSection";
import useSWR from "swr";
import { fetcher } from "@/utils/api";
import AudioBookItem from "@/components/audio/AudioBookItem";
import { data } from "autoprefixer";

const GenreDetailPage = () => {
  const router = useRouter();
  const { genreName } = router.query; // Sửa thành "genreName"
  const { data: genreData, error } = useSWR(
    `http://localhost:8080/api/v1/genre/${genreName}`, // Sửa thành "genreName"
    fetcher
  );

  if (error) {
    return <div>Có lỗi xảy ra khi tải dữ liệu.</div>;
  }

  if (!genreData) {
    return <div>Đang tải dữ liệu...</div>;
  }

  const audiobooks = genreData?.data?.audiobooks;

  return (
    <div>
      <AudioBookSection
        title={`Sách nói thể loại ${genreData?.data?.name}`} // Sửa title
        data={audiobooks}
        subtitle=""
      />

      <AudioBookSection
        title="Sách nói nổi bật"
        subtitle="Sách nói nghe nhiều tuần qua, xem tất cả "
        data={genreData?.data?.results || []}
      />

      {/* <AudioBookItem
        imgSrc={book.image}
        bookName={book.title}
        author={book.author}
        audiobookId={book.id}
      /> */}
    </div>
  );
};

export default GenreDetailPage;
