"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .2 1.3l3.1 3.1L3 17.5V21h3.5l5.4-5.4 3.1 3.1c.3.3.8.4 1.3.2l.5-.3c.4-.3.6-.7.5-1.1Z"/></svg>
          <span className="font-headline text-lg font-bold text-foreground">DelaySense</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>About</Link>
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>Features</Link>
          <Link href="#team" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>Team</Link>
          <Link href="#vision" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>Vision</Link>
          <Link href="#showcase" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>Showcase</Link>
        </nav>
        <Button asChild>
          <Link href="#contact">Contact Us</Link>
        </Button>
      </div>
    </header>
  );
}
