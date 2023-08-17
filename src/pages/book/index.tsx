import React from "react";
import { Clock, PlayCircle, Bookmark, Heart } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import Image from 'next/image';

function Book() {
  return (
    <div>
      <div className="bg-red-700 h-[400px]">
        <AppLayout>
          <div className="flex text-white">
            <div className="py-10 pr-10">
              <Image
                className="rounded-lg"
                width={198}
                height={297}
                src="https://nghesachnoi.com/uploads/bong_nguoi_xua_8ba2196b2b.jpg"
                alt="Your Alt Text"
              />
            </div>

            <div className="py-10 ">
              <div className="text-2xl font-semibold">Bóng người xưa</div>
              <div className="pt-5 pb-3">
                Trang chủ / Thể loại / Tiểu Thuyết
              </div>
              <div className="flex">
                <Clock size={25} />
                <div className="pl-2">7 giờ 4 phút</div>
              </div>
              <div className="inline-flex bg-orange-700 h-[50px] items-center justify-center rounded-lg mt-3 cursor-pointer hover:bg-orange-500 px-2 gap-2">
                <PlayCircle />
                <div>Nghe sách</div>
              </div>
              <div className="flex py-7">
                <div className="cursor-pointer">
                  <div className="w-[40px] h-[40px] border-white rounded-full pl-6 py-2">
                    <Bookmark />
                  </div>
                  <div>Bookmark</div>
                </div>
                <div className="ml-5 cursor-pointer">
                  <div className="py-2 pl-5">
                    <Heart />
                  </div>
                  <div>Yêu thích</div>
                </div>
              </div>
            </div>

            <div className="	ml-auto w-[360px] py-10">
              <div className="bg-red-800 rounded-lg text-xl">
                <div className="py-5 px-10">Phần 1</div>
                <div className="py-5 px-10">Phần 2</div>
                <div className="py-5 px-10">Phần 3</div>
                <div className="py-5 px-10">Phần 4</div>
              </div>
            </div>
          </div>
        </AppLayout>
      </div>

      <div className="max-w-6xl min-h-screen mx-auto mt-[50px]">
        <div className="font-semibold text-[22px]">Giới thiệu nội dung</div>
        <div className="mt-2 text-[22px]">
          Trong cuốn sách Cư Kỉnh, tác giả Hồ Biểu Chánh đã tường thuật về
          thực tế xảy ra ở Việt Nam trong thời kỳ đầu của thế kỷ XX. Nhân vật
          Chí Cao trong cuốn sách này được coi là một ví dụ điển hình cho sự suy
          đồi đạo đức của một phần trí thức thời đại.
        </div>
        <div className="mt-2 text-[22px]">
          Chí Cao, một nhà văn nổi tiếng, đã lợi dụng nghệ thuật viết để gây ra
          những đau khổ và lừa dối tình cảm của độc giả. Cuối cùng, anh ta đã
          phải chịu trận đắng vì những hành động không đúng đắn mà anh ta đã
          làm.
        </div>
      </div>
    </div>
  );
}

export default Book;
