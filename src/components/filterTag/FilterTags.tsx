import useURLManager from "@/service/URLManager/useURLManager";
import { FacetKeys } from "@/types";
import { Button } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import ArrowLeft from "../svgs/ArrowLeft";
import ArrowRight from "../svgs/ArrowRight";


type FilterTagProps = {
  field: FacetKeys;
  options: string[] | string;
};

const FilterTags = ({ field, options }: FilterTagProps) => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRight =
    (containerRef.current?.scrollWidth || 0) -
    (containerRef.current?.clientWidth || 0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const x = event.pageX;
    const scrollOffset = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - scrollOffset;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleArrowClick = (scrollOffset) => {
    const newScrollLeft = containerRef.current.scrollLeft + scrollOffset;
    setScrollLeft(newScrollLeft);
    containerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth", // Use smooth scrolling behavior
    });
  };

  const { getFilter, addFilter, removeFilter } = useURLManager();

  if (!Array.isArray(options)) return null;

  const onRemove = (value: string) => {
    removeFilter({ filterType: field, filterValue: value });
  };
  const onAdd = (value: string) => {
    addFilter({ filterType: field, filterValue: value });
  };

  const handleToggleFilter = (filter: (typeof formattedOptions)[number]) => {
    if (filter.selected) {
      onRemove(filter.value);
    } else {
      onAdd(filter.value);
    }
  };

  const filterForField = getFilter(field);
  const formattedOptions = options.map((option) => {
    return {
      value: option,
      selected: Boolean(filterForField?.some((el) => el === option)),
    };
  });
  const isLengthOver = formattedOptions.length > 4;
  return (
    <div
      className="flex relative overflow-hidden w-full"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {scrollLeft > 0 && isLengthOver &&  (
        <div
          onClick={() => handleArrowClick(-200)}
          className="flex z-10 items-center justify-center h-full  w-[60px] bg-shadow-left absolute left-0 top-0"
        >
          <ArrowLeft className="text-black dark:text-custom-primary-text" />
        </div>
      )}
      <div
        ref={containerRef}
        className={`flex max-w-full gap-2 overflow-scroll no-scrollbar ${isLengthOver ? "pr-16" : ""}`}
      >
        {formattedOptions?.map((a, idx) => (
          <Button
            padding={"auto"}
            bgColor=""
            size="no-size"
            key={`${a.value}_${idx}`}
            className={`leading-none !bg-custom-background !text-custom-primary-text text-[10px] lg:text-[12px] 2xl:text-base rounded-[2px] lg:rounded-lg py-2 px-3 border  items-center justify-center border-custom-stroke ${
              a.selected
                ? "!bg-custom-hover-state !border-custom-accent"
                : "!bg-custom-background"
              }`}
            onClick={() => handleToggleFilter(a)}
          >
            {a.value}
          </Button>
        ))}
      </div>
      {scrollLeft < scrollRight + 1 && isLengthOver && (
        <div
          onClick={() => handleArrowClick(200)}
          className="flex items-center justify-center h-full w-5  lg:w-[60px] bg-shadow-right absolute right-0 top-0 text-white"
        >
          {" "}
          <ArrowRight className="text-black dark:text-custom-primary-text" />{" "}
        </div>
      )}
    </div>
  );
};

export default FilterTags;