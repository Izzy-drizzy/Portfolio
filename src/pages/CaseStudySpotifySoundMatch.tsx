import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import ImageZoom from '../components/ImageZoom';
import ImageCarousel from '../components/ImageCarousel';
import SEO from '../components/SEO';

const slides = [
  '/images/spotify-sound-match/slides/slide-1.png',
  '/images/spotify-sound-match/slides/slide-2.png',
  '/images/spotify-sound-match/slides/slide-3.png',
  '/images/spotify-sound-match/slides/slide-4.png',
  '/images/spotify-sound-match/slides/slide-5.png',
];

const tags = ['Product Design', 'Music Streaming', 'Mobile Design', 'Audio Discovery', 'Unsolicited Concept'];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function SectionLabel({ children }: { children: string }) {
  return <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-3">{children}</p>;
}

export default function CaseStudySpotifySoundMatch() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SEO title="Spotify Sound Match Concept" description="Unsolicited concept for Spotify: hear a song out in the world, then get a playlist matched on how it sounds, not on your listening history." path="/work/spotify-sound-match" />
      <Navigation onOpenContact={() => setContactOpen(true)} />
      <main>

        {/* ── Hero ── */}
        <section className="min-h-screen pt-28 pb-12 px-7 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center overflow-hidden">
          <motion.div className="lg:col-span-5 flex flex-col gap-8" initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 text-xs text-[var(--text-500)]">
              <Link to="/work" className="hover:text-[var(--text-300)] transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-[var(--text-300)]">Spotify Sound Match</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15]">
              Hear a song you like, get more of how it sounds
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-sm text-[var(--text-400)] leading-relaxed max-w-md">
              Song ID apps tell you what you just heard and stop there. Sound Match is a concept for Spotify that goes one step further: it names the song, shows what it heard, and builds a playlist matched on the sound itself rather than on your listening history.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-500)]">
              <span>November 2026</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Concept - unsolicited, not affiliated with Spotify</span>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="flex flex-col gap-3">
              <SectionLabel>Project Tags</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-[var(--border-md)] text-[var(--text-300)] bg-[var(--surface)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="lg:col-span-7 h-[55vh] lg:h-[80vh]"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
            <ImageCarousel images={slides} alt="Spotify Sound Match concept screens" />
          </motion.div>
        </section>

        {/* ── Summary stats ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            {[
              { stat: '2 taps', label: 'From a locked phone to a playlist of the sound you just heard' },
              { stat: '4', label: 'Entry points: Search tab, lock screen control, widget, Quick Settings tile' },
              { stat: '15s', label: 'Longest the mic stays on. It stops as soon as there is a match' },
              { stat: '12', label: 'Screens designed end-to-end, including 3 failure states' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#F45D01] mb-2">{item.stat}</p>
                <p className="text-xs text-[var(--text-400)]">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Problem Framing ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <SectionLabel>Problem Framing</SectionLabel>
              <h2 className="text-2xl font-medium">The Strategic Question</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6 space-y-10">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[var(--text-300)] uppercase tracking-wide">Where it started</h3>
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  I hear a song in a shop or a friend's car and I like it. What I usually want isn't that one song. I want an hour of music that sounds like it: the same keys, the same kind of voice, the same feel. Today that takes two apps and still misses. Shazam gives me the name. Then I start Song Radio in Spotify, and within a few tracks it drifts back towards artists I already play.
                </p>
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  I'm not the only one who feels that drift. Spotify says Radio and recommendations are largely based on your listening habits, and a long-running Spotify Community idea thread is titled "Song Radio is essentially just an echo".
                </p>
                <div className="rounded-xl border border-[#F45D01]/20 bg-[#F45D01]/5 p-5">
                  <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">The Framing Question</p>
                  <p className="text-sm text-[var(--text-300)] leading-relaxed italic">
                    "When Spotify can name a song you hear out in the world, how does it do the thing a song ID app can't: give you more of that exact sound?"
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[var(--text-300)] uppercase tracking-wide">Why now</h3>
                <ul className="space-y-2">
                  {[
                    'Spotify has no built-in song ID yet, but in July 2026 Android Authority found "Identify a song" and microphone strings in the Android app. Naming songs looks like it is on the way.',
                    'Naming a song is already a commodity. Apple has had Music Recognition in Control Center since iOS 14.2, Pixel phones have identified songs on-device since 2017, and Google added Hum to Search in 2020.',
                    'Shazam can sync what you identify into a "My Shazam Tracks" playlist in Spotify, but the Spotify Community is full of threads about that sync failing or duplicating the playlist.',
                    'Spotify bought The Echo Nest, a music intelligence company, in 2014. Understanding what a track sounds like is something Spotify has worked on for over a decade.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--text-400)] leading-relaxed">
                      <span className="text-[#F45D01] mt-1 shrink-0">—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[var(--text-300)] uppercase tracking-wide">The gap</h3>
                <p className="text-sm text-[var(--text-400)] leading-relaxed">
                  If Spotify ships song ID on its own, it matches what Shazam, Apple and Google already do. Spotify's advantage is what happens after the name: a catalogue to draw from, playlists people already live in, and controls like "Exclude from your Taste Profile" that show it already lets people keep a listen from shaping their recommendations. Sound Match is built on that advantage.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: 'Jul 2026', label: 'Song ID strings spotted in Spotify for Android', src: 'Android Authority' },
                  { val: '2014', label: 'Spotify acquires The Echo Nest, its music intelligence engine', src: 'Spotify press release' },
                ].map((m, i) => (
                  <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <p className="text-3xl font-medium text-white mb-1">{m.val}</p>
                    <p className="text-xs text-[var(--text-500)]">{m.label}</p>
                    <p className="text-xs text-[var(--border-md)] mt-1">Source: {m.src}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Role ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <SectionLabel>Role</SectionLabel>
              <h2 className="text-2xl font-medium">My Contribution</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Role', value: 'Solo Product Designer' },
                  { label: 'Context', value: 'Unsolicited concept, not affiliated with Spotify' },
                  { label: 'Platform', value: 'iOS / Android' },
                  { label: 'Scope', value: 'One feature, end to end' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="text-sm text-[var(--text-300)]">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--text-400)] leading-relaxed mb-3">
                The idea came from my own listening. I set the problem, the principles and the scope, then designed the flow, the screens and the failure states inside Spotify's current mobile design language.
              </p>
              <p className="text-sm text-[var(--text-500)] leading-relaxed">
                I built the screens in code with Claude as a design partner instead of in Figma, which let me move from flow to finished screens quickly and keep every state consistent. Artists, songs and cover art in the screens are made up.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Approach ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Approach</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">Research & Strategy</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                <h3 className="text-base font-semibold">What I Looked At</h3>
                <ul className="space-y-3">
                  {[
                    { method: 'Spotify today', detail: 'Song Radio, Smart Shuffle, AI DJ, Prompted Playlists and taste profile controls' },
                    { method: 'Song ID tools', detail: 'Shazam and its Spotify sync, Apple Music Recognition, Pixel Now Playing, Google Hum to Search' },
                    { method: 'Community feedback', detail: 'Spotify Community threads on Song Radio and on the Shazam playlist sync' },
                    { method: 'Platform surfaces', detail: 'iOS 18 lock screen and Control Center controls, the Action button, widgets, Android Quick Settings tiles' },
                  ].map((r, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-[#F45D01] font-mono text-xs mt-0.5 shrink-0">0{i + 1}</span>
                      <span><span className="text-[var(--text-300)]">{r.method}</span><span className="text-[var(--text-500)]">: {r.detail}</span></span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
                <h3 className="text-base font-semibold">Hypotheses to Test</h3>
                <p className="text-xs text-[var(--text-500)]">These are assumptions from desk research and my own use, not findings. Each one would need testing with real listeners.</p>
                <ul className="space-y-3">
                  {[
                    'When people identify a song they like, many want more of its sound, not more of its artist',
                    'Radio that leans on listening history feels repetitive when the goal is a specific sound',
                    'Showing what the system heard, in plain words, makes a sound-based playlist easier to trust and steer',
                    'Capture has to be faster than opening a second app, or the moment is gone before the song ends',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--text-400)] leading-relaxed">
                      <span className="text-[#F45D01] font-mono text-xs mt-0.5 shrink-0">H{i + 1}</span>{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="rounded-xl border border-[#F45D01]/20 bg-[#F45D01]/5 p-5 mb-12">
              <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Guiding Constraint</p>
              <p className="text-sm text-[var(--text-300)] leading-relaxed">
                <span className="italic">"Faster than reaching for Shazam, more precise than Song Radio."</span> If capture took longer than opening another app, or the playlist felt like Radio with a new name, the feature had no reason to exist.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: '01',
                  title: 'Capture first, think later',
                  body: 'Songs end. Every entry point gets to listening in one tap, and the result waits for you on the lock screen if you put your phone away.',
                },
                {
                  num: '02',
                  title: 'Show what it heard',
                  body: '"Warm Rhodes keys" and "breathy falsetto", not "acousticness 0.72". Plain-language traits explain the playlist and give people words to steer it.',
                },
                {
                  num: '03',
                  title: 'You hold the dial',
                  body: 'One slider between the sound and the artist, and one switch to leave your history out. Enough control to fix a match, not a mixing desk.',
                },
                {
                  num: '04',
                  title: 'Never a dead end',
                  body: 'No name, too loud, no signal: each failure still gets you somewhere. If it heard something, you can use it.',
                },
              ].map((p) => (
                <div key={p.num} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span className="text-xs text-[#F45D01] font-mono mb-4 block">{p.num}</span>
                  <h3 className="text-base font-semibold mb-3">{p.title}</h3>
                  <p className="text-sm text-[var(--text-400)] leading-relaxed">{p.body}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Process ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Process</SectionLabel>
              <h2 className="text-2xl font-medium">Mapping the Flow</h2>
              <p className="text-sm text-[var(--text-400)] mt-3 max-w-2xl">Before any screens, I mapped every way into the feature and every way the capture can go wrong. The failure paths shaped the design as much as the happy path.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl overflow-hidden border border-[var(--border)]">
              <ImageZoom src="/images/spotify-sound-match/flow.png" alt="Sound Match user flow" className="w-full object-contain" />
            </motion.div>
          </motion.div>
        </section>

        {/* ── Challenges ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Decisions</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">Key Decisions and Trade-offs</h2>
            </motion.div>
            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'Name first, playlist one tap later',
                  problem: 'The fastest path would be to build a playlist the moment a song is matched. But sometimes people only want the name, and auto-created playlists clutter the library. That clutter is one of the main complaints about the Shazam sync.',
                  solution: 'The match screen names the song instantly and offers the playlist as one clear next step. The playlist plays as soon as it is built, but nothing is saved to Your Library until you tap Save.',
                },
                {
                  num: '02',
                  title: 'Explaining "sound" without jargon',
                  problem: 'The playlist only feels precise if people can see why each song is there. Spotify\'s audio vocabulary (energy, valence, acousticness) is built for models, not for people.',
                  solution: 'A "What we heard" row of up to six plain-language traits covering instruments, voice, rhythm, tempo, texture and mood. The same traits appear under each track as the reason it was picked ("Same drum feel, 90 BPM").',
                },
                {
                  num: '03',
                  title: 'One dial, not a mixing desk',
                  problem: 'People who care about sound want control, but six sliders would turn a two-second action into a settings page. Most people should never need to tune anything.',
                  solution: 'Tuning lives behind a single button. Inside: tap traits on or off, one slider from "the sound" to "the artist", and a switch to leave your history out. History starts off, because escaping it is the point of the feature.',
                },
                {
                  num: '04',
                  title: 'Capture from outside the app, without listening all the time',
                  problem: 'The best moment to capture is when the app is closed and the phone is in your pocket. A microphone feature that seems to be always on would destroy trust.',
                  solution: 'Lock screen and Control Center controls, the Action button, a widget and an Android Quick Settings tile all open the same capture sheet. The mic runs for 15 seconds at most, a primer explains this before the system prompt, and results come back as a Live Activity.',
                },
              ].map((c) => (
                <motion.div key={c.num} variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4">
                    <span className="text-xs text-[#F45D01] font-mono mb-3 block">{c.num}</span>
                    <h3 className="text-base font-semibold">{c.title}</h3>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6 space-y-4">
                    <div>
                      <p className="text-xs text-[var(--text-600)] uppercase tracking-widest mb-2">Problem</p>
                      <p className="text-sm text-[var(--text-400)] leading-relaxed">{c.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">Decision</p>
                      <p className="text-sm text-[var(--text-300)] leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Solution ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Solution</SectionLabel>
              <h2 className="text-2xl font-medium mb-4">Sound Match</h2>
              <p className="text-sm text-[var(--text-400)] leading-relaxed max-w-2xl mb-10">
                A capture moment you can start from anywhere, a match screen that shows what Spotify heard, and a playlist built on that sound, with an answer for every way the capture can fail.
              </p>
            </motion.div>

            <div className="space-y-6 mb-12">
              {[
                {
                  num: '01',
                  title: 'Entry Points',
                  arc: 'Hear it → Tap once → Put the phone away',
                  decisions: [
                    'A Listen button sits next to the camera on the Search tab, where people already go to find music',
                    'A coachmark introduces it once, in Spotify\'s own tooltip style',
                    'The lock screen control and widget work without unlocking. The widget shows your last match',
                    'Results come back as a Live Activity, with "Songs like this" one tap away',
                  ],
                  screen: '/images/spotify-sound-match/slides/slide-2.png',
                },
                {
                  num: '02',
                  title: 'Capture and Sound Profile',
                  arc: 'Curiosity → Reassurance → Recognition',
                  decisions: [
                    'The mic primer says three things before the system prompt: only when you tap, 15 seconds at most, no recordings kept',
                    'Listening shows live levels and a countdown ring, so it never feels like it has stalled',
                    '"What we heard" turns the audio into six traits people can read at a glance',
                    'One clear next step: make a playlist. Song radio is still there for people who want it',
                  ],
                  screen: '/images/spotify-sound-match/slides/slide-3.png',
                },
                {
                  num: '03',
                  title: 'Tune, Play, Keep',
                  arc: 'Control → Discovery → Ownership',
                  decisions: [
                    'Tuning is optional: tap traits, slide between sound and artist, keep your history out',
                    'Every track carries its reason in green, so the playlist explains itself',
                    'It plays straight away. It joins Your Library only when you save it',
                    'A share card turns the moment into something you can send ("I heard Slow Honey and found 30 songs like it")',
                  ],
                  screen: '/images/spotify-sound-match/slides/slide-4.png',
                },
                {
                  num: '04',
                  title: 'When It Doesn\'t Go to Plan',
                  arc: 'Frustration → Recovery',
                  decisions: [
                    'No name (unreleased tracks, DJ edits, live versions): it still shows what it heard and can match the sound anyway',
                    'Too loud: it shows music against crowd noise, coaches you to move closer and keeps listening',
                    'Offline: it keeps the fingerprint, matches when you\'re back online and notifies you',
                  ],
                  screen: '/images/spotify-sound-match/slides/slide-5.png',
                },
              ].map((m, i) => (
                <motion.div key={i} variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <span className="text-xs text-[#F45D01] font-mono mb-3 block">{m.num}</span>
                    <h3 className="text-base font-semibold mb-2">{m.title}</h3>
                    <p className="text-xs text-[var(--text-500)] italic mb-4">{m.arc}</p>
                    <ul className="space-y-2">
                      {m.decisions.map((d, j) => (
                        <li key={j} className="flex gap-2 text-sm text-[var(--text-400)] leading-relaxed">
                          <span className="text-[#F45D01] mt-1 shrink-0">—</span>{d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                      <ImageZoom src={m.screen} alt={m.title} className="w-full object-contain" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Final Designs ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Screens</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">Final Designs</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { src: 's01', label: 'Search Tab - Listen Button' },
                { src: 's02', label: 'Lock Screen - Control and Widget' },
                { src: 's03', label: 'Live Activity - Matched' },
                { src: 's04', label: 'Microphone Primer' },
                { src: 's05', label: 'Listening' },
                { src: 's06', label: 'Match - What We Heard' },
                { src: 's07', label: 'Tune Your Match' },
                { src: 's08', label: 'Sound Match Playlist' },
                { src: 's09', label: 'Saved and Share' },
                { src: 's10', label: 'No Match - Match the Sound' },
                { src: 's11', label: 'Too Noisy' },
                { src: 's12', label: 'Offline - Waiting to Match' },
              ].map((img, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                  <ImageZoom src={`/images/spotify-sound-match/screens/${img.src}.png`} alt={img.label} className="w-full object-contain" />
                  <p className="text-xs text-[var(--text-600)] px-4 py-2">{img.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Measuring ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <SectionLabel>Success Metrics</SectionLabel>
              <h2 className="text-2xl font-medium">How I'd Measure It</h2>
              <p className="text-xs text-[var(--text-500)] mt-3 leading-relaxed">Proposed metrics, not results. This concept hasn't been built or tested.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-7 lg:col-start-6 space-y-4">
              {[
                {
                  number: '01',
                  title: 'Does the sound beat the radio?',
                  body: 'A/B test against Song Radio started from the same song: skip rate in the first ten tracks, minutes listened per session, and how many people save the playlist within seven days.',
                },
                {
                  number: '02',
                  title: 'Does it lead to real discovery?',
                  body: 'Share of plays from artists the listener has never played, and how many of those artists get followed or saved in the following month.',
                },
                {
                  number: '03',
                  title: 'Does it become a habit?',
                  body: 'Repeat use of the lock screen and widget entry points by week four, and the share of matches that go on to a playlist play rather than stopping at the name.',
                },
                {
                  number: '04',
                  title: 'Guardrails',
                  body: 'Microphone permission denial rate, time to match, no-match rate, and how often people turn the history switch back on. A rise there would mean the sound match alone isn\'t enough.',
                },
              ].map((h, i) => (
                <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <p className="text-xs text-[#F45D01] uppercase tracking-widest mb-2">{h.number}</p>
                  <p className="text-base font-medium text-[var(--text)] mb-2">{h.title}</p>
                  <p className="text-sm text-[var(--text-400)] leading-relaxed">{h.body}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── What's next ── */}
        <section className="px-4 md:px-10 py-20 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp}>
              <SectionLabel>What's Next</SectionLabel>
              <h2 className="text-2xl font-medium mb-10">What I'd Do Next</h2>
            </motion.div>
            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'Test the core assumption first',
                  body: 'Everything rests on H1: that people who identify a song want more of its sound. A short diary study with people who already use Shazam, logging what they did after each identification, would show whether that is true before anything gets built.',
                },
                {
                  num: '02',
                  title: 'Test the sound vocabulary',
                  body: 'The traits only help if people read "tape warmth" or "laid-back live drums" the same way. A card-sort and comprehension test would show which words land and which need replacing.',
                },
                {
                  num: '03',
                  title: 'Work out where it lives long term',
                  body: 'Sound Match could stay a separate feature, or become a "match the sound" mode inside Song Radio for any track, not just ones you hear outside. That decision belongs with the teams who own Radio and Search.',
                },
                {
                  num: '04',
                  title: 'Be honest about the hard part',
                  body: 'Matching on timbre and production across a catalogue this size is a machine learning problem, not a design one. I don\'t know what Spotify\'s audio models can do today. The design is built so that if the models are only good at some traits, the interface can show just those.',
                },
              ].map((r) => (
                <motion.div key={r.num} variants={fadeUp} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4">
                    <span className="text-xs text-[#F45D01] font-mono mb-3 block">{r.num}</span>
                    <h3 className="text-base font-semibold">{r.title}</h3>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    <p className="text-sm text-[var(--text-400)] leading-relaxed">{r.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Sources ── */}
        <section className="px-4 md:px-10 py-16 border-t border-[var(--border)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            <SectionLabel>Sources</SectionLabel>
            <ul className="space-y-2 max-w-3xl">
              {[
                { label: 'Android Authority: Spotify looks like it\'s working on its own song identification tool', href: 'https://www.androidauthority.com/spotify-song-identification-3690854/' },
                { label: 'Spotify Community: Spotify Radio, how does it work?', href: 'https://community.spotify.com/t5/FAQs/Spotify-Radio-how-does-it-work/ta-p/4757060' },
                { label: 'Spotify Community idea: "Song Radio" is essentially just an echo', href: 'https://community.spotify.com/t5/Live-Ideas/Spotify-amp-quot-Song-Radio-quot-is-Essentially-Just-an-Echo/idi-p/5170824' },
                { label: 'Apple Support: Listen to your identified songs in Spotify (Shazam)', href: 'https://support.apple.com/en-ie/guide/shazam/dev83428c925/web' },
                { label: 'Apple Support: Add Shazam Music Recognition to Control Center', href: 'https://support.apple.com/guide/shazam/aside/dev8d9ec4a4a/web' },
                { label: 'Spotify Support: Exclude a playlist or track from your taste profile', href: 'https://support.spotify.com/ie/article/exclude-playlists-or-tracks-from-your-taste-profile/' },
                { label: 'Spotify newsroom: Meet your AI DJ on Spotify', href: 'https://newsroom.spotify.com/2023-02-22/spotify-debuts-a-new-ai-dj-right-in-your-pocket/' },
                { label: 'TechCrunch: Spotify rolls out Prompted Playlists to the UK', href: 'https://techcrunch.com/2026/02/23/spotify-ai-prompted-playlists-uk-markets' },
                { label: 'MusicRow: Spotify acquires The Echo Nest (2014)', href: 'https://musicrow.com/2014/03/spotify-acquires-the-echo-nest/' },
                { label: '9to5Google: Pixel Now Playing update', href: 'https://9to5google.com/2026/04/03/pixel-now-playing-update/' },
              ].map((s) => (
                <li key={s.href} className="text-xs text-[var(--text-500)] leading-relaxed">
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-300)] underline underline-offset-2 decoration-[var(--border-md)]">{s.label}</a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[var(--text-600)] mt-6 max-w-3xl leading-relaxed">
              Spotify is a trademark of Spotify AB. This is an independent concept made for my portfolio. It is not affiliated with or endorsed by Spotify.
            </p>
          </motion.div>
        </section>

      </main>
      <Footer />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
