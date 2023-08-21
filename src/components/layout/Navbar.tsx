import React, { useEffect, useState } from "react";
import { BookCopy, User2 } from "lucide-react";
import Popover from "../popover";
import SearchInput from "../SearchInput/SearchInput";
import Link from "next/link";

function Navbar() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/genre")
      .then((response) => response.json())
      .then((data) => setGenres(data.data));
  }, []);

  const navBookActions = [
    {
      id: 1,
      text: "Tất cả thể loại",
      path: "/all",
    },
    {
      id: 2,
      text: "Sách nói mới",
      path: "/all",
    },
    {
      id: 3,
      text: "Sách nói hay",
      path: "/all",
    },
    {
      id: 4,
      text: "Danh nhân",
      path: "/all",
    },
    {
      id: 5,
      text: "Chứng khoán",
      path: "/all",
    },
  ];

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
                      <button
                        key={action.id}
                        onClick={() => {}}
                        className="px-6 py-2 hover:text-red-500 hover:bg-neutral-100"
                      >
                        {action.text}
                      </button>
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
              <User2 size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
