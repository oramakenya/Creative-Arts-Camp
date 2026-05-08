interface LogoWordmarkProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

export default function LogoWordmark({ variant = 'dark', size = 'md' }: LogoWordmarkProps) {
  const isLight = variant === 'light';
  const emblemSize = size === 'sm' ? 'h-10 w-10' : 'h-12 w-12';
  const nameSize = size === 'sm' ? 'text-xl' : 'text-2xl';
  const tagSize = size === 'sm' ? 'text-[9px]' : 'text-[10px]';
  const nameColor = isLight ? 'text-white' : 'text-[#06038d]';
  const tagColor = isLight ? 'text-white/70' : 'text-[#06038d]';

  return (
    <div className="flex items-center gap-3">
      <div className={`relative ${emblemSize} flex-shrink-0 rounded-full bg-[#06038d]`}>
        <div className="absolute inset-[20%] rounded-full bg-transparent" />
        <div className="absolute bottom-[8%] left-[20%] right-[20%] h-[42%] rounded-b-full bg-orama-orange" />
        <div className="absolute inset-[24%] rounded-full bg-orama-navy" />
        <div className="absolute inset-[39%] rounded-full bg-orama-orange" />
      </div>
      <div className="leading-none">
        <div className={`${nameSize} font-normal tracking-[0.08em] ${nameColor}`}>ORAMA</div>
        <div className={`${tagSize} mt-2 font-medium tracking-[0.45em] ${tagColor}`}>CREATIVE ARTS PROGRAM</div>
      </div>
    </div>
  );
}