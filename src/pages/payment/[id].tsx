import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import useSWR from "swr";
import { useRouter } from "next/router";
import { fetcher } from "@/utils/api";
import paymentApi from "@/utils/paymentApi";
// import { redirect } from "next/navigation";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("momo");
  const user = useAppSelector((state: RootState) => state.auth.currentUser);
  const router = useRouter();
  const { id } = router.query;
  const packageId = id as string;

  const { data: packageData, error } = useSWR(
    `http://localhost:8080/api/v1/package?filter={"id":"${packageId}"}`,
    fetcher
  );

  if (error) {
    return (
      <div className="text-xl font-semibold pt-5">
        Có lỗi xảy ra khi tải dữ liệu.
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="text-xl font-semibold pt-5">Đang tải dữ liệu...</div>
    );
  }

  const pack = packageData?.data?.results?.[0];

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    paymentApi
      .handlePayment({
        packageId,
      })
      .then((response) => {
        console.log(response);
        if (response.success) router.push(response.data);
      });

    // Perform payment processing logic here

    // Redirect to success page
    // router.push("/payment-success");
  };

  //   const [fullName, setFullName] = useState("");
  //   const [email, setEmail] = useState("");
  // const router = useRouter();

  return (
    <div className="pt-6">
      <div className="text-2xl font-semibold">Phương thức thanh toán</div>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex items-center cursor-pointer">
          <input
            type="radio"
            id="momo"
            name="paymentMethod"
            value="momo"
            checked={paymentMethod === "momo"}
            onChange={() => setPaymentMethod("momo")}
          />
          <label htmlFor="momo" className="ml-2 cursor-pointer">
            MoMo
          </label>
        </div>
        <div className="flex items-center mt-2 cursor-pointer">
          <input
            type="radio"
            id="vnpay"
            name="paymentMethod"
            value="vnpay"
            checked={paymentMethod === "vnpay"}
            onChange={() => setPaymentMethod("vnpay")}
          />
          <label htmlFor="vnpay" className="ml-2 cursor-pointer">
            VNPAY
          </label>
        </div>

        <div className="mt-6">
          <div className="text-2xl font-semibold">Chi tiết giao dịch</div>
          <div className="mt-4">
            <div className="text-lg font-semibold">
              Tên gói cước: {pack?.title}
            </div>
            <input
              type="text"
              placeholder="Họ tên người thanh toán"
              className="bg-gray-200 mt-2 px-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              value={user?.username ?? ""}
              disabled
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-200 mt-2 px-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              value={user?.email ?? ""}
              disabled
            />
            <div className="text-lg font-semibold text-red-500 mt-2 mb-4">
              Giá gói cước: {pack.amount - (pack.amount * pack.discount) / 100}{" "}
              VNĐ
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Xác nhận thanh toán
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

PaymentPage.getLayout = AppLayout;
export default PaymentPage;

// http://localhost:3000/?partnerCode=MOMOBFEM20220822&orderId=ORD11693626923979&requestId=REQ11693626923979&amount=500000&orderInfo=Thanh+to%C3%A1n+Momo&orderType=momo_wallet&transId=1693626939880&resultCode=1006&message=Transaction+denied+by+user.&payType=&responseTime=1693626939888&extraData=&signature=ce9610d7eabcb3bb18e9cc6a455caa835668d31822e91c7fbdcbccf3991d1413