import React from "react";
import { FileAudio } from "lucide-react";
import BookGenres from "../BookGenres/BookGenres";
import FeaturedAuthor from "../FeaturedAuthor/FeaturedAuthor";
import Link from "next/link";

function Footer() {
  return (
    <div className="grid grid-cols-4 mt-10">
      <div className="col-span-1 pr-2">
        <div className="grid grid-cols-4">
          <div className="col-span-1 cursor-pointer">
            <FileAudio size={50} color="#B8161D" />
          </div>
          <div className="col-span-3 text-justify">
            <h3>
              Trang tổng hợp những sách nói hay, truyện audio, mới nhất, chất
              lượng cao và hoàn toàn miễn phí.
            </h3>
          </div>
        </div>
        <div className="pt-3">Email: sachnoionline@gmail.com</div>
      </div>

      <div className="col-span-1 pl-8">
        <div className="font-semibold cursor-pointer pb-1">
          Thể loại nổi bật
        </div>
        <BookGenres />
      </div>

      <div className="col-span-1 pl-12">
        <div className="font-semibold cursor-pointer pb-1">Tác giả nổi bật</div>
        <FeaturedAuthor />
      </div>

      <div className="col-span-1 pl-2">
        <div>
          <Link
            href="/AboutUs"
            className="hover:text-red-300 cursor-pointer pb-1"
          >
            Về chúng tôi
          </Link>
        </div>
        <div>
          <Link
            href="/PrivatePolicy"
            className="hover:text-red-300 cursor-pointer"
          >
            Chính sách bảo mật
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
