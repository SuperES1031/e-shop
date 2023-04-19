import { Rate } from '@/legos';

export const CardBody = ({
  title,
  price,
  discount,
}: {
  title: string;
  price: number;
  discount: number;
}) => (
  <div className="flex flex-col gap-1 sm:gap-4 mt-4 mb-2">
    <h3 className="font-semibold sm:font-bold text-sm sm:text-base">{title}</h3>
    <div className="flex items-center gap-2 sm:gap-6">
      <p className="text-[#F6543E] font-bold sm:font-semibold text-base sm:text-2xl leading-5 sm:leading-8">
        {`${price * (1 - discount / 100)} ₴`}
      </p>
      <p className="text-[#828282] text-xs sm:text-2xl line-through leading-5 sm:leading-8">{`${price} ₴`}</p>
    </div>
    <Rate rate={4.9} />
    <button className="rounded-full bg-[#404969] text-white text-xs sm:text-base h-10 sm:h-16 mt-3 sm:mt-0 tracking-[0.02rem]">
      Замовити
    </button>
  </div>
);
