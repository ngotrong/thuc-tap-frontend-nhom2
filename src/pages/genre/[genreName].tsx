import React from "react";
import { useRouter } from "next/router";
import AudioBookSection from "@/components/audio/AudioBookSection";
import useSWR from "swr";
import { fetcher } from "@/utils/api";
import queryString from "query-string";

import AudioBookItem from "@/components/audio/AudioBookItem";
import { data } from "autoprefixer";

const GenreDetailPage = () => {
  const router = useRouter();
  const { genreName } = router.query;
  const filter = `{ "genre.id": "${genreName}"}`; // Tạo filter từ genre.id
  // const queryStringified = queryString.stringify(filter); // Tạo query string từ filter

  const { data: genreData, error } = useSWR(
    `http://localhost:8080/api/v1/audio-book?filter=${filter}`, // Sử dụng query string trong URL
    fetcher
  );

  if (error) {
    return <div>Có lỗi xảy ra khi tải dữ liệu.</div>;
  }

  if (!genreData) {
    return <div>Đang tải dữ liệu...</div>;
  }

  const audiobooks = genreData?.data?.results;

  // console.log(audiobooks);
  console.log(router.query);

  return (
    <div>
      <AudioBookSection
        title={`Sách nói thể loại ${audiobooks?.[0]?.genre?.name}`}
        data={audiobooks}
      />
    </div>
  );
};

export default GenreDetailPage;
