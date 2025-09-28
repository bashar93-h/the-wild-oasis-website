"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Filter() {
  // this will return special read-only object from Next.js
  // to access the current URL query params(can't be updated)
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const activeFilter = searchParams.get("capacity") || "all";

  function handleFilter(filter) {
    // creating a new editable searchParams copy(normal js object)
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    // this will update the URL without refreshing the page
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function buttonClasses(filter) {
    return `px-5 py-2 hover:bg-primary-700 ${
      activeFilter === filter ? "bg-primary-700" : ""
    }`;
  }
  return (
    <div className="border border-primary-800 grid grid-cols-2 sm:flex">
      <button
        className={buttonClasses("all")}
        onClick={() => handleFilter("all")}
      >
        All cabins
      </button>
      <button
        className={buttonClasses("small")}
        onClick={() => handleFilter("small")}
      >
        1&mdash;3 guests
      </button>
      <button
        className={buttonClasses("meduim")}
        onClick={() => handleFilter("meduim")}
      >
        4&mdash;7 guests
      </button>
      <button
        className={buttonClasses("large")}
        onClick={() => handleFilter("large")}
      >
        8&mdash;12 guests
      </button>
    </div>
  );
}

export default Filter;
