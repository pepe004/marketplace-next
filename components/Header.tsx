"use client";

import Link from 'next/link';
import { ShoppingCart, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { account } from '@/lib/appwrite';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkUserStatus();
  }, []);

  const checkUserStatus = async () => {
    try {
      const session = await account.getSession('current');
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      setIsLoggedIn(false);
      router.push('/');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">Marketplace</Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input type="text" placeholder="Search products..." className="pl-10 pr-4 py-2 w-64" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <Button variant="ghost">
            <ShoppingCart className="mr-2" size={20} />
            Cart
          </Button>
          {isLoggedIn ? (
            <Button variant="ghost" onClick={handleLogout}>
              <User className="mr-2" size={20} />
              Logout
            </Button>
          ) : (
            <Link href="/login">
              <Button variant="ghost">
                <User className="mr-2" size={20} />
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}