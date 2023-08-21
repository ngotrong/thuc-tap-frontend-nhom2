import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/utils/api";
import AppLayout from "@/components/layout/AppLayout";
import Image from "next/image";

const AudiobookDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const audiobookId = id as string;

  const { data: audiobookData, error } = useSWR(
    `http://localhost:8080/api/v1/audio-book/${audiobookId}`,
    fetcher
  );

  if (error) {
    return (
      <div className="text-xl font-semibold pt-5">
        Có lỗi xảy ra khi tải dữ liệu.
      </div>
    );
  }

  if (!audiobookData) {
    return (
      <div className="text-xl font-semibold pt-5">Đang tải dữ liệu...</div>
    );
  }

  const audiobook = audiobookData.data;

  return (
    <div>
      <div className="bg-red-700 h-[330px]">
        <AppLayout>
          <div className="flex text-white items-center h-[330px]">
            <Image
              className="rounded-lg w-[198px] h-[297px]"
              width={198}
              height={297}
              src={audiobook?.image}
              alt={audiobook?.title}
            />

            <div className="py-10 flex flex-col items-center flex-1 justify-center">
              <div className="mb-7 text-2xl font-semibold">
                {audiobook?.title}
              </div>
              <div className="mb-7 text-[18px]">
                {audiobook?.author?.[0]?.name}
              </div>
              <div className="mb-7 text-[18px]">{audiobook?.genre?.name}</div>
            </div>

            <Image
              className="rounded-lg w-[198px] h-[297px]"
              width={198}
              height={297}
              src={audiobook?.author?.[0]?.image}
              alt={audiobook?.title}
            />
          </div>
        </AppLayout>
      </div>

      <div className="max-w-6xl mx-auto mt-[30px]">
        <div className="font-semibold text-2xl">Giới thiệu nội dung</div>
        <div className="mt-3 text-[16px]">{audiobook?.desc}</div>
      </div>
      <div className="max-w-6xl mx-auto mt-[50px]">
        <div className="flex text-2xl font-semibold">
          <div className="mr-2">Về tác giả</div>
          <div>{audiobook?.author?.[0]?.name}</div>
        </div>
        <div className="text-[16px] mt-3">
          {audiobook?.author?.[0]?.description}
        </div>
      </div>
    </div>
  );
};

export default AudiobookDetailPage;
