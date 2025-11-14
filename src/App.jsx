import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import {
  Bot,
  Sparkles,
  Menu,
  X,
  ShieldCheck,
  CreditCard,
  Users,
  Zap,
  Check,
} from 'lucide-react'

function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg ring-1 ring-white/10">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">
            thebuddies
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-blue-100 hover:text-white">Features</a>
          <a href="#pricing" className="text-sm text-blue-100 hover:text-white">Pricing</a>
          <a href="#faq" className="text-sm text-blue-100 hover:text-white">FAQ</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20">
            <Sparkles className="h-4 w-4" /> Add to Discord
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/20">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 rounded-xl border border-white/10 bg-blue-900/60 p-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#features" className="rounded-md px-3 py-2 text-blue-100 hover:bg-white/10">Features</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="rounded-md px-3 py-2 text-blue-100 hover:bg-white/10">Pricing</a>
            <a onClick={() => setOpen(false)} href="#faq" className="rounded-md px-3 py-2 text-blue-100 hover:bg-white/10">FAQ</a>
            <a href="#" className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20">
              <Sparkles className="h-4 w-4" /> Add to Discord
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient + grain */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.25),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(99,102,241,0.18),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.20] mix-blend-soft-light" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100">
            <Sparkles className="h-3.5 w-3.5" /> Turn communities into premium products
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            thebuddies — Discord bot for premium subscriptions
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-blue-100 md:text-lg">
            Create, manage, and monetize membership tiers. Automate access, billing, and
            upgrades so you can focus on delivering value while we handle the rest.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-900/30 transition hover:brightness-110"
            >
              <Bot className="h-5 w-5" /> Add to Discord
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              See pricing
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-blue-200/70">
            <div className="inline-flex items-center gap-1"><Check className="h-3.5 w-3.5"/> 1-click role sync</div>
            <div className="inline-flex items-center gap-1"><Check className="h-3.5 w-3.5"/> Stripe & crypto ready</div>
            <div className="inline-flex items-center gap-1"><Check className="h-3.5 w-3.5"/> No code setup</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 h-[480px] w-full rounded-2xl border border-white/10 bg-gradient-to-b from-blue-900/30 to-indigo-900/20 p-2 shadow-2xl backdrop-blur md:h-[560px]"
        >
          <div className="h-full w-full overflow-hidden rounded-xl">
            <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    {
      icon: ShieldCheck,
      title: 'Automated access control',
      desc: 'Grant and revoke roles instantly based on live subscription status.',
    },
    {
      icon: CreditCard,
      title: 'Seamless payments',
      desc: 'Charge in one-time or recurring, support discounts and trials.',
    },
    {
      icon: Users,
      title: 'Tiers & bundles',
      desc: 'Create premium tiers, bundles, and time-limited passes with ease.',
    },
    {
      icon: Zap,
      title: 'Powerful automations',
      desc: 'Welcome flows, DMs, renewals, and churn win-backs on autopilot.',
    },
  ]

  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Everything you need to monetize</h2>
        <p className="mt-3 text-blue-100">
          A single bot to launch paid communities, manage access, and grow revenue.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur transition hover:bg-white/10"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 ring-1 ring-white/10">
              {React.createElement(it.icon, { className: 'h-5 w-5 text-white' })}
            </div>
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-blue-100">{it.desc}</p>
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition group-hover:scale-125" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      period: 'mo',
      highlight: false,
      features: ['Up to 200 members', '1 premium tier', 'Basic automations', 'Email support'],
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'mo',
      highlight: true,
      features: ['Unlimited members', 'Multiple tiers', 'Advanced automations', 'Priority support'],
    },
  ]

  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-3 text-blue-100">Start free and scale as your community grows.</p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`relative rounded-2xl border p-6 backdrop-blur ${
              p.highlight
                ? 'border-blue-400/40 bg-gradient-to-b from-blue-500/15 to-indigo-500/10 shadow-[0_0_0_1px_rgba(96,165,250,0.2)]'
                : 'border-white/10 bg-white/5'
            }`}
          >
            {p.highlight && (
              <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-3 py-1 text-xs font-medium text-white">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-semibold text-white">{p.name}</h3>
            <div className="mt-4 flex items-end gap-1 text-white">
              <span className="text-4xl font-extrabold">{p.price}</span>
              <span className="mb-1 text-sm text-blue-100">/{p.period}</span>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-blue-100">
              {p.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-400" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium transition ${
                p.highlight
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-900/30 hover:brightness-110'
                  : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              Get started
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  const items = [
    {
      q: 'How does access management work?',
      a: 'Members are granted Discord roles automatically after payment and removed if their subscription expires. Everything stays perfectly in sync.',
    },
    {
      q: 'Which payment processors are supported?',
      a: 'Stripe is supported out of the box. Crypto payments and regional gateways are available upon request.',
    },
    {
      q: 'Do I need to code?',
      a: 'No. You can set up tiers, prices, and benefits from a simple dashboard. The bot handles the rest.',
    },
    {
      q: 'Can I migrate from another tool?',
      a: 'Yes. Import members and map roles in minutes with our guided importer.',
    },
  ]

  return (
    <section id="faq" className="relative mx-auto max-w-3xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold text-white sm:text-4xl"
      >
        Frequently asked questions
      </motion.h2>

      <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
        {items.map((item, i) => (
          <details key={i} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-white">
              <span className="font-medium">{item.q}</span>
              <span className="ml-4 text-blue-200 transition group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-sm text-blue-100">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-sm text-blue-200">
      © {new Date().getFullYear()} thebuddies. All rights reserved.
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1222] text-white">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(80%_60%_at_50%_0%,#0F1B3D_0%,#0B1222_60%)]" />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}
