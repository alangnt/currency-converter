"use client";

import { useState } from "react";

import Link from "next/link";

import { ArrowRightLeft, Menu, Globe, Zap, Shield, Facebook, Twitter, Instagram } from "lucide-react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Notes />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-700">
      <div className="flex items-center gap-2">
        <ArrowRightLeft size={24} className="text-blue-500" />
        <h1 className="text-2xl font-bold">Currency Converter</h1>
      </div>

      {/* TODO: Add a dropdown menu for the currencies */}
      <nav className="hidden sm:flex items-center gap-4">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Rates
        </Link>
        <Link href="/" className="hover:text-blue-500">
          About
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Contact
        </Link>
      </nav>

      <nav className="flex items-center gap-2 sm:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size={24} />
          </SheetTrigger>

          <SheetContent className="bg-gray-900/70 backdrop-blur-md border-none flex flex-col gap-12">
            <SheetHeader>
              <SheetTitle className="text-white text-2xl">Currency Converter</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-6 items-center">
              <Link href="/" className="hover:text-blue-500 text-lg">
                Home
              </Link>
              <Link href="/" className="hover:text-blue-500 text-lg">
                Rates
              </Link>
              <Link href="/" className="hover:text-blue-500 text-lg">
                About
              </Link>
              <Link href="/" className="hover:text-blue-500 text-lg">
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

function Main() {
  const currencies = [
    { name: "United States Dollar", symbol: "USD" },
    { name: "Euro", symbol: "EUR" },
    { name: "British Pound", symbol: "GBP" },
    { name: "Japanese Yen", symbol: "JPY" },
    { name: "Canadian Dollar", symbol: "CAD" },
    { name: "Australian Dollar", symbol: "AUD" },
    { name: "New Zealand Dollar", symbol: "NZD" },
    { name: "Swiss Franc", symbol: "CHF" },
    { name: "Hong Kong Dollar", symbol: "HKD" },
    { name: "Singapore Dollar", symbol: "SGD" },
  ];

  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");

  return (
    <main className="flex flex-col items-center justify-center gap-8 my-24">
      <h2 className="text-4xl font-bold max-sm:max-w-sm text-center">Convert Currencies in Real-Time</h2>

      <section className="flex flex-col gap-4 bg-gray-800 px-8 py-6 rounded-lg max-w-sm sm:max-w-lg w-full">
        <article className="flex max-sm:flex-col gap-4">
          <div className="flex flex-col w-full gap-1">
            <h3>Amount</h3>
            <Input placeholder="Enter amount" className="text-black" />
          </div>

          <div className="flex flex-col w-full gap-1">
            <h3>From</h3>
            <Select value={from} onValueChange={(value) => setFrom(value)}>
              <SelectTrigger className="text-black">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.symbol} value={currency.symbol}>
                    {currency.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </article>

        <article className="flex max-sm:flex-col gap-11 sm:gap-4">
          <div className="flex flex-col w-full gap-1">
            <h3>To</h3>
            <Select value={to} onValueChange={(value) => setTo(value)}>
              <SelectTrigger className="text-black">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.symbol} value={currency.symbol}>
                    {currency.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end justify-center w-full">
            <Button className="w-full bg-blue-500 hover:bg-blue-600">
              Convert
            </Button>
          </div>
        </article>

        <article className="flex items-center justify-center text-xl font-bold">
          <p>1 {from} = 2 {to}</p>
        </article>
      </section>
    </main>
  );
} 

function About() {
  return (
    <aside className="flex flex-col items-center gap-4 p-4 bg-gray-800 rounded-lg py-12">
      <h2 className="text-2xl font-bold text-center">Why Choose Us?</h2>
      
      <section className="flex max-md:flex-col max-md:items-center gap-6">
        <article className="flex flex-col gap-2 items-center justify-center text-center p-4 max-md:max-w-sm">
          <Globe size={48} className="text-blue-500" />
          <h3 className="text-xl font-bold">Global Coverage</h3>
          <p className="text-md text-gray-400">Access exchange rates for 170+ currencies worldwide.</p>
        </article>

        <article className="flex flex-col gap-2 items-center justify-center text-center p-4 max-md:max-w-sm">
          <Zap size={48} className="text-blue-500" />
          <h3 className="text-xl font-bold">Real-Time Rates</h3>
          <p className="text-md text-gray-400">Get up-to-the-minute exchange rates for accurate conversions.</p>
        </article>

        <article className="flex flex-col gap-2 items-center justify-center text-center p-4 max-md:max-w-sm">
          <Shield size={48} className="text-blue-500" />
          <h3 className="text-xl font-bold">Secure & Reliable</h3>
          <p className="text-md text-gray-400">Trust in our secure platform for all your currency needs.</p>
        </article>
      </section>
    </aside>
  );
}

function Notes() {
  return (
    <aside className="flex max-md:flex-col gap-8 bg-gray-800 py-12 px-6">
      <article className="flex flex-col gap-2 w-full">
        <h3 className="text-lg font-bold">About Us</h3>
        <p className="text-md text-gray-400 md:w-[80%] w-full">Currency Converter provides real-time currency conversion and exchange rate information for global travelers and businesses.</p>
      </article>

      <article className="flex flex-col gap-2 w-full">
        <h3 className="text-lg font-bold">Quick Links</h3>

        <div className="flex flex-col gap-2">
          <Link href="/" className="text-md text-gray-400 hover:text-blue-500 w-min">Home</Link>
          <Link href="/" className="text-md text-gray-400 hover:text-blue-500 w-min">Rates</Link>
          <Link href="/" className="text-md text-gray-400 hover:text-blue-500 w-min">Converter</Link>
          <Link href="/" className="text-md text-gray-400 hover:text-blue-500 w-min">API</Link>
        </div>
      </article>

      <article className="flex flex-col gap-2 w-full">
        <h3 className="text-lg font-bold">Contact</h3>
        <div className="flex flex-col gap-2 text-md text-gray-400 md:w-[80%] w-full">
          <p>Email: info@currencyconverter.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Currency Street, Currency City, Currency Country</p>
        </div>
      </article>

      <article className="flex flex-col gap-2 w-full">
        <h3 className="text-lg font-bold">Follow Us</h3>
        
        <div className="flex gap-2">
          <Link href="/" className="text-md text-gray-400"><Facebook size={24} /></Link>
          <Link href="/" className="text-md text-gray-400"><Twitter size={24} /></Link>
          <Link href="/" className="text-md text-gray-400"><Instagram size={24} /></Link>
        </div>
      </article>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="flex items-center justify-center p-4 bg-gray-800 rounded-lg">
      <p className="text-md text-gray-400">© 2024 Currency Converter. All rights reserved.</p>
    </footer>
  );
}
