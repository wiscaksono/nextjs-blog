import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <img src="/logo.png" className="w-[40px] h-[40px] mx-auto" />
        <a href="/">
          <h1 className="text-2xl text-white font-bold mt-4">
            Wiscaksono's Blog
          </h1>
        </a>
        <p className="text-slate-300">🤘 Welcome to my tech blog. 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-8 py-8 text-center text-slate-400">
        <h3>Developed by Wisnu</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
