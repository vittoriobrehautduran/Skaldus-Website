import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, ArrowRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ onOpenLogin, onOpenDemo }) => {
  const navRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: { className: 'nav-scrolled', targets: navRef.current },
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-[90%] max-w-5xl rounded-full px-6 py-4 flex justify-between items-center transition-all duration-500 text-white [&.nav-scrolled]:bg-surface/80 [&.nav-scrolled]:backdrop-blur-xl [&.nav-scrolled]:text-graphite [&.nav-scrolled]:shadow-sm"
    >
      <div className="font-heading font-bold text-xl flex items-center gap-2">
        <img src="/images/logo.png" alt="Skaldus" className="w-8 h-8 rounded-full opacity-90" />
        Skaldus
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#tennis" className="hover:opacity-60 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal">Skaldus Tennis</a>
        <a href="#how-it-works" className="hover:opacity-60 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal">How it works</a>
        <a href="#booking" className="hover:opacity-60 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal">Skaldus Booking</a>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenLogin}
          className="bg-[#d6a84f] text-graphite hover:bg-[#e4ba6b] transition-colors px-4 py-2.5 rounded-full text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          Login
        </button>
        <button
          onClick={onOpenDemo}
          className="bg-teal text-white hover:bg-teal-hover transition-colors px-6 py-2.5 rounded-full text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          Request a demo
        </button>
      </div>
    </nav>
  );
};

const HeroMockup = () => {
  return (
    <div className="w-full aspect-[1.5] bg-[#111315] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-row relative z-10 transition-transform duration-700 ease-out">
      {/* Sidebar */}
      <div className="hidden sm:flex w-[22%] bg-[#15171A] border-r border-white/5 flex-col justify-between p-3 lg:p-4">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[7px] text-teal font-bold shrink-0">TK</div>
            <div className="overflow-hidden">
              <p className="text-white text-[10px] font-bold leading-none truncate mb-1">Skaldus</p>
              <p className="text-white/40 text-[8px] truncate">Staff time reporting</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-white/50 text-[9px] p-2 hover:bg-white/5 rounded-md">Payroll</div>
            <div className="flex items-center gap-2 text-white bg-[#1A2D2D] text-[9px] p-2 rounded-md border-l-2 border-teal"><span className="text-teal-100">Calendar</span></div>
            <div className="flex items-center gap-2 text-white/50 text-[9px] p-2 hover:bg-white/5 rounded-md"><Search className="w-3 h-3 shrink-0" /> Review</div>
            <div className="flex items-center gap-2 text-white/50 text-[9px] p-2 hover:bg-white/5 rounded-md">Admin</div>
          </div>
        </div>
        <div className="flex items-center gap-2 pt-3 border-t border-white/5 overflow-hidden">
          <div className="w-5 h-5 rounded-full bg-teal flex items-center justify-center text-[9px] text-white shrink-0">V</div>
          <div>
            <p className="text-white text-[9px] font-bold truncate">Club Admin</p>
            <p className="text-white/40 text-[8px] truncate">Account</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-6 flex flex-col bg-[#111315] overflow-hidden">
        <div className="flex justify-between items-center mb-4 lg:mb-6">
          <div>
            <h2 className="text-white font-heading font-medium text-sm lg:text-base">Monthly report</h2>
            <p className="text-white/40 text-[9px]">Select a date to add or edit entries.</p>
          </div>
          <button className="bg-teal hover:bg-teal-hover transition-colors text-white px-3 py-1.5 rounded text-[9px] font-medium flex items-center gap-1 shrink-0">
            <Search className="w-3 h-3" /> Review
          </button>
        </div>

        <div className="flex-1 bg-[#15171A] rounded-xl border border-white/5 flex flex-col p-3 lg:p-4 min-h-0 shadow-inner">
          <div className="flex justify-between items-center mb-3">
            <button className="w-5 h-5 rounded bg-white/5 hover:bg-white/10 text-white/50 flex items-center justify-center text-xs shrink-0">{'<'}</button>
            <h3 className="text-white text-xs font-medium">April 2026</h3>
            <button className="w-5 h-5 rounded bg-white/5 hover:bg-white/10 text-white/50 flex items-center justify-center text-xs shrink-0">{'>'}</button>
          </div>
          <div className="grid grid-cols-7 self-stretch flex-1 gap-1 min-h-0">
            {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map(d => (
              <div key={d} className="text-center text-white/30 text-[8px] pb-1">{d}</div>
            ))}
            <div className="border border-white/5 rounded bg-[#111315]/50 flex flex-col items-center justify-start py-1 opacity-40"><span className="text-[9px] text-white">30</span></div>
            <div className="border border-white/5 rounded bg-[#111315]/50 flex flex-col items-center justify-start py-1 opacity-40"><span className="text-[9px] text-white">31</span></div>
            {[...Array(30)].map((_, i) => {
              let day = i + 1;
              const isSunday = (day + 1) % 7 === 6;
              const is11th = day === 11;
              const is12th = day === 12;
              const is26th = day === 26;

              let cellClasses = "border border-white/5 rounded flex flex-col p-[2px] lg:p-1 relative min-h-[20px] transition-colors";
              if (is11th) cellClasses = "border border-[#b6812e] bg-[#966b26]/10 rounded flex flex-col p-[2px] lg:p-1 relative min-h-[20px]";
              if (is26th) cellClasses = "border border-teal/40 bg-teal/5 rounded flex flex-col p-[2px] lg:p-1 relative min-h-[20px]";

              return (
                <div key={day} className={cellClasses}>
                  <span className={`text-[8px] lg:text-[9px] text-center w-full ${isSunday ? 'text-red-400/80' : 'text-white/70'}`}>{day}</span>
                  {is12th && (
                    <div className="mt-auto bg-[#1a3835] text-teal-300 text-[7px] text-center rounded-[2px] w-full py-[2px] leading-none border border-teal/20">5.0h</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = ({ onOpenModal }) => {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <header ref={container} className="relative min-h-[100dvh] pt-32 pb-24 w-full flex items-center justify-center overflow-hidden bg-graphite">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-teal/20 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-teal/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-[#00E5FF]/5 blur-[100px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white pt-10 md:pt-0">
          <p className="hero-element font-sans font-bold text-teal mb-4 tracking-wider uppercase text-sm">Skaldus Suite For Sports Clubs</p>
          <h1 className="hero-element font-heading text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Clear monthly staff reporting for clubs, <span className="text-white mt-2 block">starting with Skaldus Tennis.</span>
          </h1>
          <p className="hero-element mt-6 max-w-lg text-lg text-white/70 font-sans">
            Skaldus Tennis is available today for tennis and table-tennis clubs. Staff log work, leave, and compensation in one monthly flow that clubs can review before payroll follow-up.
          </p>
          <div className="hero-element mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenModal}
              className="bg-[#d6a84f] text-graphite hover:bg-[#e4ba6b] transition-all px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              Login <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#booking" className="text-white/80 hover:text-white underline underline-offset-4 py-4">
              Skaldus Booking is coming soon
            </a>
          </div>
        </div>

        <div className="hero-element relative mt-12 md:mt-0 perspective-1000 w-full group">
          <div className="absolute inset-0 bg-teal/20 blur-[80px] rounded-full translate-y-4 scale-90 group-hover:bg-teal/30 transition-colors duration-700"></div>

          <div className="relative z-10 rotate-[-1.5deg] group-hover:rotate-[0deg] transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-xl">
            <HeroMockup />
          </div>

          <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-surface text-graphite rounded-xl p-4 shadow-xl z-20 border border-muted pointer-events-none group-hover:-translate-y-8 transition-transform duration-700 ease-out" style={{ animation: "bounce 4s infinite" }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-teal" /></div>
              <div>
                <p className="font-bold text-xs font-sans">Entry saved</p>
                <p className="text-[10px] text-secondary font-mono">April 12 • 5.0h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const TennisSection = ({ onOpenLogin, onOpenDemo }) => {
  return (
    <section id="tennis" className="py-24 md:py-32 bg-paper">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Skaldus Tennis is live today</h2>
        <p className="text-lg text-secondary max-w-3xl mb-10">
          Skaldus Tennis is a web app for tennis and table-tennis clubs that need monthly staff time reporting in one structured flow.
          It helps clubs replace scattered spreadsheets with a clear monthly record of work, leave, and compensation.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-surface border border-muted rounded-3xl p-8">
            <h3 className="font-heading text-2xl font-bold mb-4">Who it is for</h3>
            <ul className="space-y-2 text-secondary">
              <li>Club managers who need clean monthly reporting</li>
              <li>Coaches and café staff with variable hours</li>
              <li>Staff who report time and leave in one place</li>
            </ul>
          </div>
          <div className="bg-surface border border-muted rounded-3xl p-8">
            <h3 className="font-heading text-2xl font-bold mb-4">Benefits for the club</h3>
            <ul className="space-y-2 text-secondary">
              <li>One monthly structure instead of disconnected files</li>
              <li>Clear draft vs submitted status for each month</li>
              <li>Review before hand-in to reduce back-and-forth</li>
              <li>Admin correction workflow when a month needs reopening</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onOpenLogin}
            className="bg-[#d6a84f] text-graphite hover:bg-[#e4ba6b] transition-colors px-8 py-4 rounded-full font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            Login
          </button>
          <button
            onClick={onOpenDemo}
            className="bg-teal text-white hover:bg-teal-hover transition-colors px-8 py-4 rounded-full font-medium text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            Request a demo
          </button>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    'Your club invites you to register through a club-controlled access link.',
    'After your account is created, you sign in with secure email-based login.',
    'The dashboard shows current and previous month totals and submission status.',
    'Use the monthly calendar to add or edit daily entries.',
    'Review the month, then submit as the official hand-in for that period.',
    'If needed, club admins can reopen a submitted month for corrections.',
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">How Skaldus Tennis works</h2>
        <p className="text-secondary text-lg max-w-3xl mb-10">
          Built around a practical month-end workflow for staff and club administrators.
        </p>
        <ol className="grid md:grid-cols-2 gap-4 mb-12">
          {steps.map((step, index) => (
            <li key={step} className="bg-paper border border-muted rounded-2xl p-6">
              <p className="text-sm font-mono text-teal mb-2">STEP {index + 1}</p>
              <p className="text-secondary">{step}</p>
            </li>
          ))}
        </ol>
        <div className="grid md:grid-cols-3 gap-4">
          <article className="bg-paper border border-muted rounded-2xl p-6">
            <h3 className="font-heading text-xl font-bold mb-3">Work entries</h3>
            <p className="text-secondary text-sm">
              Staff can report work such as café shifts, coaching, private training, administration, cleaning, and other tasks with start/end times.
            </p>
          </article>
          <article className="bg-paper border border-muted rounded-2xl p-6">
            <h3 className="font-heading text-xl font-bold mb-3">Leave entries</h3>
            <p className="text-secondary text-sm">
              Track vacation, sick leave, parental leave, and other leave types, including full-day leave where relevant.
            </p>
          </article>
          <article className="bg-paper border border-muted rounded-2xl p-6">
            <h3 className="font-heading text-xl font-bold mb-3">Compensation entries</h3>
            <p className="text-secondary text-sm">
              Register mileage and other reimbursements with short descriptions for monthly follow-up.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [name, setName] = useState('');
  const [club, setClub] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          club,
          email,
          phone,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setStatus('success');
      setStatusMessage('Thanks. We got your message and will get back to you.');
      setName('');
      setClub('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      setStatus('error');
      setStatusMessage('Could not send right now. Please try again.');
    }
  };

  return (
    <section id="contact-form" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-paper border border-muted rounded-3xl p-10 md:p-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Contact us</h2>
          <p className="text-secondary text-lg max-w-3xl mb-8">
            Tell us a bit about your organization and we will reach out.
          </p>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              required
              className="w-full bg-surface border border-muted rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <input
              type="text"
              value={club}
              onChange={(event) => setClub(event.target.value)}
              placeholder="Club / organization"
              required
              className="w-full bg-surface border border-muted rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              required
              className="w-full bg-surface border border-muted rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Phone number"
              required
              className="w-full bg-surface border border-muted rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="How can we help?"
              rows={4}
              className="md:col-span-2 w-full bg-surface border border-muted rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="md:col-span-2 bg-teal text-white rounded-xl px-6 py-3 hover:bg-teal-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </button>
          </form>
          {statusMessage ? (
            <p className={`text-sm mt-3 ${status === 'error' ? 'text-red-700' : 'text-teal'}`}>{statusMessage}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

const BookingSection = () => {
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingStatus, setBookingStatus] = useState('idle');
  const [bookingMessage, setBookingMessage] = useState('');

  const handleBookingSubmit = async (event) => {
    event.preventDefault();
    setBookingStatus('loading');
    setBookingMessage('');

    try {
      const response = await fetch('/api/booking-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: bookingEmail,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setBookingStatus('success');
      setBookingMessage('Thanks. We received your interest for Skaldus Booking.');
      setBookingEmail('');
    } catch (error) {
      setBookingStatus('error');
      setBookingMessage('Could not send right now. Please try again or email contact@brehautconsulting.com.');
    }
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-paper">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-surface border border-muted rounded-3xl p-10 md:p-12">
          <p className="inline-flex text-xs tracking-wider uppercase font-mono bg-muted px-3 py-1 rounded-full mb-4">Coming soon</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Skaldus Booking</h2>
          <p className="text-secondary text-lg max-w-3xl mb-8">
            Skaldus will grow into multiple products. Booking is the next planned product in the suite and will be announced separately when ready.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleBookingSubmit} aria-label="Notify me form">
            <input
              type="email"
              placeholder="Email for updates"
              value={bookingEmail}
              onChange={(event) => setBookingEmail(event.target.value)}
              required
              className="flex-1 rounded-xl border border-muted bg-paper px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <button
              type="submit"
              disabled={bookingStatus === 'loading'}
              className="bg-graphite text-white rounded-xl px-6 py-3 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              {bookingStatus === 'loading' ? 'Sending...' : 'Notify me'}
            </button>
          </form>
          {bookingMessage ? (
            <p className={`text-sm mt-2 ${bookingStatus === 'error' ? 'text-red-700' : 'text-teal'}`}>{bookingMessage}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section className="py-16 bg-surface border-y border-muted">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-heading text-2xl font-bold mb-3">Trust and privacy</h2>
        <p className="text-secondary">
          Skaldus handles staff reporting data with care, using enterprise-ready infrastructure and GDPR-minded practices.
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-graphite text-white rounded-t-[4rem] px-6 py-20 pb-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-4">Skaldus</h2>
            <p className="text-white/60 max-w-xs mb-3">B2B software for sports clubs and similar organizations.</p>
            <p className="text-white/60 text-sm">Built by Brehaut Consulting.</p>
          </div>
          <div className="flex flex-col gap-4 text-white/70">
            <h4 className="text-white font-medium mb-2">Products</h4>
            <a href="#tennis" className="hover:text-white transition-colors">Skaldus Tennis</a>
            <a href="#booking" className="hover:text-white transition-colors">Skaldus Booking (coming soon)</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-4 text-white/70">
            <h4 className="text-white font-medium mb-2">Company</h4>
            <p className="text-white/60">Brehaut Consulting</p>
            <a href="mailto:contact@brehautconsulting.com" className="hover:text-white transition-colors">contact@brehautconsulting.com</a>
            <a href="tel:0736463045" className="hover:text-white transition-colors">0736463045</a>
          </div>
          <div className="flex flex-col gap-4 text-white/70">
            <h4 className="text-white font-medium mb-2">Legal</h4>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/50 text-sm">
          <p>© Skaldus.</p>
          <p id="contact" className="mt-4 md:mt-0">Contact: contact@brehautconsulting.com · 0736463045</p>
        </div>
      </div>
    </footer>
  );
};

const ClubModal = ({ isOpen, onClose }) => {
  const [clubs, setClubs] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch('/clubs.json')
      .then(res => res.json())
      .then(data => setClubs(data))
      .catch(() =>
        setClubs([
          {
            id: 'spangatbk',
            name: 'Spånga TBK',
            url: 'https://staffcheck.spangatbk.se',
          },
        ])
      );
  }, []);

  if (!isOpen) return null;

  const filtered = clubs.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-graphite/40 backdrop-blur-sm p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-surface w-full max-w-md rounded-[2rem] p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-heading font-bold text-2xl">Login to your club</h3>
          <button onClick={onClose} className="text-secondary hover:text-graphite">✕</button>
        </div>
        <p className="text-secondary mb-6">Choose your club to continue to your staff portal.</p>
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
          <input
            type="text"
            placeholder="Search your club..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-paper border border-muted rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-teal transition-colors font-medium"
          />
        </div>
        <div className="border border-muted rounded-xl overflow-y-auto max-h-[250px]">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-secondary text-sm">No results</div>
          ) : (
            filtered.map((club, i) => (
              <a
                key={club.id}
                href={club.url}
                className={`block p-4 hover:bg-paper transition-colors ${i !== filtered.length - 1 ? 'border-b border-muted' : ''} font-medium`}
              >
                {club.name}
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const DemoModal = ({ isOpen, onClose }) => {
  const [organization, setOrganization] = useState('');
  const [clubType, setClubType] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          organization,
          clubType,
          phone,
          email,
          notes,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      setStatus('success');
      setMessage('Thanks. We received your demo request.');
      setOrganization('');
      setClubType('');
      setPhone('');
      setEmail('');
      setNotes('');
    } catch (error) {
      setStatus('error');
      setMessage('Could not send right now. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-graphite/40 backdrop-blur-sm p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-surface w-full max-w-lg rounded-[2rem] p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-heading font-bold text-2xl">Request a demo</h3>
          <button onClick={onClose} className="text-secondary hover:text-graphite">✕</button>
        </div>
        <p className="text-secondary mb-6">Share a few details and we will contact your organization.</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            value={organization}
            onChange={(event) => setOrganization(event.target.value)}
            placeholder="Organization / club name"
            required
            className="w-full bg-paper border border-muted rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
          />
          <input
            type="text"
            value={clubType}
            onChange={(event) => setClubType(event.target.value)}
            placeholder="Club type (tennis, table-tennis, etc.)"
            required
            className="w-full bg-paper border border-muted rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
          />
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Phone number"
              required
              className="w-full bg-paper border border-muted rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              required
              className="w-full bg-paper border border-muted rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Optional note"
            rows={3}
            className="w-full bg-paper border border-muted rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-teal text-white rounded-xl px-6 py-3 hover:bg-teal-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            {status === 'loading' ? 'Sending...' : 'Send request'}
          </button>
        </form>
        {message ? <p className={`text-sm mt-3 ${status === 'error' ? 'text-red-700' : 'text-teal'}`}>{message}</p> : null}
      </div>
    </div>
  );
};

export default function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      <Navbar onOpenLogin={() => setLoginModalOpen(true)} onOpenDemo={() => setDemoModalOpen(true)} />
      <Hero onOpenModal={() => setLoginModalOpen(true)} />
      <main>
        <TennisSection onOpenLogin={() => setLoginModalOpen(true)} onOpenDemo={() => setDemoModalOpen(true)} />
        <HowItWorks />
        <ContactSection />
        <BookingSection />
        <TrustSection />
      </main>
      <Footer />

      <ClubModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}
