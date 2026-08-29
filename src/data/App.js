import React from 'react';
import { Terminal, Rocket, Cpu, Mail, Globe, Link2 } from 'lucide-react';
import { Card } from './components/Card';
import { profileData } from './profileData';

const App = () => {

  return (
    <div className="min-h-screen relative text-slate-100 selection:bg-purple-500/30 selection:text-white">
      {/* Background Wallpaper */}
      <div
        className="fixed inset-0 pointer-events-none -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/wallpaper.jpg'})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />
      {/* Light protective overlay for optimal contrast and readability */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 bg-slate-950/65"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.45) 0%, rgba(2, 6, 23, 0.85) 100%)',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />

      <div className="app-shell max-w-6xl mx-auto py-12 px-4 sm:px-6">
        <header className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-br from-purple-400 via-pink-300 to-cyan-400 headline-glow tracking-tight">
            {profileData.name.toUpperCase()}
          </h1>
          <p className="text-slate-300 font-mono text-sm sm:text-base tracking-wide">
            Software Developer • {profileData.age} y.o. • {profileData.location}
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="System.Bio" icon={Terminal} className="md:col-span-2">
            <p className="text-base sm:text-lg leading-relaxed text-slate-200">{profileData.bio}</p>
          </Card>

          <Card title="Specs" icon={Rocket} borderVariant="cyan">
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">STATUS:</span>
                <span className="text-emerald-400 font-medium">Active</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">LEVEL:</span>
                <span className="text-cyan-300 font-medium">22</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">ORIGIN:</span>
                <span className="text-purple-300 font-medium">Italy</span>
              </li>
            </ul>
          </Card>

          <Card title="Tech.Stack" icon={Cpu} className="md:col-span-3">
            <div className="flex flex-wrap gap-2.5">
              {profileData.languages.map(lang => (
                <span key={lang} className="accent-chip">
                  {lang}
                </span>
              ))}
            </div>
          </Card>

          <Card title="Passions" icon={Rocket} className="md:col-span-2">
            <div className="grid gap-3 sm:grid-cols-2">
              {profileData.passions.map(passion => (
                <span key={passion} className="accent-chip justify-center">
                  {passion}
                </span>
              ))}
            </div>
          </Card>

          <Card title="Socials" icon={Mail} borderVariant="cyan" className="md:col-span-1">
            <div className="space-y-3">
              {profileData.socials.map(social => {
                const Icon =
                  social.label === 'GitHub'
                    ? Link2
                    : social.label === 'LinkedIn'
                      ? Globe
                      : Mail;

                const isExternal = social.href.startsWith('http');

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="frosted-pill flex items-center gap-3 p-3.5"
                  >
                    <Icon className="text-cyan-300 w-5 h-5 shrink-0" />
                    <span className="text-sm font-mono text-slate-100 truncate">
                      {social.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default App;