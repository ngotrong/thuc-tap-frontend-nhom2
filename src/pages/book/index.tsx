import React from "react";
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

            <div className="py-10 flex flex-col items-center flex-1">
              <div className="mb-7 text-2xl font-semibold">Tên sách</div>
              <div className="mb-7 text-[18px]">Tác giả</div>
              <div className="mb-7 text-[18px]">Thể loại</div>
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

      <div className="max-w-6xl mx-auto mt-[50px] bg-red-500">
        <div className="font-semibold text-[18px]">Giới thiệu nội dung</div>
        <div className="mt-2 text-xl">
          Trong cuốn sách Cư Kỉnh, tác giả Hồ Biểu Chánh đã tường thuật về thực
          tế xảy ra ở Việt Nam trong thời kỳ đầu của thế kỷ XX. Nhân vật Chí Cao
          trong cuốn sách này được coi là một ví dụ điển hình cho sự suy đồi đạo
          đức của một phần trí thức thời đại.
        </div>
        <div className="mt-2 text-xl">
          Chí Cao, một nhà văn nổi tiếng, đã lợi dụng nghệ thuật viết để gây ra
          những đau khổ và lừa dối tình cảm của độc giả. Cuối cùng, anh ta đã
          phải chịu trận đắng vì những hành động không đúng đắn mà anh ta đã
          làm.
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-[50px] bg-yellow-500">
        <div className="flex text-[18px] font-semibold">
          <div className="mr-2">Về tác giả</div>
          <div>[Tên tác giả]</div>
        </div>
        <div className="text-xl">[Mô tả tác giả]</div>
      </div>
    </div>
  );
}

export default Book;
