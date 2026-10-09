import { useState, useEffect, useRef } from 'react'
import {
  ArrowRight, ArrowUp, Award, BookOpen, CheckCircle2, ChevronDown, Clock3,
  GraduationCap, MapPin, Menu, MessageCircle, Phone, Quote, Send,
  ShieldCheck, Sparkles, Star, Users, X
} from 'lucide-react'

const courses = [
  { category: 'SCHOOL', title: 'School Academic Program', detail: 'Structured learning support for middle and secondary classes.', duration: 'Full academic year', icon: BookOpen, tag: 'Popular', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80' },
  { category: 'COLLEGE', title: 'College Preparation', detail: 'Build strong concepts and prepare confidently for board exams.', duration: 'Flexible batches', icon: GraduationCap, tag: 'New batches', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80' },
  { category: 'ENTRY TEST', title: 'Entry Test Preparation', detail: 'Practice-led preparation, mock tests and guided revision.', duration: '8–16 weeks', icon: Award, tag: 'Focused prep', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80' },
]

const faculty = [
  { name: 'Sara Ahmed', subject: 'English Language', image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&h=533&q=80', bio: 'Committed to clear explanations, supportive teaching and helping learners grow.' },
  { name: 'Usman Khan', subject: 'Mathematics', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&h=533&q=80', bio: 'Simplifies complex concepts to build strong mathematical foundations.' },
  { name: 'Mahnoor Hussain', subject: 'Science & Biology', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&h=533&q=80', bio: 'Encourages curiosity and scientific thinking through interactive learning.' },
]

const gallery = [
  { title: 'Collaborative learning', image: 'photo-1529390079861-591de354faf5' },
  { title: 'Learning resources', image: 'photo-1509062522246-3755977927d7' },
  { title: 'Classroom activities', image: 'photo-1427504494785-3a9ca7044f45' },
]

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto mb-12 max-w-2xl text-center' : 'mb-10 max-w-2xl'}>
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-amber-600">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-slate-600">{description}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', course: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [cursorHover, setCursorHover] = useState(false)
  const [cursorClick, setCursorClick] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY })
    const down = () => setCursorClick(true)
    const up   = () => setCursorClick(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    const addHover = () => {
      document.querySelectorAll('a,button,[role="button"]').forEach(el => {
        el.addEventListener('mouseenter', () => setCursorHover(true))
        el.addEventListener('mouseleave', () => setCursorHover(false))
      })
    }
    addHover()
    const obs = new MutationObserver(addHover)
    obs.observe(document.body, { childList: true, subtree: true })
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      obs.disconnect()
    }
  }, [])

  const navItems = [
    ['Home', '#home'], ['About', '#about'], ['Courses', '#courses'],
    ['Faculty', '#faculty'], ['Admissions', '#admissions'], ['Contact', '#contact'],
  ]

  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    setSubmitted(false)
  }

  const submitEnquiry = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const whatsappUrl = 'https://wa.me/923001234567?text=' + encodeURIComponent('Assalam-o-Alaikum, I would like to know more about admissions at EduPro.')
  const mailtoUrl = 'mailto:admissions@example.com?subject=' + encodeURIComponent('Admission enquiry')

  return (
    <div className="min-h-screen cursor-none overflow-hidden bg-white">
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2.5 text-xs sm:flex-row sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 text-center text-slate-200"><Sparkles size={14} className="text-gold" /> Admissions enquiry for the upcoming session is welcome</p>
          <div className="flex items-center gap-4 text-slate-200">
            <a href="tel:+923001234567" className="flex items-center gap-1.5 hover:text-gold"><Phone size={13} /> +92 300 1234567</a>
            <span className="hidden text-slate-500 sm:inline">|</span>
            <span className="hidden sm:inline">Mon–Sat · 8:00 AM–6:00 PM</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-gold"><GraduationCap size={25} /></span>
            <span><span className="block text-xl font-black tracking-tight text-navy">EduPro<span className="text-amber-500">.</span></span><span className="block text-[10px] font-bold uppercase tracking-[0.19em] text-slate-500">Learn · Grow · Succeed</span></span>
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => <a key={label} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-amber-600">{label}</a>)}
          </div>
          <div className="hidden lg:block">
            <a href="#admissions" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-extrabold text-navy transition hover:-translate-y-0.5 hover:bg-amber-400">Apply for Admission <ArrowRight size={16} /></a>
          </div>
          <button type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} className="rounded-xl border border-slate-200 p-2.5 text-navy lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {menuOpen && <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 font-semibold text-slate-700 hover:bg-cream">{label}</a>)}
            <a href="#admissions" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl bg-gold px-4 py-3 text-center font-bold text-navy">Apply for Admission</a>
          </div>
        </div>}
      </header>

      <main>
        <section id="home" className="relative bg-cream">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-24">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-navy shadow-sm"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Your future starts here</div>
              <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">A better way to <span className="relative inline-block text-amber-600">learn<span className="absolute -bottom-1 left-0 -z-0 h-2 w-full rounded-full bg-gold/40"></span></span>, a brighter future.</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">Discover supportive teachers, focused learning and practical guidance that helps every learner move forward with confidence.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#courses" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 font-bold text-white shadow-lg shadow-navy/15 transition hover:-translate-y-0.5 hover:bg-slate-800">Explore Our Programs <ArrowRight size={17} /></a>
                <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-4 font-bold text-navy transition hover:border-navy">Discover EduPro</a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-slate-200 pt-7">
                <div className="flex items-center gap-2"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-amber-600 shadow-sm"><Users size={19} /></span><span className="text-sm font-bold text-slate-700">Student-focused<br /><span className="font-medium text-slate-500">learning support</span></span></div>
                <div className="flex items-center gap-2"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-amber-600 shadow-sm"><ShieldCheck size={19} /></span><span className="text-sm font-bold text-slate-700">A supportive<br /><span className="font-medium text-slate-500">learning environment</span></span></div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -right-4 -top-5 h-28 w-28 rounded-full bg-gold/50 blur-2xl sm:-right-8"></div>
              <div className="absolute -bottom-5 -left-4 h-32 w-32 rounded-full bg-sky-200/70 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-[2rem] border-[7px] border-white shadow-soft">
                <img className="h-[360px] w-full object-cover sm:h-[470px]" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1100&q=85" alt="Institute building" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Learning with purpose</p>
                  <p className="mt-2 max-w-sm text-2xl font-extrabold leading-snug sm:text-3xl">Every learner deserves the chance to shine.</p>
                </div>
              </div>
              <div className="absolute -left-2 top-8 rounded-2xl bg-white p-4 shadow-soft sm:-left-8 sm:p-5">
                <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600"><Star size={22} fill="currentColor" /></span><span><span className="block text-sm font-extrabold text-navy">Learning that matters</span><span className="mt-1 block text-xs text-slate-500">Concepts · Confidence · Growth</span></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-1 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 rounded-3xl bg-white p-4 shadow-soft sm:grid-cols-4 sm:gap-0 sm:p-7">
            {[['01','Personal guidance'],['02','Experienced educators'],['03','Structured programs'],['04','Progress-focused']].map(([num, label], i) => <div key={num} className={`flex items-center gap-3 p-3 sm:px-5 ${i ? 'sm:border-l sm:border-slate-100' : ''}`}><span className="text-xl font-black text-amber-500">{num}</span><span className="text-sm font-bold leading-snug text-navy">{label}</span></div>)}
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative grid grid-cols-2 gap-4">
              <img className="mt-10 h-56 w-full rounded-3xl object-cover shadow-soft sm:h-72" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80" alt="Teacher supporting students in a classroom" loading="lazy" />
              <img className="h-56 w-full rounded-3xl object-cover shadow-soft sm:h-72" src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=700&q=80" alt="Students learning together" loading="lazy" />
              <div className="absolute bottom-4 left-1/2 w-44 -translate-x-1/2 rounded-2xl bg-navy p-4 text-center text-white shadow-xl sm:bottom-6 sm:w-52 sm:p-5"><GraduationCap className="mx-auto mb-2 text-gold" size={28} /><p className="text-sm font-extrabold">Learning for life</p><p className="mt-1 text-xs text-slate-300">Knowledge builds possibility</p></div>
            </div>
            <div>
              <SectionHeading eyebrow="About EduPro" title="Education that opens doors to opportunity." description="We believe education is more than a classroom experience. It is a partnership between learners, educators and families—built around curiosity, consistency and confidence." />
              <div className="space-y-4">
                {['A welcoming environment where questions are encouraged', 'Clear learning goals and structured academic support', 'A focus on understanding, practice and steady progress'].map(item => <div key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={21} /><p className="leading-7 text-slate-600">{item}</p></div>)}
              </div>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-extrabold text-navy hover:text-amber-600">Get to know us <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section id="courses" className="scroll-mt-24 bg-mist py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Explore programs" title="Find the right path for your goals." description="Flexible learning options designed to help students strengthen their foundations, prepare for exams and keep progressing." centered />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {courses.map(({ category, title, detail, duration, icon: Icon, tag, image }) => <article key={title} className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 backdrop-blur-sm shadow-sm">{tag}</div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream text-amber-600"><Icon size={20} /></span>
                    <p className="text-[11px] font-extrabold tracking-[0.18em] text-amber-600">{category}</p>
                  </div>
                  <h3 className="mt-4 text-xl font-extrabold text-navy">{title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">{detail}</p>
                  <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm text-slate-500"><Clock3 size={16} /> {duration}</div>
                  <a href="#admissions" className="mt-5 inline-flex items-center gap-2 font-extrabold text-navy transition group-hover:text-amber-600">Enquire about this program <ArrowRight size={16} /></a>
                </div>
              </article>)}
            </div>
            <p className="mt-6 text-center text-xs text-slate-500">Demo content: replace these sample programs with the institute’s actual courses.</p>
          </div>
        </section>

        <section id="faculty" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <SectionHeading eyebrow="Meet our educators" title="Guidance from people who care." description="Great teachers make challenging ideas easier to understand and help students believe in their potential." />
              <a href="#contact" className="mb-10 inline-flex items-center gap-2 font-extrabold text-navy hover:text-amber-600">Meet the team <ArrowRight size={16} /></a>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {faculty.map((person) => <article key={person.name} className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-xl">
                <div className="relative h-56 w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/50 p-4 pb-0">
                  <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-amber-100/40 blur-2xl transition-all duration-500 group-hover:bg-amber-200/60"></div>
                  <div className="absolute -right-12 bottom-10 h-40 w-40 rounded-full bg-sky-100/40 blur-2xl transition-all duration-500 group-hover:bg-sky-200/60"></div>
                  <img src={person.image} alt={person.name} className="relative z-10 h-full w-full object-cover object-center drop-shadow-md transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="relative z-20 -mt-4 flex flex-1 flex-col rounded-t-3xl bg-white p-7 shadow-[0_-8px_20px_-10px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-black text-navy">{person.name}</h3>
                      <p className="mt-1 text-xs font-extrabold uppercase tracking-widest text-amber-500">{person.subject}</p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-amber-600"><Award size={18} /></span>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{person.bio}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star size={14} className="fill-current" />
                      <Star size={14} className="fill-current" />
                      <Star size={14} className="fill-current" />
                      <Star size={14} className="fill-current" />
                      <Star size={14} className="fill-current" />
                    </div>
                    <div className="flex gap-2">
                      <a href="#contact" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-colors hover:bg-gold hover:text-navy" aria-label="Message"><MessageCircle size={16} /></a>
                    </div>
                  </div>
                </div>
              </article>)}
            </div>
            <p className="mt-5 text-center text-xs text-slate-500">Faculty names are placeholders for this demo. Use real profiles only with permission.</p>
          </div>
        </section>

        <section id="results" className="bg-navy py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div><p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-gold">Our approach</p><h2 className="text-3xl font-black leading-tight sm:text-4xl">Progress worth celebrating.</h2><p className="mt-4 max-w-lg leading-7 text-slate-300">Set meaningful goals, practise consistently and celebrate each step forward. We help learners focus on progress—not just the final score.</p></div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[['01','Build foundations','Understand core concepts'],['02','Practise with purpose','Learn through application'],['03','Review progress','Identify next steps']].map(([num, title, desc]) => <div key={num} className="rounded-2xl border border-white/15 bg-white/5 p-5"><span className="text-sm font-black text-gold">{num}</span><h3 className="mt-5 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{desc}</p></div>)}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Life at EduPro" title="A place to learn together." description="Show prospective students and families what learning looks like at your institute." centered />
            <div className="grid gap-4 sm:grid-cols-3">
              {gallery.map((item) => <div key={item.title} className="group relative overflow-hidden rounded-3xl">
                <img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=800&q=80`} alt={item.title} loading="lazy" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent"></div><p className="absolute bottom-5 left-5 font-extrabold text-white">{item.title}</p>
              </div>)}
            </div>
          </div>
        </section>

        <section id="location" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-10">
                  <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-amber-600">Visit Us</p>
                  <h2 className="text-3xl font-black leading-tight tracking-tight text-navy sm:text-4xl">Our Campus Location.</h2>
                  <p className="mt-4 leading-7 text-slate-600">Drop by our campus to explore our facilities, meet our faculty, and experience our vibrant learning environment firsthand.</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="group flex cursor-pointer items-start gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-md">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber-100"><MapPin size={24} /></span>
                    <div>
                      <h3 className="text-lg font-extrabold text-navy">Main Campus</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">123 Education Boulevard,<br />Knowledge City, 12345</p>
                    </div>
                  </div>
                  <div className="group flex cursor-pointer items-start gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-100"><Clock3 size={24} /></span>
                    <div>
                      <h3 className="text-lg font-extrabold text-navy">Visiting Hours</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">Monday - Saturday<br />8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-4 text-sm font-extrabold text-white transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-lg">
                    Get Directions <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-[2rem] border-[6px] border-white shadow-xl transition-all duration-500 hover:border-amber-100 hover:shadow-2xl">
                <div className="pointer-events-none absolute inset-0 bg-navy/5 transition-opacity duration-300 group-hover:opacity-0"></div>
                <iframe title="Institute Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.313992521671!2d67.0627583150033!3d24.887259184041355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ebc8b8fa21b%3A0xc3c570b77918a562!2sKarachi%20University!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="transition-transform duration-700 group-hover:scale-[1.02]"></iframe>
              </div>
            </div>
          </div>
        </section>

        <section id="admissions" className="scroll-mt-24 bg-cream py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-amber-600">Take the next step</p>
              <h2 className="text-3xl font-black leading-tight text-navy sm:text-4xl">Let’s talk about your learning goals.</h2>
              <p className="mt-5 leading-7 text-slate-600">Tell us a little about the course you’re interested in. Our team can guide you through the next steps.</p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-amber-600 shadow-sm"><MessageCircle size={20} /></span><span><span className="block text-sm font-extrabold text-navy">Quick enquiry</span><span className="text-sm text-slate-500">Ask us about courses and batches</span></span></div>
                <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-amber-600 shadow-sm"><ShieldCheck size={20} /></span><span><span className="block text-sm font-extrabold text-navy">Personal guidance</span><span className="text-sm text-slate-500">Get help choosing a suitable program</span></span></div>
              </div>
            </div>
            <form onSubmit={submitEnquiry} className="rounded-3xl border border-amber-100 bg-white p-6 shadow-soft sm:p-9">
              <h3 className="text-xl font-extrabold text-navy">Admission enquiry</h3><p className="mt-2 text-sm leading-6 text-slate-500">Complete the form below to preview the enquiry flow.</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-bold text-slate-700">Student / Parent name <span className="text-rose-500">*</span><input required name="name" value={form.name} onChange={updateForm} placeholder="Enter your name" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100" /></label>
                <label className="text-sm font-bold text-slate-700">Phone number <span className="text-rose-500">*</span><input required name="phone" value={form.phone} onChange={updateForm} type="tel" placeholder="03XX XXXXXXX" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100" /></label>
                <label className="text-sm font-bold text-slate-700 sm:col-span-2">Program of interest <span className="text-rose-500">*</span><span className="relative mt-2 block"><select required name="course" value={form.course} onChange={updateForm} className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100"><option value="">Select a program</option>{courses.map(c => <option key={c.title} value={c.title}>{c.title}</option>)}</select><ChevronDown size={17} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" /></span></label>
                <label className="text-sm font-bold text-slate-700 sm:col-span-2">Additional message <span className="font-normal text-slate-400">(optional)</span><textarea name="message" value={form.message} onChange={updateForm} rows="3" placeholder="Tell us what you would like to know..." className="mt-2 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100" /></label>
              </div>
              {submitted && <div role="status" className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-800"><strong>Demo form validated.</strong> No information has been sent or stored. Connect a backend or approved form service to receive real enquiries.</div>}
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 font-extrabold text-white transition hover:bg-slate-800">Submit Enquiry <Send size={17} /></button>
              <p className="mt-4 text-center text-xs leading-5 text-slate-400">This demo form does not send or store personal information.</p>
            </form>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Get in touch" title="We’re here to help you get started." description="Replace the sample contact details below with the institute’s verified information." centered />
            <div className="grid gap-4 sm:grid-cols-3">
              <a href="tel:+923001234567" className="rounded-2xl border border-slate-100 p-6 text-center transition hover:border-amber-200 hover:shadow-soft"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-amber-600"><Phone size={21} /></span><h3 className="mt-4 font-extrabold text-navy">Call our team</h3><p className="mt-2 text-sm text-slate-500">+92 300 1234567</p></a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-100 p-6 text-center transition hover:border-emerald-200 hover:shadow-soft"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><MessageCircle size={21} /></span><h3 className="mt-4 font-extrabold text-navy">WhatsApp us</h3><p className="mt-2 text-sm text-slate-500">Quick course enquiries</p></a>
              <div className="rounded-2xl border border-slate-100 p-6 text-center"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-amber-600"><MapPin size={21} /></span><h3 className="mt-4 font-extrabold text-navy">Visit our campus</h3><p className="mt-2 text-sm text-slate-500">Add verified address here</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-[#060f1e] text-white">

        {/* Colorful glow blobs */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-violet-600/20 blur-[80px]"></div>
        <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px]"></div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[80px]"></div>

        {/* Top colored bar */}
        <div className="flex h-1.5 w-full">
          <div className="flex-1 bg-violet-500"></div>
          <div className="flex-1 bg-amber-400"></div>
          <div className="flex-1 bg-cyan-400"></div>
          <div className="flex-1 bg-emerald-400"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">

            {/* Brand column */}
            <div className="group pr-8">
              <a href="#home" className="inline-flex items-center gap-3">
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 p-3 text-white shadow-lg shadow-violet-900/40 transition-transform duration-300 group-hover:scale-110"><GraduationCap size={26} /></span>
                <span className="text-2xl font-black tracking-tight">EduPro<span className="text-amber-400">.</span></span>
              </a>
              <p className="mt-6 text-sm leading-loose text-slate-400">Empowering the next generation with knowledge, confidence, and the skills to succeed in an ever-changing world.</p>
              <div className="mt-8 flex gap-3">
                <a href="#" className="group/icon flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 transition-all hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-500 hover:text-white hover:shadow-lg hover:shadow-violet-500/30"><MessageCircle size={17} /></a>
                <a href="#" className="group/icon flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 transition-all hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-500 hover:text-white hover:shadow-lg hover:shadow-amber-500/30"><Users size={17} /></a>
                <a href="#" className="group/icon flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 transition-all hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/30"><Star size={17} /></a>
              </div>
            </div>

            {/* Programs column — amber accent */}
            <div>
              <div className="mb-6 flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-amber-400"></span>
                <h3 className="text-base font-extrabold text-white">Programs</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-400">
                {[['School Academics','#courses'],['College Prep','#courses'],['Entry Tests','#courses'],['Crash Courses','#courses']].map(([label, href]) =>
                  <li key={label}>
                    <a href={href} className="group/link flex items-center gap-2 transition-colors hover:text-amber-400">
                      <span className="h-1 w-3 rounded-full bg-slate-700 transition-all group-hover/link:w-5 group-hover/link:bg-amber-400"></span>{label}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Quick Links column — cyan accent */}
            <div>
              <div className="mb-6 flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-cyan-400"></span>
                <h3 className="text-base font-extrabold text-white">Quick Links</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-400">
                {navItems.slice(0,4).map(([label, href]) =>
                  <li key={label}>
                    <a href={href} className="group/link flex items-center gap-2 transition-colors hover:text-cyan-400">
                      <span className="h-1 w-3 rounded-full bg-slate-700 transition-all group-hover/link:w-5 group-hover/link:bg-cyan-400"></span>{label}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Contact column — emerald accent */}
            <div>
              <div className="mb-6 flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-emerald-400"></span>
                <h3 className="text-base font-extrabold text-white">Get in Touch</h3>
              </div>
              <ul className="space-y-4 text-sm">
                <li className="group/item flex items-start gap-3 text-slate-400 transition-colors hover:text-emerald-400">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-all group-hover/item:bg-emerald-500 group-hover/item:text-white"><Phone size={15} /></span>
                  <span>+92 300 1234567<br /><span className="text-xs text-slate-500">Mon–Sat, 8am–6pm</span></span>
                </li>
                <li className="group/item flex items-start gap-3 text-slate-400 transition-colors hover:text-emerald-400">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-all group-hover/item:bg-emerald-500 group-hover/item:text-white"><MapPin size={15} /></span>
                  <span>123 Education Blvd<br /><span className="text-xs text-slate-500">Knowledge City, 12345</span></span>
                </li>
                <li className="group/item flex items-start gap-3 text-slate-400 transition-colors hover:text-emerald-400">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-all group-hover/item:bg-emerald-500 group-hover/item:text-white"><Send size={15} /></span>
                  <a href={mailtoUrl} className="hover:text-emerald-400">admissions@edupro.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 bg-black/30">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-600 sm:flex-row sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} <span className="text-slate-400">EduPro Academy.</span> All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-amber-400">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-cyan-400">Terms of Service</a>
              <a href="#" className="transition-colors hover:text-violet-400">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact EduPro on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-900/20 transition hover:scale-105 hover:bg-emerald-600"><MessageCircle size={26} /></a>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={`fixed bottom-24 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-xl shadow-navy/30 transition-all duration-500 hover:bg-amber-500 hover:shadow-amber-500/40 hover:-translate-y-1 ${showTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'}`}
      >
        <ArrowUp size={20} className="transition-transform duration-300 group-hover:-translate-y-1" />
      </button>

      {/* Custom cursor */}
      <div
        className="pointer-events-none fixed z-[9999] transition-transform duration-100"
        style={{ left: cursor.x, top: cursor.y, transform: 'translate(-50%, -50%)' }}
      >
        {/* Outer ring */}
        <div className={`absolute rounded-full border-2 border-amber-400 transition-all duration-300 ${cursorHover ? 'h-12 w-12 -translate-x-1/2 -translate-y-1/2 border-violet-500 opacity-70' : 'h-8 w-8 -translate-x-1/2 -translate-y-1/2 opacity-60'} ${cursorClick ? 'scale-75' : 'scale-100'}`}></div>
        {/* Inner dot */}
        <div className={`absolute rounded-full bg-amber-500 transition-all duration-150 ${cursorHover ? 'h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-violet-500' : 'h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2'} ${cursorClick ? 'scale-150' : 'scale-100'}`}></div>
      </div>
    </div>
  )
}

export default App
