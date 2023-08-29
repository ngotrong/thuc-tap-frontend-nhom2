import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("momo");
  //   const [fullName, setFullName] = useState("");
  //   const [email, setEmail] = useState("");  
  const router = useRouter();
  const user = useAppSelector((state: RootState) => state.auth.currentUser);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Perform payment processing logic here

    // Redirect to success page
    // router.push("/payment-success");
  };

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
            <div className="text-lg font-semibold">Tên gói cước: Gói VIP 1</div>
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
              Giá gói cước: 100.000 VNĐ
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
