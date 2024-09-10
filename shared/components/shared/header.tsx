"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SearchInput,
  Container,
  CartButton,
  ProfileButton,
  AuthModal,
} from ".";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({
  hasCart = true,
  hasSearch = true,
  className,
}) => {
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const searchParams = useSearchParams();

  React.useEffect(() => {
    let toastMessage = "";

    if (searchParams.has("paid")) {
      toastMessage = "Payment successful!";
    }

    if (searchParams.has("verified")) {
      toastMessage = "Account verified!";
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace("/");
        toast.success(toastMessage, {
          duration: 5000,
        });
      }, 1000);
    }
  }, []);

  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/pizza.png" alt="logo" width={50} height={50} />
            <div>
              <h1 className="text-2xl uppercase font-black">Portolio Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">start my career</p>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        {/*  buttons */}
        <div className="flex items-center gap-3">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />
          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
