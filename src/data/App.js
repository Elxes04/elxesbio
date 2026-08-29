import React from 'react';
import { Terminal, Rocket, Cpu, Mail, Globe, Link2 } from 'lucide-react';
import { Card } from './components/Card';
import { profileData } from './profileData';

const App = () => {

  return (
    <div className="app-shell pattern-panel bg-slate-900 text-slate-100">
      <header className="max-w-4xl mx-auto mb-16 text-center relative overflow-hidden">
        <h1 className="text-6xl md:text-8xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-cyan-400 headline-glow">
          {profileData.name.toUpperCase()}
        </h1>
        <p className="text-slate-300/90 underline decoration-wavy decoration-purple-500">
          Software Developer • {profileData.age} y.o. • {profileData.location}
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card title="System.Bio" icon={Terminal} className="md:col-span-2">
          <p className="text-lg leading-relaxed">{profileData.bio}</p>
        </Card>

        <Card title="Specs" icon={Rocket} borderVariant="cyan">
          <ul className="space-y-2 opacity-80">
            <li>STATUS: Active</li>
            <li>LEVEL: 21</li>
            <li>ORIGIN: Italy</li>
          </ul>
        </Card>

        <Card title="Tech.Stack" icon={Cpu} className="md:col-span-3">
          <div className="flex flex-wrap gap-3">
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
              <span key={passion} className="accent-chip">
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

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-800/90 border border-slate-700 hover:bg-slate-700 transition-colors"
                >
                  <Icon className="text-cyan-300 w-5 h-5" />
                  <span className="text-sm text-slate-100">
                    {social.value}
                  </span>
                </a>
              );
            })}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default App;