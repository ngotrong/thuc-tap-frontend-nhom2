import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

const PackagePage = () => {
  const packages = [
    {
      id: 1,
      name: "Gói VIP 1",
      duration: "1 tháng",
      discount: "10%",
      price: "100.000 VNĐ",
    },
    {
      id: 2,
      name: "Gói VIP 2",
      duration: "2 tháng",
      discount: "15%",
      price: "180.000 VNĐ",
    },
    {
      id: 3,
      name: "Gói VIP 3",
      duration: "3 tháng",
      discount: "20%",
      price: "240.000 VNĐ",
    },
  ];

  return (
    <div className="pt-6">
      <div className="text-2xl font-semibold">Nâng cấp VIP</div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-gray-100 p-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
            style={{
              backgroundImage:
                "url(https://fintech.smartosc.com/wp-content/uploads/2022/07/image-81.jpeg)",
            }}
          >
            <div className="text-lg font-semibold">{pkg.name}</div>
            <div className="text-sm text-gray-600 mt-2">{pkg.duration}</div>
            <div className="text-sm text-green-500 mt-1">
              {pkg.discount} giảm giá
            </div>
            <div className="text-lg font-semibold text-red-500 mt-2 mb-4">
              {pkg.price}
            </div>
            <Link
              href="/payment"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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
