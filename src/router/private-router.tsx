"use client";

import { ModalLogin } from "@/components";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren, useEffect, useState } from "react";

type IUser = {
  id: string;
  username: string;
  full_name: string;
};

export function PrivateRouter({ children }: PropsWithChildren) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState<boolean>(false);
  useEffect(() => {
    const stringUser = localStorage.getItem("user");
    if (stringUser) {
      const user: IUser = JSON.parse(stringUser);
      if (!user.id || !user.full_name || !user.username) setOpenModal(true);
    } else {
      setOpenModal(true);
    }
  }, [router]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {children}
      <ModalLogin open={openModal} handleClose={handleCloseModal} />
    </>
  );
}
