"use server";

import { delay } from "@/components/utils/delay";

export const getAllProducts = async (type?: string, wait = false) => {
  let fetchOptions = {};

  if (type === "ssr") {
    fetchOptions = {
      cache: "no-store",
    };
  } else if (type === "isr") {
    fetchOptions = {
      next: {
        tags: ["Products"],
      },
    };
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/products`,
    fetchOptions
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products data");
  }

  if (wait) {
    delay(2000);
  }

  return res.json();
};
