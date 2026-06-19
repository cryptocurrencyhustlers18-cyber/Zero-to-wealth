import heroImg from './assets/hero.png'

const app = document.querySelector('#app')

// Helper for smooth scrolling or navigation
window.addEventListener('click', (e) => {
  const link = e.target.closest('a')
  if (link && link.href.startsWith(window.location.origin)) {
    const url = new URL(link.href)
    if (url.pathname === window.location.pathname && url.hash) {
      // Allow default anchor behavior
      return
    }
    e.preventDefault()
    navigate(url.pathname + url.search + url.hash)
  }
})

function navigate(path) {
  window.history.pushState({}, '', path)
  render()
  window.scrollTo(0, 0)
}

window.addEventListener('popstate', () => {
  render()
})

const Header = () => `
<nav id="navbar" class="fixed top-0 w-full z-50 transition-all duration-300 py-4 bg-white/90 backdrop-blur-md shadow-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
    <a href="/" class="flex items-center gap-2">
      <div class="w-8 h-8 bg-gold rounded-lg flex items-center justify-center text-black font-bold text-xl">
        0
      </div>
      <span class="font-bold text-xl tracking-tight text-slate-900">Zero to Wealth</span>
    </a>
    <div class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
      <a href="/#why" class="hover:text-gold transition-colors">Why Us</a>
      <a href="/#paths" class="hover:text-gold transition-colors">Paths</a>
      <a href="/guides" class="hover:text-gold transition-colors">Starter Guide</a>
      <a href="/course" class="hover:text-gold transition-colors font-bold text-gold">Flagship Course</a>
      <a href="/products" class="hover:text-gold transition-colors">Products</a>
      <a href="/about" class="hover:text-gold transition-colors">About</a>
      <a href="/guides" class="bg-gold text-black px-5 py-2 rounded-full hover:bg-yellow-400 transition-colors">Start Free</a>
    </div>
    <button class="md:hidden text-slate-900">
       <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
    </button>
  </div>
</nav>
`

const Footer = () => `
<footer class="bg-white py-20 border-t border-slate-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
      <div>
        <h4 class="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Product</h4>
        <ul class="space-y-4 text-sm text-slate-600">
          <li><a href="/guides" class="hover:text-gold transition-colors">Courses</a></li>
          <li><a href="/products" class="hover:text-gold transition-colors">Pricing</a></li>
          <li><a href="/guides" class="hover:text-gold transition-colors">Quickstart Guide</a></li>
          <li><a href="/guides" class="hover:text-gold transition-colors">Glossary</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Learn</h4>
        <ul class="space-y-4 text-sm text-slate-600">
          <li><a href="/guides" class="hover:text-gold transition-colors">Blog</a></li>
          <li><a href="/guides" class="hover:text-gold transition-colors">Crypto Safety Guide</a></li>
          <li><a href="/guides" class="hover:text-gold transition-colors">Traditional Investing 101</a></li>
          <li><a href="/guides" class="hover:text-gold transition-colors">Side Hustle Ideas</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
        <ul class="space-y-4 text-sm text-slate-600">
          <li><a href="/about" class="hover:text-gold transition-colors">About</a></li>
          <li><a href="/about" class="hover:text-gold transition-colors">Mission</a></li>
          <li><a href="/about" class="hover:text-gold transition-colors">Team</a></li>
          <li><a href="/about" class="hover:text-gold transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Legal</h4>
        <ul class="space-y-4 text-sm text-slate-600">
          <li><a href="#" class="hover:text-gold transition-colors">Terms of Service</a></li>
          <li><a href="#" class="hover:text-gold transition-colors">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-gold transition-colors">Disclaimer</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-slate-200 pt-12">
      <div class="bg-slate-50 p-8 rounded-2xl mb-12 border border-gold/10">
        <p class="text-[10px] sm:text-xs text-slate-500 leading-relaxed uppercase font-bold mb-4 opacity-50 tracking-widest">Mandatory Disclosure</p>
        <p class="text-xs text-slate-500 leading-relaxed">
          <strong>⚠️ Disclaimer:</strong> Zero to Wealth is an educational platform. Nothing on this website constitutes financial advice, investment advice, or a recommendation to buy or sell any asset. All content is for informational and educational purposes only. Investing involves risk, including the potential loss of principal. Past performance does not guarantee future results. Always do your own research and consult a qualified financial advisor before making investment decisions. Cryptocurrency investments carry additional risks including high volatility, smart contract risk, and potential total loss. Never invest money you cannot afford to lose.
        </p>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
        <div class="flex items-center gap-2">
           <div class="w-6 h-6 bg-slate-300 rounded flex items-center justify-center text-white font-bold text-xs">0</div>
           <span>© 2025 Zero to Wealth. All rights reserved.</span>
        </div>
        <p>Built with ❤️ for everyone starting from $0.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-gold transition-colors">Twitter</a>
          <a href="#" class="hover:text-gold transition-colors">Discord</a>
          <a href="#" class="hover:text-gold transition-colors">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</footer>
`

const Home = () => `
<!-- Hero -->
<section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
      <div class="text-center lg:text-left">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
          Start building wealth — <span class="text-gold">with $0 in your pocket.</span>
        </h1>
        <p class="mt-6 text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
          The step-by-step education platform for ordinary people. No capital required. Just knowledge, consistency, and a plan.
        </p>
        <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="/guides" class="bg-gold text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg shadow-gold/20 text-center">
            Start the free course →
          </a>
          <a href="#how" class="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all text-center">
            See how it works
          </a>
        </div>
        <div class="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
          <div class="flex -space-x-2">
            <div class="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] text-slate-400">JD</div>
            <div class="w-8 h-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] text-slate-500">AS</div>
            <div class="w-8 h-8 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center text-[10px] text-white font-bold">MK</div>
          </div>
          <span>Joined by 10,000+ beginners</span>
        </div>
      </div>
      <div class="mt-12 lg:mt-0 relative">
        <div class="relative mx-auto w-full max-w-md lg:max-w-none">
          <img src="${heroImg}" alt="Zero to Wealth" class="rounded-2xl shadow-2xl relative z-10 w-full object-cover">
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div class="absolute -bottom-8 -left-4 w-32 h-32 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Why -->
<section id="why" class="py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold text-gold sm:text-4xl uppercase tracking-wider text-sm mb-4">The Zero to Wealth Advantage</h2>
      <h3 class="text-4xl font-bold text-slate-900 mb-6">Why start with us?</h3>
      <p class="text-lg text-slate-600">We don't just tell you to invest. We teach you how to generate the capital to invest in the first place.</p>
    </div>
    <div class="mt-16 grid md:grid-cols-3 gap-8">
      <div class="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-gold/30 transition-colors group">
        <div class="w-12 h-12 bg-gold/10 text-gold rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-colors text-2xl">
          📚
        </div>
        <h3 class="text-xl font-bold text-slate-900">Education-First</h3>
        <p class="mt-4 text-slate-600">No jargon. No complex math. Just clear, step-by-step guides that assume you're starting from zero knowledge.</p>
      </div>
      <div class="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-gold/30 transition-colors group">
        <div class="w-12 h-12 bg-gold/10 text-gold rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-colors text-2xl">
          ⚖️
        </div>
        <h3 class="text-xl font-bold text-slate-900">Both Worlds</h3>
        <p class="mt-4 text-slate-600">Master traditional index funds and HYSA alongside modern DeFi, staking, and crypto airdrops.</p>
      </div>
      <div class="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-gold/30 transition-colors group">
        <div class="w-12 h-12 bg-gold/10 text-gold rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-colors text-2xl">
          🤝
        </div>
        <h3 class="text-xl font-bold text-slate-900">Beginner-Friendly</h3>
        <p class="mt-4 text-slate-600">Our content is designed for people who feel left out of the financial conversation. We welcome everyone.</p>
      </div>
    </div>
  </div>
</section>

<!-- Two Paths -->
<section id="paths" class="py-24 bg-slate-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-4xl font-bold text-slate-900 mb-6">One Goal. Two Paths.</h2>
      <p class="text-lg text-slate-600">We believe in building a balanced portfolio. We teach you how to bridge the gap between traditional safety and modern opportunity.</p>
    </div>
    <div class="grid md:grid-cols-2 gap-12">
      <div class="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
        <h3 class="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
          🏛️ Traditional Wealth Building
        </h3>
        <p class="text-slate-500 mb-8 italic">The proven methods used by generations to build long-term security.</p>
        <ul class="space-y-4 text-slate-600">
          <li class="flex items-start gap-3">
            <svg class="w-6 h-6 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Index Funds:</strong> S&P 500, Total Market</span>
          </li>
          <li class="flex items-start gap-3">
            <svg class="w-6 h-6 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>HYSA:</strong> High-Yield Savings Accounts</span>
          </li>
          <li class="flex items-start gap-3">
            <svg class="w-6 h-6 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Dividend Growth Investing</strong></span>
          </li>
          <li class="flex items-start gap-3">
            <svg class="w-6 h-6 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Tax-Advantaged Accounts:</strong> 401k, IRA</span>
          </li>
        </ul>
      </div>
      <div class="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
        <h3 class="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
          ₿ Modern Digital Wealth
        </h3>
        <p class="text-slate-500 mb-8 italic">Leveraging blockchain technology for asymmetric growth and yield.</p>
        <ul class="space-y-4 text-slate-600">
          <li class="flex items-start gap-3">
            <svg class="w-6 h-6 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Staking:</strong> ETH, SOL, Stablecoins</span>
          </li>
          <li class="flex items-start gap-3">
            <svg class="w-6 h-6 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Decentralized Finance:</strong> Yield Farming, Lending</span>
          </li>
          <li class="flex items-start gap-3">
            <svg class="w-6 h-6 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Airdrop Strategy:</strong> Earning tokens for being early</span>
          </li>
          <li class="flex items-start gap-3">
            <svg class="w-6 h-6 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Cold Storage & Security Fundamentals</strong></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- How It Works -->
<section id="how" class="py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-20">
      <h2 class="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">How It Works</h2>
      <p class="text-lg text-slate-600">Your three-step roadmap from $0 to a wealth-building machine.</p>
    </div>
    <div class="grid md:grid-cols-3 gap-12 relative">
      <div class="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-gold/10 z-0"></div>
      <div class="relative z-10 text-center">
        <div class="w-20 h-20 bg-white border-4 border-gold text-gold rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8 shadow-xl shadow-gold/5">1</div>
        <h3 class="text-2xl font-bold text-slate-900 mb-4">Master the Fundamentals</h3>
        <p class="text-slate-600">We start with the basics. You’ll learn how money works, how to audit your own finances, and the core concepts of both traditional and crypto systems. No jargon, just clarity.</p>
      </div>
      <div class="relative z-10 text-center">
        <div class="w-20 h-20 bg-white border-4 border-gold text-gold rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8 shadow-xl shadow-gold/5">2</div>
        <h3 class="text-2xl font-bold text-slate-900 mb-4">Generate Your First $100</h3>
        <p class="text-slate-600">You can’t invest what you don’t have. We teach you practical, low-friction ways to earn your first "seed capital" through side hustles, micro-tasks, and digital arbitrage.</p>
      </div>
      <div class="relative z-10 text-center">
        <div class="w-20 h-20 bg-white border-4 border-gold text-gold rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8 shadow-xl shadow-gold/5">3</div>
        <h3 class="text-2xl font-bold text-slate-900 mb-4">Automate Your Wealth</h3>
        <p class="text-slate-600">Once you have your first $100, we show you exactly where to put it. You’ll set up automated systems that grow your wealth while you sleep, using the "Two Paths" strategy.</p>
      </div>
    </div>
  </div>
</section>

<!-- Signup -->
${SignupCTA()}
`

function SignupCTA() {
  return `
<section class="py-24 bg-slate-900 text-white overflow-hidden relative">
  <div class="absolute top-0 right-0 w-64 h-64 bg-gold opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <h2 class="text-4xl font-bold sm:text-5xl mb-6">Join 10,000+ future wealth builders</h2>
    <p class="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-12">Get one actionable wealth tip delivered to your inbox every week. No spam. No hype. Just clear, step-by-step guidance.</p>
    <form id="signup-form" action="https://formspree.io/f/placeholder" method="POST" class="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
      <input type="email" id="signup-email" name="email" placeholder="Enter your email" class="flex-grow px-6 py-4 rounded-xl text-slate-900 focus:ring-4 focus:ring-gold outline-none shadow-xl" required>
      <button type="submit" class="bg-gold text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all shadow-xl shadow-gold/10 whitespace-nowrap">
        Get the weekly action email →
      </button>
    </form>
    <div id="signup-message" class="mt-4 hidden font-bold text-gold"></div>
    <p class="mt-8 text-sm text-slate-500 flex items-center justify-center gap-2">
      <svg class="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
      Free • Unsubscribe anytime • No spam, ever
    </p>
  </div>
</section>
`
}

const About = () => `
<section class="pt-32 pb-24 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-bold text-slate-900 mb-8 sm:text-5xl">Our Mission</h1>
    <h2 class="text-2xl font-bold text-gold mb-8 italic border-l-4 border-gold pl-6">"We believe wealth building is a skill. Not a privilege."</h2>
    <div class="space-y-6 text-lg text-slate-600 leading-relaxed">
      <p>Zero to Wealth started with a simple question: <em>Why is all financial advice written for people who already have money?</em></p>
      <p>The personal finance industry tells you to "max out your 401(k)," "buy a diversified portfolio," and "invest 15% of your income." But that advice is useless if you don't have a 401(k). If you don't have a portfolio. If your income barely covers rent.</p>
      <p>We started this platform because we believe the most important financial skill isn't picking stocks — it's learning how the system works. Whether that system is traditional (index funds, dividends, compound interest) or new (staking, DeFi, blockchain).</p>
      <p class="font-bold text-slate-900 py-6 border-y border-gold/20">Our promise: We will never tell you to "just invest what you can." We'll tell you exactly how to get that first dollar, what to do with it, and why. Every step explained. Every term defined. Every concept made simple.</p>
      <p>Financial freedom shouldn't require a finance degree or a trust fund. It requires knowledge, consistency, and time.</p>
      <p>You have all three. Let's start.</p>
    </div>
  </div>
</section>
`

const Products = () => `
<section id="pricing" class="pt-32 pb-24 bg-slate-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-4xl font-bold text-slate-900 mb-6">Simple, Transparent Tiers</h2>
      <p class="text-lg text-slate-600">Choose the path that fits your current stage.</p>
    </div>
    <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div class="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
        <h3 class="text-2xl font-bold text-slate-900">Free Tier</h3>
        <p class="mt-2 text-slate-500 italic">Best for: Beginners who want to learn the ropes</p>
        <div class="mt-6">
          <span class="text-4xl font-extrabold text-slate-900">$0</span>
          <span class="text-slate-500 text-xl"> — forever</span>
        </div>
        <ul class="mt-8 space-y-4 flex-grow text-sm">
          <li class="flex items-center gap-3 text-slate-600">
            <span class="text-gold">✅</span>
            "Zero-to-First-Dollar" flagship course (all 6 modules)
          </li>
          <li class="flex items-center gap-3 text-slate-600">
            <span class="text-gold">✅</span>
            1 curated wealth-building action per week (via email)
          </li>
          <li class="flex items-center gap-3 text-slate-600">
            <span class="text-gold">✅</span>
            Glossary and quickstart guide
          </li>
          <li class="flex items-center gap-3 text-slate-600">
            <span class="text-gold">✅</span>
            Access to blog and beginner guides
          </li>
        </ul>
        <a href="/guides" class="mt-10 block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors">Start Free →</a>
      </div>
      <div class="bg-white p-10 rounded-3xl shadow-xl border-2 border-gold flex flex-col relative">
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black px-6 py-1 rounded-full text-sm font-bold shadow-lg shadow-gold/20">RECOMMENDED</div>
        <h3 class="text-2xl font-bold text-slate-900">Premium Tier</h3>
        <p class="mt-2 text-slate-500 italic">Best for: Committed wealth builders who want accountability</p>
        <div class="mt-6">
          <span class="text-4xl font-extrabold text-slate-900">$19</span>
          <span class="text-slate-500 text-xl"> / month</span>
        </div>
        <ul class="mt-8 space-y-4 flex-grow text-sm">
          <li class="flex items-center gap-3 text-slate-900 font-bold">
             Everything in Free, plus:
          </li>
          <li class="flex items-center gap-3 text-slate-600">
            <span class="text-gold">✅</span>
            Full course library (including advanced modules)
          </li>
          <li class="flex items-center gap-3 text-slate-600">
            <span class="text-gold">✅</span>
            Private community access (Discord or forum)
          </li>
          <li class="flex items-center gap-3 text-slate-600">
            <span class="text-gold">✅</span>
            Monthly live strategy Q&A calls
          </li>
          <li class="flex items-center gap-3 text-slate-600">
            <span class="text-gold">✅</span>
            Digital playbooks and templates
          </li>
        </ul>
        <a href="#" onclick="alert('Stripe integration coming soon!'); return false;" class="mt-10 block w-full bg-gold text-black text-center py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors shadow-lg shadow-gold/20">Go Premium →</a>
      </div>
    </div>
    
    <div class="mt-24">
      <h3 class="text-2xl font-bold text-slate-900 mb-12 text-center">Digital Products & Playbooks</h3>
      <div class="grid md:grid-cols-3 gap-8">
         <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div class="w-full h-40 bg-slate-100 rounded-xl mb-4 flex items-center justify-center text-4xl">📘</div>
            <h4 class="font-bold text-slate-900">The $0 to $100 Side Hustle Playbook</h4>
            <p class="text-sm text-slate-500 mt-2">15 proven zero-cost ways to find your seed money.</p>
            <div class="mt-4 flex justify-between items-center">
               <span class="font-bold text-gold">$12</span>
               <button class="text-xs font-bold text-slate-400 uppercase tracking-widest cursor-not-allowed">Coming Soon</button>
            </div>
         </div>
         <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div class="w-full h-40 bg-slate-100 rounded-xl mb-4 flex items-center justify-center text-4xl">📈</div>
            <h4 class="font-bold text-slate-900">The Passive Income Tracker (Sheet)</h4>
            <p class="text-sm text-slate-500 mt-2">Automated template to track your traditional and crypto yield.</p>
            <div class="mt-4 flex justify-between items-center">
               <span class="font-bold text-gold">$15</span>
               <button class="text-xs font-bold text-slate-400 uppercase tracking-widest cursor-not-allowed">Coming Soon</button>
            </div>
         </div>
         <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div class="w-full h-40 bg-slate-100 rounded-xl mb-4 flex items-center justify-center text-4xl">₿</div>
            <h4 class="font-bold text-slate-900">Airdrop Farming Masterclass</h4>
            <p class="text-sm text-slate-500 mt-2">A step-by-step technical guide to earning free network tokens.</p>
            <div class="mt-4 flex justify-between items-center">
               <span class="font-bold text-gold">$25</span>
               <button class="text-xs font-bold text-slate-400 uppercase tracking-widest cursor-not-allowed">Coming Soon</button>
            </div>
         </div>
      </div>
    </div>
  </div>
</section>
`

const Guides = () => {
  // We'll populate this with an async fetch
  return `
<section class="pt-32 pb-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-slate-900 mb-4">Free Starter Guides</h1>
      <p class="text-lg text-slate-600">Your step-by-step roadmap to financial freedom, starting from $0.</p>
    </div>
    <div id="guides-list" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="animate-pulse flex flex-col gap-4">
        <div class="h-48 bg-slate-100 rounded-2xl"></div>
        <div class="h-6 bg-slate-100 rounded w-3/4"></div>
        <div class="h-4 bg-slate-100 rounded w-full"></div>
      </div>
    </div>
  </div>
</section>
`
}

const GuideDetail = () => `
<section class="pt-32 pb-24 bg-white">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <a href="/guides" class="text-gold font-medium mb-8 inline-block hover:underline">← Back to Guides</a>
    <div id="guide-content" class="prose prose-slate max-w-none">
      <div class="animate-pulse space-y-4">
        <div class="h-10 bg-slate-100 rounded w-3/4"></div>
        <div class="h-4 bg-slate-100 rounded w-full"></div>
        <div class="h-4 bg-slate-100 rounded w-full"></div>
        <div class="h-4 bg-slate-100 rounded w-5/6"></div>
      </div>
    </div>
  </div>
</section>
`

async function fetchGuides() {
  const res = await fetch('/api/guides')
  const data = await res.json()
  const list = document.getElementById('guides-list')
  if (list && data.success) {
    list.innerHTML = data.guides.map(guide => `
      <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-gold/30 transition-all flex flex-col group">
        <div class="text-sm font-bold text-gold mb-4 uppercase tracking-widest">Guide</div>
        <h3 class="text-xl font-bold text-slate-900 group-hover:text-gold transition-colors">${guide.title}</h3>
        <p class="mt-4 text-slate-600 text-sm flex-grow">${guide.description}</p>
        <a href="/guides/${guide.slug}" class="mt-8 text-slate-900 font-bold flex items-center gap-2">
          Read Guide <span class="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    `).join('')
  }
}

async function fetchGuideDetail(slug) {
  const res = await fetch(`/api/guides/${slug}`)
  const data = await res.json()
  const container = document.getElementById('guide-content')
  if (container && data.success) {
    // Simple markdown-ish to HTML (enough for our course files)
    let html = data.guide.content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-extrabold text-slate-900 mb-6">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">$2</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-slate-900 mt-8 mb-3">$1</h3>')
      .replace(/^\> (.*$)/gm, '<blockquote class="border-l-4 border-gold pl-6 italic text-slate-700 my-6">$1</blockquote>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^\- (.*$)/gm, '<li class="ml-4 list-disc">$1</li>')
      .replace(/\n\n/g, '</p><p class="mb-4 text-slate-600 leading-relaxed">')
    
    container.innerHTML = `<p class="mb-4 text-slate-600 leading-relaxed">${html}</p>`
  }
}

const Course = () => `
<section class="pt-32 pb-24 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-bold text-slate-900 mb-4">Zero-to-First-Dollar</h1>
    <p class="text-xl text-slate-600 mb-12">The flagship course to building wealth from absolute zero.</p>
    
    <div class="space-y-12">
      <div class="bg-slate-50 p-8 rounded-3xl border border-gold/10">
        <h2 class="text-2xl font-bold text-slate-900 mb-4">Module 1: The Wealth Mindset</h2>
        <p class="text-slate-600 mb-6">Why capital isn't the barrier and how to leverage the three superpowers: Knowledge, Consistency, and Time.</p>
        <a href="/guides/guide-1-zero-to-first-dollar" class="bg-gold text-black px-6 py-2 rounded-xl font-bold inline-block hover:bg-yellow-400 transition-all shadow-lg shadow-gold/20">Start Module 1</a>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div class="border border-slate-100 p-8 rounded-3xl hover:border-gold/30 transition-all">
          <h3 class="text-xl font-bold text-slate-900 mb-2">Module 2: Side-Hustle to Seed Money</h3>
          <p class="text-slate-600 text-sm mb-4">Find $20-50/week extra without spending a dime upfront.</p>
          <span class="text-xs font-bold text-gold uppercase tracking-widest">Locked • Available after Module 1</span>
        </div>
        <div class="border border-slate-100 p-8 rounded-3xl hover:border-gold/30 transition-all">
          <h3 class="text-xl font-bold text-slate-900 mb-2">Module 3: Traditional Systems</h3>
          <p class="text-slate-600 text-sm mb-4">Master HYSA, Index Funds, and Dividend Investing.</p>
          <span class="text-xs font-bold text-gold uppercase tracking-widest">Locked</span>
        </div>
        <div class="border border-slate-100 p-8 rounded-3xl hover:border-gold/30 transition-all">
          <h3 class="text-xl font-bold text-slate-900 mb-2">Module 4: Crypto On-Ramps</h3>
          <p class="text-slate-600 text-sm mb-4">Safety first. Staking, DeFi, and Airdrops for beginners.</p>
          <span class="text-xs font-bold text-gold uppercase tracking-widest">Locked</span>
        </div>
        <div class="border border-slate-100 p-8 rounded-3xl hover:border-gold/30 transition-all">
          <h3 class="text-xl font-bold text-slate-900 mb-2">Module 5: Building the Flywheel</h3>
          <p class="text-slate-600 text-sm mb-4">Automation, Compounding, and Reinvestment strategies.</p>
          <span class="text-xs font-bold text-gold uppercase tracking-widest">Locked</span>
        </div>
      </div>
    </div>
  </div>
</section>
`

function render() {
  const path = window.location.pathname
  let content = ''
  
  if (path === '/' || path === '/index.html') {
    content = Home()
  } else if (path === '/about') {
    content = About()
  } else if (path === '/products') {
    content = Products()
  } else if (path === '/course') {
    content = Course()
  } else if (path === '/guides') {
    content = Guides()
    setTimeout(fetchGuides, 0)
  } else if (path.startsWith('/guides/')) {
    const slug = path.split('/')[2]
    content = GuideDetail()
    setTimeout(() => fetchGuideDetail(slug), 0)
  } else {
    content = Home()
  }

  app.innerHTML = `
    ${Header()}
    <main>${content}</main>
    ${Footer()}
  `

  // Attach signup form listener if on home or about or anywhere it appears
  const signupForm = document.getElementById('signup-form')
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault()
      const email = document.getElementById('signup-email').value
      const msgDiv = document.getElementById('signup-message')
      
      try {
        const res = await fetch('/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        })
        const data = await res.json()
        if (data.success) {
          signupForm.classList.add('hidden')
          msgDiv.textContent = "Welcome aboard! Check your inbox for your first action item."
          msgDiv.classList.remove('hidden')
        }
      } catch (err) {
        console.error(err)
      }
    })
  }

  // Handle Hash Scrolling if any
  if (window.location.hash) {
    const id = window.location.hash.substring(1)
    const el = document.getElementById(id)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
  }
}

// Initial render
render()
