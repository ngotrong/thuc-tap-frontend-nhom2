'use client';

// import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return;
}
