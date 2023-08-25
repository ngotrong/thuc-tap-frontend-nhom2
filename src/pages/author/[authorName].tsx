import React from "react";
import { useRouter } from "next/router";
import AudioBookSection from "@/components/audio/AudioBookSection";
import useSWR from "swr";
import { fetcher } from "@/utils/api";
import AppLayout from "@/components/layout/AppLayout";

const AuthorDetailPage = () => {
  const router = useRouter();
  const query = router.query;
  const authorName: string = String(query.authorName);

  const { data: authorData, error } = useSWR(
    `http://localhost:8080/api/v1/author/search?search=${authorName
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

  if (!authorData) {
    return (
      <div className="text-xl font-semibold pt-5">Đang tải dữ liệu...</div>
    );
  }

  const author = authorData?.data?.results;

  return (
    <div>
      <AudioBookSection
        title={`Sách nói của tác giả ${author?.[0]?.name}`}
        data={author?.[0]?.audioBook}
      />
    </div>
  );
};

AuthorDetailPage.getLayout = AppLayout;

export default AuthorDetailPage;
