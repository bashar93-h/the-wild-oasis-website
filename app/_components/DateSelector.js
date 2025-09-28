"use client";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;
  const { regularPrice, discount } = cabin;

  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 pb-6 place-self-center"
        onSelect={setRange}
        mode="range"
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        navLayout="around"
        modifiersClassNames={{
          selected: "bg-blue-600 text-white rounded-full",
          range_start: "bg-blue-600 text-white rounded-l-full",
          range_end: "bg-blue-600 text-white rounded-r-full",
          range_middle: "bg-blue-200 text-blue-900",
          hovered: "bg-blue-200 text-blue-900",
        }}
        classNames={{
          day: "text-lg md:text-xl hover:bg-blue-600 rounded-full transition", // bigger text + bigger click area
          months: "flex gap-20 flex-col md:flex-row",
        }}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />
      {/* if your flex container's children are text elemets (span inside p)
       the browser align them by their baseline be default not by vertical center*/}
      <div className=" flex gap-4 items-center justify-between px-4 md:px-8 bg-accent-500 text-primary-800 h-[72px] relative">
        <div className="flex items-center gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-xl md:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl md:text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-xl md:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-base md:text-lg font-bold uppercase">
                  Total
                </span>{" "}
                <span className="text-xl md:text-2xl font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold absolute top-[120%] left-1/2 -translate-x-1/2 md:static"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
