const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="flex items-start gap-4 md:gap-5">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-[80px] h-[80px] md:w-[96px] md:h-[96px] object-cover flex-shrink-0
                   rounded-[0px_80px_80px_80px] shadow-sm"
      />

      {/* Content + price row */}
      <div className="flex-1">
        {/* Title + dotted line + price */}
        <div className="flex items-baseline gap-3">
          <h3 className="uppercase font-semibold tracking-wide text-[#1f2937] text-sm md:text-base">
            {name}
          </h3>

          {/* Elegant dotted separator */}
          <div className="flex-1 border-b border-dashed border-gray-300 translate-y-[-2px]" />

          {/* Price */}
          <p className="font-semibold text-amber-500 text-sm md:text-base tabular-nums">
            ${Number(price).toFixed(2)}
          </p>
        </div>

        {/* Recipe */}
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {recipe}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;

