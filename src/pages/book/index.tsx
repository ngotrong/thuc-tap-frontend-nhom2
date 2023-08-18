import React from "react";
import { Clock, PlayCircle, Bookmark, Heart } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import Image from "next/image";

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

            <div className="py-10 bg-yellow-500 flex-1">
              <div className="text-2xl font-semibold">Bóng người xưa</div>
            </div>

            <div className="ml-auto py-10 pl-10">
                <Image
                className="rounded-lg"
                width={198}
                height={297}
                src="https://nghesachnoi.com/uploads/bong_nguoi_xua_8ba2196b2b.jpg"
                alt="Your Alt Text"
                />
            </div>
          </div>
        </AppLayout>
      </div>

      <div className="max-w-6xl min-h-screen mx-auto mt-[50px] bg-red-500">
        <div className="font-semibold text-[22px]">Giới thiệu nội dung</div>
        <div className="mt-2 text-[22px]">
          Trong cuốn sách Cư Kỉnh, tác giả Hồ Biểu Chánh đã tường thuật về thực
          tế xảy ra ở Việt Nam trong thời kỳ đầu của thế kỷ XX. Nhân vật Chí Cao
          trong cuốn sách này được coi là một ví dụ điển hình cho sự suy đồi đạo
          đức của một phần trí thức thời đại.
        </div>
        <div className="mt-2 text-[22px]">
          Chí Cao, một nhà văn nổi tiếng, đã lợi dụng nghệ thuật viết để gây ra
          những đau khổ và lừa dối tình cảm của độc giả. Cuối cùng, anh ta đã
          phải chịu trận đắng vì những hành động không đúng đắn mà anh ta đã
          làm.
        </div>
      </div>
      <div className="flex bg-yellow-500">123</div>
    </div>
  );
}

export default Book;
