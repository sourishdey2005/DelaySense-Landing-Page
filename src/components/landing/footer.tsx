"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6 px-4 md:px-6 text-sm text-muted-foreground">
        <p>
          {year ? `© ${year} Code & Karma. All rights reserved.` : `© Code & Karma. All rights reserved.`}
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>Privacy</Link>
          <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
