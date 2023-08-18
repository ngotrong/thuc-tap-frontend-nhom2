import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/utils/api";

const AudiobookDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Sử dụng SWR để fetch dữ liệu audiobook chi tiết dựa vào id
  const { data: audiobookData, error } = useSWR(
    `https://96ff-14-232-135-216.ngrok-free.app/api/v1/audio-book/${id}`,
    fetcher
  );

  // console.log(id);

  if (error) {
    return <div>Có lỗi xảy ra khi tải dữ liệu.</div>;
  }

  if (!audiobookData) {
    return <div>Đang tải dữ liệu...</div>;
  }

  const audiobook = audiobookData.data;

  return (
    <div>
      <h1>{audiobook.title}</h1>
      {/* <p>{audiobook.desc}</p> */}
    </div>
  );
};

export default AudiobookDetailPage;
