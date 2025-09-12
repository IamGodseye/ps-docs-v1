import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen playsuper-hero-bg">
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-72 pointer-events-none opacity-40" style={{background:"linear-gradient(to bottom,rgba(168,85,247,0.35),transparent)"}} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 relative max-w-7xl">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full btn-outline-soft shadow-sm mb-8">
              <span className="text-sm font-medium tracking-wide text-fd-muted-foreground">
                Backed by leading investors & powering studios
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.05] tracking-tight">
              Boost Retention <span className="gradient-text">Instantly</span>
            </h1>
            <p className="text-xl md:text-2xl text-fd-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              PlaySuper's engagement stack delivers real rewards inside your game: gift cards, coupons & digital value users actually want. Increase session time, repeat visits & lifetime value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <Link href="/docs" className="btn-primary-gradient px-9 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-2 shadow-lg">
                Integrate Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link href="/docs/tutorials/console" className="btn-outline-soft px-9 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-2">
                View Console Guide
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8m-8 4h8m-8 4h5" /></svg>
              </Link>
            </div>
          </div>

          {/* Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-28 max-w-7xl mx-auto">
            {[
              { title:'Seamless Integration', copy:'One-time SDK / iframe drop-in. All rewards, coins & fulfillment handled.' },
              { title:'Enhanced Retention', copy:'Meaningful real-world value keeps players returning & session length growing.' },
              { title:'Brand Partnerships', copy:'Relevant brands mapped to gamer intent. We manage sourcing & execution.' },
              { title:'Deep Gamer Insights', copy:'Know Your Gamer profiling unlocks precise targeting & personalization.' },
              { title:'Revenue Share', copy:'Earn from sponsored rewards & commerce events inside your experience.' },
            ].map((card, index) => (
              <div 
                key={card.title} 
                className="playsuper-feature-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold mb-3 text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-fd-muted-foreground">{card.copy}</p>
              </div>
            ))}
          </div>

          {/* Quick Integration Paths */}
          <div className="max-w-5xl mx-auto mb-28">
            <h2 className="text-center text-2xl font-semibold mb-10">Pick Your Path</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { label:'Unity SDK', href:'/docs/tutorials/unity-sdk', blurb:'Native store overlay & coin APIs.' },
                { label:'Web Embed', href:'/docs/tutorials/web-store', blurb:'Secure iframe + postMessage.' },
                { label:'Console Setup', href:'/docs/tutorials/console', blurb:'Project, coins & rewards config.' },
                { label:'Rewards API', href:'/docs/api/quick-start', blurb:'Full control via REST endpoints.' },
              ].map(item => (
                <Link key={item.label} href={item.href} className="group rounded-xl playsuper-feature-card border border-fd-border p-5 flex flex-col gap-3 hover:shadow-md transition-all">
                  <span className="text-sm font-medium group-hover:text-fd-foreground">{item.label}</span>
                  <span className="text-xs text-fd-muted-foreground leading-relaxed">{item.blurb}</span>
                  <span className="text-[11px] inline-flex items-center gap-1 text-fd-primary group-hover:gap-2 transition-all">Open <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Minimal Trust Bar */}
          <div className="pb-16">
            <p className="text-center text-sm uppercase tracking-widest text-fd-muted-foreground mb-6">USED ACROSS PLATFORMS</p>
            <div className="flex flex-wrap justify-center gap-6 opacity-70 text-[11px] font-medium">
              {['Unity','React Native','Android','iOS'].map(x => (
                <div key={x} className="px-4 py-2 rounded-lg border border-fd-border bg-fd-card/60 backdrop-blur-sm">{x}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
