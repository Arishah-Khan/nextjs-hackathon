
import React from "react";

type DiscountSectionProps = {
  couponCode: string;
  setCouponCode: React.Dispatch<React.SetStateAction<string>>;
  handleCouponApply: () => void;
};

const DiscountSection: React.FC<DiscountSectionProps> = ({
  couponCode,
  setCouponCode,
  handleCouponApply,
}) => {
  return (
    <div className="flex flex-col max-w-full lg:max-w-[500px] mb-6 lg:mb-0">
      <label htmlFor="coupon" className="text-lg font-semibold">
        Coupon Code
      </label>
      <p className="text-sm sm:text-base text-gray-500 py-2">Enter your coupon code for discounts.</p>
      <p className="text-sm sm:text-base text-gray-500">
        Available Coupons: DISCOUNT10, DISCOUNT20, DISCOUNT30
      </p>
      <div className="flex justify-start items-center  mt-2">
        <input
          id="coupon"
          type="text"
          className="p-2 border rounded-none w-full lg:w-60"
          placeholder="Enter Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button
          onClick={handleCouponApply}
          className="bg-[#FF9F0D] text-white px-4 py-2 rounded-none"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default DiscountSection;
