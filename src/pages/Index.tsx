const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl md:text-5xl font-display uppercase tracking-wide text-primary">
          KNOT NEW
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Premium Circular Wedding Marketplace
        </p>
        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
          <span>Reconnect. Relove. Reimagine.</span>
          <span className="text-xs mt-4">
            BUY. SELL. SAVE. / On your wedding pieces. / Keeping Weddings Sustainable and stories alive.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
