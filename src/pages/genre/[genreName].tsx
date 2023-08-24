import React, { useEffect } from "react";
import { useRouter } from "next/router";
import AudioBookSection from "@/components/audio/AudioBookSection";
import useSWR from "swr";
import { fetcher } from "@/utils/api";
import AppLayout from "@/components/layout/AppLayout";

const GenreDetailPage = () => {
  const router = useRouter();
  const query = router.query;
  const genreName: string = String(query.genreName);
  const filter = `{ "genre.name": "$ilike:${genreName?.split("-")?.[0]}"}`; // Tạo filter từ genre.id
  // const queryStringified = queryString.stringify(filter); // Tạo query string từ filter

  console.log(filter);

  const { data: genreData, error } = useSWR(
    `http://localhost:8080/api/v1/audio-book?filter=${filter}`, // Sử dụng query string trong URL
    fetcher
  );

  if (error) {
    return <div className="text-xl font-semibold pt-5">Có lỗi xảy ra khi tải dữ liệu.</div>;
  }

  if (!genreData) {
    return <div className="text-xl font-semibold pt-5">Đang tải dữ liệu...</div>;
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

GenreDetailPage.getLayout = AppLayout;

export default GenreDetailPage;
