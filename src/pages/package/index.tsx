import React, { useEffect, useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Package {
  id: number;
  title: string;
  expire: number;
  discount: number;
  amount: number;
}

const PackagePage = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const router = useRouter();
  console.log(router.query);

  useEffect(() => {
    // Thực hiện lấy dữ liệu từ API ở đây
    fetch('http://localhost:8080/api/v1/package')
      .then((response) => response.json())
      .then((data) => {
        // Xử lý dữ liệu và cập nhật state packages
        setPackages(data.data.results);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu từ API: ', error);
      });
  }, []);

  return (
    <div className="pt-6">
      <div className="text-2xl font-semibold">Nâng cấp VIP</div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="flex flex-col justify-between gap-3 p-4 transition duration-300 bg-gray-100 rounded-md shadow-md hover:shadow-lg"
          >
            <div className='flex items-center justify-between'>
              <div className="text-lg font-semibold">{pkg.title}</div>
              {pkg.discount > 0 && (
                <div className="text-sm text-green-500">
                  {pkg.discount}% giảm giá
                </div>
              )}
            </div>
            <div className="text-sm text-gray-600">
              {pkg.expire === 0
                ? '1 ngày'
                : pkg.expire === 1
                ? '1 tháng'
                : '1 năm'}
            </div>

            <div className="text-lg font-semibold text-red-500">
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(pkg.amount)}
            </div>
            {/* Tạo URL có tham số dựa trên ID của gói cước */}
            <Link
              href={`/payment/${pkg.id}`}
              className="px-4 py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Chọn gói
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
PackagePage.getLayout = AppLayout;
export default PackagePage;
