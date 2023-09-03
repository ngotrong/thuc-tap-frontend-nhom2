import React from 'react';
import { FileAudio } from 'lucide-react';
import BookGenres from '../BookGenres/BookGenres';
import FeaturedAuthor from '../FeaturedAuthor/FeaturedAuthor';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <div className='w-4/5 h-[1px] bg-[#F0F0F0] mt-14 mx-auto' />
      <div className="grid grid-cols-4 py-10">
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
          <div className="pb-1 font-semibold cursor-pointer">
            Thể loại nổi bật
          </div>
          <BookGenres />
        </div>

        <div className="col-span-1 pl-12">
          <div className="pb-1 font-semibold cursor-pointer">
            Tác giả nổi bật
          </div>
          <FeaturedAuthor />
        </div>

        <div className="col-span-1 pl-2">
          <div>
            <Link
              href="/AboutUs"
              className="pb-1 cursor-pointer hover:text-red-300"
            >
              Về chúng tôi
            </Link>
          </div>
          <div>
            <Link
              href="/PrivatePolicy"
              className="cursor-pointer hover:text-red-300"
            >
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
