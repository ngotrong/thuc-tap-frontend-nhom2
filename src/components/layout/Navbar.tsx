import React, { useEffect } from "react";
import { BookCopy, User2 } from "lucide-react";
import Popover from "../popover";
import SearchInput from "../SearchInput/SearchInput";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/utils/api";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/authSlice";
import { useRouter } from "next/router";
import { UrlObject } from "url";
export function convertViToEn(str: string, toUpperCase = false) {
  str = str.toLowerCase().trim();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư

  return toUpperCase ? str.toUpperCase() : str;
}

function Navbar() {
  const { data: genresData, error: genresError } = useSWR(
    "http://localhost:8080/api/v1/genre",
    fetcher
  );

  if (genresError) {
    return <div>Có lỗi xảy ra khi tải dữ liệu thể loại.</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const navBookActions = genresData?.data?.results.map(
    (genre: { id: any; name: string }) => ({
      id: genre.id,
      text: genre.name,
      path: `/genre/${convertViToEn(genre.name).replace(/\s/g, "-")}`,
    })
  );

  const navAuthorActions = [
    {
      id: 1,
      text: "Kim Dung",
      path: "/author/kim-dung",
    },
    {
      id: 2,
      text: "Robert Kiyosaki",
      path: "/author/robert-kiyosaki",
    },
    {
      id: 3,
      text: "Agatha Christie",
      path: "/author/agatha-christie",
    },
  ];

  const userActions = [
    {
      id: 1,
      text: "Trang cá nhân",
      path: "/profile",
    },
    {
      id: 2,
      text: "Đăng xuất",
      path: "/login",
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
                    {navBookActions?.map(
                      (action: {
                        path: string | UrlObject;
                        id: React.Key | null | undefined;
                        text:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | React.PromiseLikeOfReactNode
                          | null
                          | undefined;
                      }) => (
                        <Link
                          href={action.path}
                          key={action.id}
                          className="px-6 py-2 hover:text-red-500 hover:bg-neutral-100"
                        >
                          {action.text}
                        </Link>
                      )
                    )}
                  </div>
                }
              />
              <Popover
                text="Tác Giả"
                Content={
                  <div className="flex flex-col">
                    {navAuthorActions.map((action) => (
                      <Link
                        href={action.path}
                        key={action.id}
                        className="px-6 py-2 hover:text-red-500 hover:bg-neutral-100"
                      >
                        {action.text}
                      </Link>
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
                        onClick={() => {
                          if (action.id == 1) {
                            router.push("/profile");
                          } else if (action.id == 2) {
                            dispatch(logout()).then(() =>
                              router.push("/login")
                            );
                          }
                        }}
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
