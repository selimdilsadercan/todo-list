function Layout({ children }: { children: React.ReactNode }) {
  return <div className="h-full bg-slate-800 text-slate-100 container mx-auto p-4">{children}</div>;
}

export default Layout;
