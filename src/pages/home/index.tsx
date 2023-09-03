import React, { useEffect, useState } from "react";
import Autocomplete from "@/components/autocomplete";
import AppLayout from "@/components/layout/AppLayout";
import AudioBookSection from "@/components/audio/AudioBookSection";
import useSWR from "swr";
import { fetcher } from "@/utils/api";
import genreApi from "@/utils/genreApi";
import { useRouter } from "next/router";

function Home() {
  const { data, isLoading } = useSWR(
    "http://localhost:8080/api/v1/audio-book",
    fetcher
  );

  const [genres, setGenres] = useState<any>([]);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, [router]);

  useEffect(() => {
    genreApi.getListGenre({}).then((resp) => setGenres(resp?.data?.results));
  }, []);

  if (isLoading)
    return <div className="pt-5 text-xl font-semibold">Loading...</div>;

  if (!data)
    return <div className="pt-5 text-xl font-semibold">Không có dữ liệu</div>;

  const kinhDoanhAudiobooks = data?.data?.results?.filter(
    (audiobook: { genre: { name: string } }) =>
      audiobook.genre.name === "Kinh doanh"
  );

  const trinhThamAudiobooks = data?.data?.results?.filter(
    (audiobook: { genre: { name: string } }) =>
      audiobook.genre.name === "Trinh thám"
  );

  const tieuThuyetAudiobooks = data?.data?.results?.filter(
    (audiobook: { genre: { name: string } }) =>
      audiobook.genre.name === "Tiểu thuyết"
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
            data={
              genres?.map((genre: { id: any; name: any }) => ({
                id: genre.id,
                name: genre.name,
              })) ?? []
            }
          />
        </div>
      </div>

      <AudioBookSection
        title="Sách nói thể loại tiểu thuyết"
        subtitle="Sách nói nghe nhiều tuần qua, xem tất cả "
        data={tieuThuyetAudiobooks}
        genreName="tieu-thuyet"
        // data={data?.data?.results || []}
      />
      <AudioBookSection
        title="Sách nói thể loại kinh doanh"
        subtitle="Sách nói về kỹ năng sống, xem tất cả "
        data={kinhDoanhAudiobooks}
        genreName="kinh-doanh"
      />
      <AudioBookSection
        title="Sách nói thể loại trinh thám"
        subtitle="Sách nói mới cập nhật, xem tất cả "
        data={trinhThamAudiobooks}
        genreName="trinh-tham"
      />
    </div>
  );
}

Home.getLayout = AppLayout;

export default Home;
