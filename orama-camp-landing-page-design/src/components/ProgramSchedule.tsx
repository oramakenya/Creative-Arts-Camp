import { Mic, Palette, BookOpen, Star, Music, Paintbrush } from 'lucide-react';
import { SITE_CONTENT } from '../config/siteContent';

function getActivityIcon(activity: string) {
  if (activity.includes('Vocal') || activity.includes('Concert') || activity.includes('Performance') || activity.includes('Sound')) return Mic;
  if (activity.includes('Art') || activity.includes('Gallery') || activity.includes('Artwork') || activity.includes('Curation')) return Palette;
  if (activity.includes('Journal') || activity.includes('Literary')) return BookOpen;
  if (activity.includes('Rehearsal') || activity.includes('Workshop')) return Music;
  if (activity.includes('Creative') || activity.includes('Challenge')) return Paintbrush;
  return Star;
}

export default function ProgramSchedule() {
  const { program } = SITE_CONTENT;

  return (
    <section id="program" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orama-orange font-semibold text-sm tracking-widest uppercase mb-3">{program.subtitle}</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-orama-navy tracking-tight mb-6">
            {program.title.split(' ').slice(0, 2).join(' ')} <span className="gradient-text">{program.title.split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-orama-gray leading-relaxed">
            {program.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {program.days.map((day, index) => (
            <div key={day.day} className="relative">
              {/* Day header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${day.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-extrabold text-xl">{day.day}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orama-navy">{day.title}</h3>
                  <p className="text-orama-gray text-sm">{day.theme}</p>
                </div>
              </div>

              {/* Activities grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ml-0 lg:ml-[72px]">
                {day.activities.map((activity) => {
                  const Icon = getActivityIcon(`${activity.title} ${activity.description}`);
                  return (
                    <div
                      key={activity.time + activity.title}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-orama-cream border border-orama-warm hover:border-orama-orange/30 hover:shadow-sm transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-orama-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orama-orange/20 transition-colors">
                        <Icon className="w-5 h-5 text-orama-orange" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-orama-orange mb-1">{activity.time}</div>
                        <div className="text-base font-bold text-orama-navy mb-1.5">{activity.title}</div>
                        <p className="text-sm leading-relaxed text-orama-gray">{activity.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Connector line */}
              {index < program.days.length - 1 && (
                <div className="hidden lg:block absolute left-[27px] bottom-0 w-px h-4 bg-gradient-to-b from-orama-orange/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
