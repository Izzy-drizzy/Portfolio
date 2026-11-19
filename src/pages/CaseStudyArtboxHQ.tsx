import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import ImageZoom from '../components/ImageZoom';
import SEO from '../components/SEO';
import WorkLabel from '../components/WorkLabel';

// Every claim on this page traces to the Artbox HQ source and the studio's own records
// (C:\Work\Artbox\CLAUDE.md, artbox-hq/, diagnostic/, runner/). Screens were captured from a copy of the
// app running on invented sample records, with no connection to the real database.
const IMG = '/images/artbox-hq';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const sectionAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

function SectionLabel({ children }: { children: string }) {
  return <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-3">{children}</p>;
}

const steps = [
  {
    num: '01',
    title: 'Find',
    body: 'On the Pipeline page I pick a trade and a town. The search runs as a job and adds every business it finds. Each trade has a pattern the name or a Google category must match, so merchants, suppliers and handymen drop out.',
  },
  {
    num: '02',
    title: 'Score',
    body: 'Each lead gets two scores. Needs us counts what there is to fix. Ready to pay counts signs a firm already spends on getting work, such as Google Ads, a paid lead site like Checkatrade, or a limited company. Priority combines the two and sorts the list.',
  },
  {
    num: '03',
    title: 'Check',
    body: "The health check reads the firm's website and its Google reviews. It compares the review count with the ten most-reviewed firms nearby, and any complaint it reports carries the customer's own words.",
  },
  {
    num: '04',
    title: 'Audit page',
    body: 'Each prospect gets a private page behind a random link, with no login. From HQ I can preview it without it counting as their view, and the lead page shows when they first opened it.',
  },
];

const decisions = [
  {
    num: '01',
    title: 'A finding only reaches a prospect if the data proves it',
    saw: 'On the first real batch of leads, I checked the sites by hand. The finding "no way to get in touch except calling" was false for 7 of 8 of them. Their forms sat on Contact pages or were loaded by plugins.',
    changed: 'The check now looks at up to 5 contact, quote, callback and about pages before it says a form is missing. When it cannot see a page properly, such as a form inside an embedded frame or a site drawn by script, it says nothing. A site it cannot reach shows as "Checked by hand" on the audit. After hand-checking another prospect, I also took six claims off the audit that page source cannot prove, such as no live chat and no tap-to-call. They stay as signals for us.',
    why: 'The audit goes to the owner of the business it describes. A wrong claim there tells them we did not look, so the rule is simple: when the check is unsure, it stays quiet.',
    img: {
      src: `${IMG}/audit-checked-by-hand.webp`,
      alt: 'The "At a glance" card on an audit page. Your website is marked "Checked by hand", Your Google reviews "Needs attention", and What your customers say "Not enough reviews".',
      caption: 'When the website check is blocked, the audit says "Checked by hand" and makes no website claims.',
    },
  },
  {
    num: '02',
    title: 'Only unhappy reviews count as complaints',
    saw: "Five-star reviews often mention other firms' no-shows as praise: the others never turned up, this one did. Counting complaint words in every review would flag those as complaints about the firm being praised.",
    changed: 'A review only counts as a complaint if it is rated 3 stars or below and from the last year. A no-show or aftercare complaint no longer counts as "couldn\'t get through". Every complaint the audit reports quotes the customer\'s own words.',
    why: 'Flagging praise as a complaint would accuse a firm of the very thing its customers thanked it for.',
  },
  {
    num: '03',
    title: 'Speed is named by band, and only on the audit page',
    saw: "Google's PageSpeed score for the same site swung by 20 or more points between runs. One site scored 27, then 4.",
    changed: 'A speed finding only appears below 40, it names Google\'s "Poor" band alongside the score, and it is dated. It goes on the audit page and never in an email or letter.',
    why: 'If the owner runs the test again, they should still land in the band we named.',
  },
];

export default function CaseStudyArtboxHQ() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SEO title="Artbox HQ Case Study" description="Artbox HQ is the CRM my studio runs on, which I designed and built. It finds and scores leads, checks each prospect's website and reviews, and builds a private audit page for each one." path="/work/artbox-hq" />
      <Navigation onOpenContact={() => setContactOpen(true)} />

      <main>

        {/* ── Hero ── */}
        <section className="pt-28 pb-16 px-4 md:px-10 overflow-x-clip grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-0 lg:gap-y-7">
          <motion.div
            className="lg:col-span-5 lg:row-start-1 lg:self-end flex flex-col gap-7 min-w-0"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 text-xs text-[var(--text-500)]">
              <Link to="/work" className="hover:text-[var(--text-300)] transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-[var(--text-300)]">Artbox HQ</span>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="flex flex-wrap items-center gap-3 text-xs">
              <WorkLabel kind="Internal tool" />
              <span className="text-[var(--text-400)]">Artbox Studio, 2026</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={2} className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15]">
              Artbox HQ: the CRM my studio runs on
            </motion.h1>
            <motion.p variants={fadeUp} custom={3} className="text-sm text-[var(--text-400)] leading-relaxed max-w-md">
              My studio looks for work with UK kitchen fitters, roofers and builders. HQ is how we find them. It finds and scores leads, checks each prospect's website and reviews, and builds a private audit page for each one. I designed it and built it, around one rule: a finding only reaches a prospect if the data proves it.
            </motion.p>
          </motion.div>

          <motion.div
            className="lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2 lg:self-center lg:pl-10 min-w-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <figure className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
              <ImageZoom
                src={`${IMG}/leads.webp`}
                alt="Artbox HQ lead list on sample data. Thirteen invented businesses, each with its trade, town, Google rating and review count, a priority score from 82 down to 19 with a bar (one new lead has no score yet), how it may be reached (Email or Letter / form), whether an owner's mobile is listed, and a sample status. Tabs above count the leads by status, and a note in the sidebar says every business is invented."
                className="w-full h-auto object-contain block"
              />
              <figcaption className="text-xs text-[var(--text-500)] px-4 py-3 border-t border-[var(--border)]">
                The lead list, sorted by priority. Screens show sample data.
              </figcaption>
            </figure>
          </motion.div>

          <motion.dl
            className="lg:col-span-5 lg:row-start-2 lg:self-start grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 border-t border-[var(--border)] pt-6 max-w-md"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {[
              { label: 'Role', value: 'Designed and built it, as founder of Artbox Studio' },
              { label: 'Built with', value: 'React, Vite and Supabase, on Cloudflare Workers, with a Node job runner' },
              { label: 'Status', value: 'In use. The studio runs its outreach on it' },
              { label: 'Who uses it', value: 'The studio only. It is an internal tool, with no client logins' },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-1.5">{item.label}</dt>
                <dd className="text-sm text-[var(--text-300)] leading-relaxed">{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        </section>

        {/* ── The need ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <SectionLabel>The need</SectionLabel>
              <h2 className="text-2xl font-medium">What the studio needed</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6 space-y-3">
              <p className="text-sm text-[var(--text-400)] leading-relaxed">
                The studio designs and builds AI tools for UK home-improvement firms. We reach those firms through outreach, and each message can link to a short health check on their business.
              </p>
              <p className="text-sm text-[var(--text-400)] leading-relaxed">
                For every firm I needed three answers. Is it really a kitchen, roofing or building firm? Is it worth contacting? And what can we say about how it looks online that is true? An earlier Python script scored Google Maps exports into a spreadsheet. HQ puts the search, the checks, the scores, the audit page and the follow-up notes in one place.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── What it does ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>The tool</SectionLabel>
              <h2 className="text-2xl font-medium">What it does</h2>
            </motion.div>
            <motion.ol variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {steps.map((s) => (
                <li key={s.num} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span className="text-xs text-[var(--text-600)] font-mono mb-4 block">{s.num}</span>
                  <h3 className="text-base font-semibold mb-3">{s.title}</h3>
                  <p className="text-sm text-[var(--text-400)] leading-relaxed">{s.body}</p>
                </li>
              ))}
            </motion.ol>

            <div className="grid grid-cols-1 gap-6">
              <motion.figure variants={fadeUp} className="rounded-xl overflow-hidden bg-[var(--surface)] border border-[var(--border)]">
                <ImageZoom
                  src={`${IMG}/lead-detail.webp`}
                  alt="One sample lead in Artbox HQ, Wrenhallow Roofing. A banner says the website was checked by hand because the check could not open the site. Next step buttons to run the health check, write outreach or build a website, with the note that drafts are written from the health check and nothing is ever sent from HQ. The audit link with Preview and Copy link buttons, and 0 views because preview doesn't count. Contact details and Meta ads links to check by hand. Scores of 66 priority, 20 needs us and 85 ready to pay, seven signals behind them, and one finding about the firm's review count. Notes and activity sit on the right, and the Outreach drafts box is empty."
                  className="w-full h-auto object-contain block"
                />
                <figcaption className="text-xs text-[var(--text-500)] px-4 py-3 border-t border-[var(--border)]">
                  One lead whose website was checked by hand: its scores, the signals behind them, and what the health check found.
                </figcaption>
              </motion.figure>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <motion.figure variants={fadeUp} className="lg:col-span-7 rounded-xl overflow-hidden bg-[var(--surface)] border border-[var(--border)] flex flex-col">
                  <div className="flex-1 bg-[#F4EFE7]">
                    <ImageZoom
                      src={`${IMG}/audit-findings.webp`}
                      alt="The audit page a prospect sees, at desktop width, for a sample firm. At a glance: the website could be better, Google reviews need attention, and what customers say needs attention. A bar comparing 14 reviews with 76 for the ten most-reviewed firms nearby, and a rating of 4.1 stars against their 4.8. What we found: seven findings under the website, Google reviews and what customers say, including no enquiry form, a Poor PageSpeed score of 31 out of 100, fewer reviews than nearby firms, and two quoted reviews about not hearing back."
                      className="w-full h-auto object-contain block"
                    />
                  </div>
                  <figcaption className="text-xs text-[var(--text-500)] px-4 py-3 border-t border-[var(--border)]">
                    The audit page the prospect sees.
                  </figcaption>
                </motion.figure>
                <motion.figure variants={fadeUp} custom={1} className="lg:col-span-5 rounded-xl overflow-hidden bg-[var(--surface)] border border-[var(--border)] flex flex-col">
                  <div className="flex-1 grid grid-cols-2 gap-3 p-3 items-start">
                    <ImageZoom
                      src={`${IMG}/audit-phone-top.webp`}
                      alt="The same audit page at phone width: the heading, a short summary that counts 7 things worth fixing, and the yearly value of one, two or three extra jobs a month, worked out at the low end of a job's price."
                      className="w-full h-auto object-contain block rounded-lg"
                    />
                    <ImageZoom
                      src={`${IMG}/audit-phone-findings.webp`}
                      alt="Further down the phone audit page: the at a glance card, the review comparison and the seven findings, stacked in one column."
                      className="w-full h-auto object-contain block rounded-lg"
                    />
                  </div>
                  <figcaption className="text-xs text-[var(--text-500)] px-4 py-3 border-t border-[var(--border)]">
                    The same audit page at phone width.
                  </figcaption>
                </motion.figure>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Decisions ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Decisions</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">What I changed after checking its work</h2>
            </motion.div>
            <div className="space-y-6">
              {decisions.map((c) => (
                <motion.div key={c.num} variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4">
                    <span className="text-xs text-[var(--text-600)] font-mono mb-3 block">{c.num}</span>
                    <h3 className="text-base font-semibold">{c.title}</h3>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6 space-y-4 min-w-0">
                    <div>
                      <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">What I saw</p>
                      <p className="text-sm text-[var(--text-400)] leading-relaxed">{c.saw}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">What I changed</p>
                      <p className="text-sm text-[var(--text-300)] leading-relaxed">{c.changed}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Why</p>
                      <p className="text-sm text-[var(--text-400)] leading-relaxed">{c.why}</p>
                    </div>
                    {c.img && (
                      <figure className="rounded-lg overflow-hidden border border-[var(--border)] bg-[#F4EFE7]">
                        <ImageZoom src={c.img.src} alt={c.img.alt} className="w-full h-auto object-contain block" />
                        <figcaption className="text-xs text-[var(--text-500)] px-4 py-3 border-t border-[var(--border)] bg-[var(--surface)]">{c.img.caption}</figcaption>
                      </figure>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── How it's built ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <SectionLabel>How it's built</SectionLabel>
              <h2 className="text-2xl font-medium">The parts behind the screens</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6 space-y-8 min-w-0">
              <ul className="space-y-4">
                {[
                  'The web app is React and Vite, served from Cloudflare Workers. Supabase holds the data and the sign-in. There are four signed-in screens (Pipeline, Leads, the lead page and a content calendar) and the public audit page.',
                  'The web app never does the slow work. A button writes a row to a jobs table, and a Node runner on the studio PC picks it up and writes the result back. Supabase pushes the change, so the page updates on its own. Finding leads queues a health check for each one, and each health check queues its outreach drafts.',
                  'Six tables hold it all: leads, audits, jobs, activity, clients and the content calendar. Each audit stores the full diagnosis as JSON next to the rendered page, so the page a prospect opens is the page we checked.',
                  'Every table is closed to anyone not signed in. A prospect reaches their audit through one database function that takes the secret token, returns the page and counts the view.',
                  'The scoring is deterministic, so every number on an audit can be traced back to where it came from. The audit page is one self-contained file with its styles inlined, shown in a frame so the app\'s own styles cannot change it.',
                  'Nothing is sent from HQ. It writes the drafts, and a person reads, edits and sends every message.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[var(--text-400)] leading-relaxed">
                    <span className="text-[var(--text-600)] font-mono text-xs mt-0.5 shrink-0">0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <figure className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                <ImageZoom
                  src={`${IMG}/pipeline.webp`}
                  alt="The Artbox HQ Pipeline page on sample data. A summary of 12 live leads broken down by status, including sample On trial and Paying statuses. A Ready to contact list of the three audited leads. A Find leads form with a trade, a town and a result limit. A Runner jobs list of the latest 8 jobs, marked running, queued, done or failed."
                  className="w-full h-auto object-contain block"
                />
                <figcaption className="text-xs text-[var(--text-500)] px-4 py-3 border-t border-[var(--border)]">
                  The Pipeline page: lead counts, the search form, and the job queue the runner works through.
                </figcaption>
              </figure>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Next ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <SectionLabel>Next</SectionLabel>
              <h2 className="text-2xl font-medium">What is next</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6 space-y-3">
              <p className="text-sm text-[var(--text-400)] leading-relaxed">
                The Build website action is in the interface, but the runner does not handle it yet. It fails the job with a clear message.
              </p>
              <p className="text-sm text-[var(--text-400)] leading-relaxed">
                Lead search can now run on a free local scraper as well as the paid service it started with. I am comparing the two on the same trade and town before choosing which one HQ uses by default.
              </p>
              <p className="text-sm text-[var(--text-400)] leading-relaxed">
                There is no link to the tool here, because it holds real prospects' details. I can walk through it on a call.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Next project CTA ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionAnim}
          >
            <div>
              <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Next Case Study</p>
              <h2 className="text-2xl font-medium">Nexora</h2>
              <p className="text-sm text-[var(--text-400)] mt-1">A two-sided recruitment platform</p>
            </div>
            <Link
              to="/work/Nexora"
              className="flex items-center gap-2 bg-[var(--btn-bg)] text-[var(--btn-text)] px-6 py-3 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors shrink-0"
            >
              View Case Study <ArrowRight size={15} />
            </Link>
          </motion.div>
        </section>

      </main>

      <Footer />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
