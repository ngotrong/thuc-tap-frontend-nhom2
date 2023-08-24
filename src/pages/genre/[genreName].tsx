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

  const { data: genreData, error } = useSWR(
    `http://localhost:8080/api/v1/genre/search?search=${genreName
      .split("-")
      .join(" ")}`, // Sử dụng query string trong URL
    fetcher
  );

  if (error) {
    return (
      <div className="text-xl font-semibold pt-5">
        Có lỗi xảy ra khi tải dữ liệu.
      </div>
    );
  }

  if (!genreData) {
    return (
      <div className="text-xl font-semibold pt-5">Đang tải dữ liệu...</div>
    );
  }

  const genre = genreData?.data?.results;

  return (
    <div>
      <AudioBookSection
        title={`Sách nói thể loại ${genre?.[0]?.name}`}
        data={genre?.[0]?.audioBook}
      />
    </div>
  );
};

GenreDetailPage.getLayout = AppLayout;

export default GenreDetailPage;
