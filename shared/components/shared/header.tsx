import { cn } from "@/shared/lib/utils";
import React from "react";
import Image from 'next/image';
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { SearchInput, Container, CartButton } from ".";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                {/* Logo */}
                <Link href='/'>
                    <div className='flex items-center gap-4'>
                        <Image src='/pizza.png' alt='logo' width={50} height={50} />
                        <div>
                            <h1 className='text-2xl uppercase font-black'>Portolio Pizza</h1>
                            <p className='text-sm text-gray-400 leading-3'>start my career</p>
                        </div>
                    </div>
                </Link>

                <div className='mx-10 flex-1'>
                    <SearchInput />
                </div>

                {/*  buttons */}
                <div className='flex items-center gap-3'>
                    <Button variant='outline' className='flex items-center gap-1'>
                        <User size={16} />
                        Login
                    </Button>

                    <CartButton />
                </div>
            </Container>
        </header>
    );
}