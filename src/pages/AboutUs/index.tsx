import React from "react";
import AppLayout from "@/components/layout/AppLayout";

function AboutUs() {
  return (
    <div className="h-[430px]">
      <AppLayout>
        <div className="font-semibold mt-5 text-2xl">Về chúng tôi</div>
        <div className="mt-3 font-semibold text-xl">
          Sách nói (audiobook) là gì?
        </div>
        <div className="mt-3 text-base">
          Sách nói (audiobook) là một hình thức trình bày nội dung sách thông
          qua âm thanh. Thay vì đọc từng chữ viết, người nghe có thể tận hưởng
          nội dung của sách thông qua giọng đọc chuyên nghiệp. Audiobook thường
          được ghi âm bởi các diễn giả hoặc người đọc có chất giọng dễ nghe và
          thể hiện cảm xúc của câu chuyện.
        </div>
        <div className="mt-3 font-semibold text-xl">
          Nghe sách nói có những lợi ích gì?
        </div>
        <div className="mt-3 text-base">
          Nghe sách nói mang lại nhiều lợi ích quý báu. Đầu tiên, nó giúp tiết
          kiệm thời gian và tạo cơ hội học hỏi khi bạn đang trong tình trạng
          không thể đọc sách truyền thống. Bạn có thể nghe sách khi lái xe, làm
          việc nhà, tập thể dục, hoặc trong bất kỳ tình huống nào mà việc đọc
          sách gây khó khăn. Hơn nữa, audiobook phù hợp cho người có khả năng
          thính giác tốt hơn là đọc viết. Đối với những người thích
          multi-tasking, nghe sách nói là sự lựa chọn lý tưởng để kết hợp việc
          học và làm việc.
        </div>
        <div className="mt-3 font-semibold text-xl">
          Những ưu điểm trong website nghe sách nói của chúng tôi
        </div>
        <div className="mt-3 text-base">
          Trang web của chúng tôi cung cấp một trải nghiệm nghe sách nói tuyệt
          vời. Chúng tôi có một thư viện đa dạng với hàng ngàn tiêu đề sách nói
          từ các thể loại khác nhau, từ văn học, kỹ năng sống, tâm linh đến khoa
          học. Chất lượng âm thanh cao cùng với giọng đọc chuyên nghiệp sẽ mang
          đến cho người nghe cảm giác như đang bước vào thế giới của từng câu
          chuyện. Giao diện trực quan và tùy chọn tìm kiếm thông minh giúp người
          dùng dễ dàng tìm kiếm và lựa chọn sách phù hợp. Đồng thời, việc lưu
          trữ thông tin người dùng sẽ giúp họ tiếp tục từ chỗ họ dừng và theo
          dõi quá trình nghe sách nói một cách thuận tiện.
        </div>
      </AppLayout>
    </div>
  );
}

export default AboutUs;
