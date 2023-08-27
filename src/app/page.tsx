"use client";

import { getData } from "./api";

export default function Home() {
  const onClick = async () => {
    const data = await getData();
  };

  return (
    <div>
      <div>Nguyen Van Nam</div>
      <button onClick={onClick}>Click</button>
    </div>
  );
}
