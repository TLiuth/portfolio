"use client";

import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function Carousel<T>(props: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="relative px-12">
      {props.renderItem(props.items[currentIndex])}

      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        onClick={() =>
          setCurrentIndex((prev) =>
            prev - 1 < 0 ? props.items.length - 1 : prev - 1
          )
        }
        // onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
      >
        <IoChevronBack
          size={50}
          className="hover:text-zinc-900 text-zinc-500"
        />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        onClick={
          () =>
            setCurrentIndex((prev) =>
              prev + 1 <= props.items.length - 1 ? prev + 1 : 0
            )
          // setCurrentIndex((prev) => Math.min(props.items.length - 1, prev + 1))
        }
      >
        <IoChevronForward
          size={50}
          className="hover:text-zinc-900 text-zinc-500"
        />
      </button>
      <div className="flex justify-center gap-2 mt-4">
        {props.items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all hover:scale-150 ${
              index === currentIndex
                ? "bg-colors-dark-match w-4"
                : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
