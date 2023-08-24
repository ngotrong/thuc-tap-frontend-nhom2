import React, { useEffect, useState } from "react";
import { BookCopy, User2 } from "lucide-react";
import Popover from "../popover";
import SearchInput from "../SearchInput/SearchInput";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/utils/api";
export function convertViToEn(str: string, toUpperCase = false) {
  str = str.toLowerCase().trim();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư

  return toUpperCase ? str.toUpperCase() : str;
}

function Navbar() {
  // const { data: genresData, error: genresError } = useSWR(
  //   "http://localhost:8080/api/v1/audio-book",
  //   fetcher
  // );

  const { data: genresData, error: genresError } = useSWR(
    "http://localhost:8080/api/v1/genre",
    fetcher
  );

  if (genresError) {
    return <div>Có lỗi xảy ra khi tải dữ liệu thể loại.</div>;
  }

  if (!genresData) {
    return <div>Đang tải dữ liệu thể loại...</div>;
  }

  const navBookActions = genresData.data.results.map((genre) => ({
    id: genre.id,
    text: genre.name,
    path: `/genre/${convertViToEn(genre.name).replace(`/\s/g`,"-")}`,
  }));

  // const navBookActions = genresData.data.results.map((genre) => ({
  //   id: genre.id,
  //   text: genre.name,
  //   path: `/genre/${genre.name}`,
  // }));

  // const [genres, setGenres] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/v1/genre")
  //     .then((response) => response.json())
  //     .then((data) => setGenres(data.data));
  // }, []);

  // const navBookActions = [
  //   {
  //     id: 1,
  //     text: "Sách nói mới",
  //     path: "/AboutUs",
  //   },
  //   {
  //     id: 2,
  //     text: "Sách nói hay",
  //     path: "/all",
  //   },
  //   {
  //     id: 3,
  //     text: "Danh nhân",
  //     path: "/all",
  //   },
  //   {
  //     id: 4,
  //     text: "Chứng khoán",
  //     path: "/all",
  //   },
  // ];

  const navAuthorActions = [
    {
      id: 1,
      text: "Nguyên Phong",
      path: "/all",
    },
    {
      id: 2,
      text: "Nguyễn Nhật Ánh",
      path: "/all",
    },
    {
      id: 3,
      text: "Thích Nhất Hạnh",
      path: "/all",
    },
  ];

  const userActions = [
    {
      id: 1,
      text: "Trang cá nhân",
      path: "/user-profile",
    },
    {
      id: 2,
      text: "Đăng xuất",
      path: "/logout",
    },
  ];

  return (
    <div className="w-screen h-[64px] shadow-md">
      <div className="h-full max-w-6xl px-4 mx-auto lg:px-0">
        <div className="flex flex-row items-center justify-between h-full">
          <div className="flex items-center">
            <BookCopy size={30} color="#B8161D" />
            <Link
              href="/home"
              className="ml-[8px] capitalize font-semibold hover:text-red-500"
            >
              Sách nói online
            </Link>
          </div>
          <SearchInput />
          <div className="flex items-center">
            <div className="flex items-center gap-4">
              <Popover
                text="Sách Nói"
                Content={
                  <div className="flex flex-col">
                    {navBookActions.map((action) => (
                      // <button
                      //   key={action.id}
                      //   onClick={() => {}}
                      //   className="px-6 py-2 hover:text-red-500 hover:bg-neutral-100"
                      // >
                      //   {action.text}
                      // </button>

                      <Link
                        href={action.path}
                        key={action.id}
                        className="px-6 py-2 hover:text-red-500 hover:bg-neutral-100"
                      >
                        {action.text}
                      </Link>
                    ))}

                    {/* {genres?.map((genre) => (
                      <Link href={`/genre/${genre.name}`} key={genre.id}  className="px-6 py-2 hover:text-red-500 hover:bg-neutral-100">
                          {genre.name}
                      </Link>
                    ))} */}
                  </div>
                }
              />
              <Popover
                text="Tác Giả"
                Content={
                  <div className="flex flex-col">
                    {navAuthorActions.map((action) => (
                      <button
                        key={action.id}
                        onClick={() => {}}
                        className="px-6 py-2 hover:text-red-500 hover:bg-neutral-100"
                      >
                        {action.text}
                      </button>
                    ))}
                  </div>
                }
              />
              <button className="font-semibold hover:text-red-500">Blog</button>
            </div>
            <div className="w-[2px] h-5 bg-neutral-300 mx-[16px]" />
            <div className="w-[40px] h-[40px] bg-neutral-200 flex items-center justify-center rounded-full hover:bg-neutral-300">
              <Popover
                text={<User2 size={20} className="cursor-pointer" />}
                Content={
                  <div className="flex flex-col">
                    {userActions.map((action) => (
                      <button
                        key={action.id}
                        onClick={() => {}}
                        className="px-6 py-2 hover:text-red-500 hover:bg-neutral-100"
                      >
                        {action.text}
                      </button>
                    ))}
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
