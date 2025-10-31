"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BookOpen, LogOut, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet";
import { useAuth } from '@/context/AuthContext';
export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {user} = useAuth();
  
  return (
    <header className=" backdrop-blur-md border-b border-border sticky top-0 z-50">

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 " />

            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Learnify
            </h1>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/courses"
              className="transition-colors font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400"
            >
              Courses
            </Link>
            <Link
              href="#"
              className="transition-colors font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="transition-colors font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400"
            >
              Profile
            </Link>

            <Button size="sm" asChild>
              <Link href="/login" className='transition-colors font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400'>Login</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register" className='transition-colors font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400'>Sign Up</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" className="flex items-center gap-2 transition-colors font-medium ">
                  <User className="h-4 w-4" />
                  {user.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span>{user.name}</span>
                    <span className="text-xs text-muted-foreground capitalize">{user.role}</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={'#'}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/courses">Browse Courses</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          {/* Mobile Navigation */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6 ml-6 mr-6">
                <Link
                  href="/courses"
                  className={`text-lg text-primary font-medium`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Courses
                </Link>


                <>
                  <Link
                    href={'#'}
                    className={`text-lg `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/profile"
                    className={`text-lg  'text-primary font-medium' 
                         `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                </>



                <div className="pt-4 border-t border-border space-y-4">
                  <div className="flex flex-col">
                    <span className="font-medium">{user.name}</span>
                    <span className="text-sm text-muted-foreground capitalize">{user.role}</span>
                  </div>
                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={() => {

                      setMobileMenuOpen(false);
                    }}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>

                <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                  <Button variant="ghost" asChild onClick={() => setMobileMenuOpen(false)}>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild onClick={() => setMobileMenuOpen(false)}>
                    <Link href="/register">Sign Up</Link>
                  </Button>
                </div>

              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </header>
  )
}
export default NavBar;