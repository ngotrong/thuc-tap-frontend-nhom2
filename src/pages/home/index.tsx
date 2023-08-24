import React from "react";
import Autocomplete from "@/components/autocomplete";
import AppLayout from "@/components/layout/AppLayout";
import AudioBookSection from "@/components/audio/AudioBookSection";
import useSWR from "swr";
import { fetcher } from "@/utils/api";

function Home() {
  const { data, isLoading } = useSWR(
    "http://localhost:8080/api/v1/audio-book",
    fetcher
  );

  // const { data, isLoading } = useSWR(
  //   "https://373d-14-232-135-216.ngrok-free.app/api/v1/audio-book",
  //   fetcher
  // );

  // const { data, isLoading } = useSWR(
  //   'https://2f75-14-232-135-216.ngrok-free.app/api/v1/audio-book',
  //   fetcher
  // );

  if (isLoading)
    return <div className="text-xl font-semibold pt-5">Loading...</div>;

  if (!data) return <div className="text-xl font-semibold pt-5">Không có dữ liệu</div>;

  const kinhDoanhAudiobooks = data?.data?.results?.filter(
    (audiobook: { genre: { name: string; }; }) => audiobook.genre.name === "Kinh doanh"
  );

  return (
    <div className={"pt-6"}>
      <div className="text-2xl font-semibold">Sách nói</div>
      <div className="grid grid-cols-3 mt-2">
        <h3 className="col-span-2 text-1xl">
          Nghe sách nói từ những cuốn sách bán chạy nhất của các tác giả Việt
          Nam và nước ngoài, miễn phí, cập nhật nhanh chóng.
        </h3>
        <div className="col-span-1">
          <Autocomplete
            className="float-right"
            placeholder="Thể loại sách nói"
            data={[
              "Bất động sản",
              "Chứng khoán",
              "Kinh doanh",
              "Kỹ năng sống",
              "Phong thủy",
              "Sức khỏe & Dinh Dưỡng",
            ]}
          />
        </div>
      </div>

      <AudioBookSection
        title="Sách nói mới nhất"
        subtitle="Sách nói mới cập nhật, xem tất cả "
        data={data?.data?.results || []}
      />
      <AudioBookSection
        title="Sách nói nổi bật"
        subtitle="Sách nói nghe nhiều tuần qua, xem tất cả "
        data={data?.data?.results || []}
      />
      <AudioBookSection
        title="Sách nói kinh doanh"
        subtitle="Sách nói về kỹ năng sống, xem tất cả "
        data={kinhDoanhAudiobooks}
        // data={data?.data?.results || []}
      />
    </div>
  );
}

Home.getLayout = AppLayout;

export default Home;
