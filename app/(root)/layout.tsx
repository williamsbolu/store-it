const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen">
      Siderbar
      <section className="flex h-full flex-1 flex-col">
        MobileNav Header
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
};

export default layout;
