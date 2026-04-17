import { useEffect, useState } from 'react';

export default function StatsSection() {
  const [stats, setStats] = useState({
    days: 0,
    followers: 0,
    events: 0,
    municipalities: 0,
  });

  useEffect(() => {
    // Calculate days until election
    const electionDate = new Date('2026-03-08');
    const today = new Date();
    const daysLeft = Math.ceil((electionDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    setStats({
      days: Math.max(0, daysLeft),
      followers: 15667,
      events: 6,
      municipalities: 32,
    });
  }, []);

  const statItems = [
    {
      value: stats.days,
      label: 'Dias para votar',
      icon: '📅',
    },
    {
      value: stats.followers.toLocaleString(),
      label: 'Seguidores en redes',
      icon: '👥',
    },

    {
      value: stats.municipalities,
      label: 'Municipios del Valle',
      icon: '🗺️',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {statItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl mb-4">{item.icon}</div>
              <p className="text-4xl md:text-5xl font-bold mb-2">{item.value}</p>
              <p className="text-white/80 text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
