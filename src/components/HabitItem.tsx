"use client";

import { useState } from "react";

export default function HabitItem({ title }: any) {
  const [isChecked, setIsChecked] = useState(false);

  console.log(isChecked, "IS CHECKED");

  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label htmlFor="checkbox">{title}</label>
    </>
  );
}
