import React from "react";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="bg-primary rounded-lg pt-10 pb-36 px-20 m-5 mb-24 text-white">
        <nav className=" flex items-center justify-between mb-44">
          <a href="/">
            <h5 className="text-2xl font-bold">BLOGGA</h5>
          </a>
          <ul className="flex items-center justify-center gap-10 text-lg font-medium">
            <li>
              <a href="">Design Tools</a>
            </li>
            <li>
              <a href="">Daily Updates</a>
            </li>
            <li>
              <a href="">Tutorials</a>
            </li>
            <li>
              <a href="">Library</a>
            </li>
          </ul>
          <button className="py-2.5 px-5 bg-white/10 rounded-lg">
            Subscribe
          </button>
        </nav>
        <div className="wrapper">
          <h6 className="font-semibold mb-5">👋 HELLO</h6>
          <h1 className="font-bold text-52 leading-[120%]">
            Insights about my personal and work life, and the in-betweens
          </h1>
        </div>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="bg-primary rounded-lg py-20 px-72 mt-40 mb-24 flex items-center justify-center text-white text-center flex-col relative overflow-hidden">
        <div className="-top-8 -left-8 absolute">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-custom-yellow z-10" />
            <div className="w-16 h-16 rounded-full bg-primary absolute z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
          </div>
        </div>

        <h3 className="text-28 mb-3 font-bold">Subscribe to my blog.</h3>
        <p className="text-lg text-white-faded mb-10">
          I post fresh content every week.
        </p>
        <div className="relative w-full overflow-hidden">
          <input
            type="email"
            className="w-full pl-5 py-4 rounded-lg placeholder:text-[#111118]/60 text-primary"
            placeholder="Email address"
          />
          <button className="px-8 py-4 text-primary bg-custom-green rounded-r-lg absolute right-0 top-1/2 -translate-y-1/2 font-semibold">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="py-10 text-center border-t border-t-primary/10">
        <p className="text-xs font-medium">Copyright 2022 - Wisnu Wicaksono</p>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        {header}
        <div className="wrapper">
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
