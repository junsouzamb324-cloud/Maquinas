import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Settings, 
  Camera, 
  BarChart3, 
  Phone, 
  Wrench, 
  Cog, 
  Hammer, 
  Tractor, 
  Palette, 
  Zap,
  ChevronRight,
  Upload,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Menu,
  X,
  User,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { RestorationService, BudgetRequest, GalleryItem, MachineState } from './types';

// --- Components ---

const Navbar = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-agro-green/90 backdrop-blur-lg py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="w-10 h-10 bg-industrial-yellow rounded-lg flex items-center justify-center">
            <Settings className="text-agro-green animate-gear" size={24} />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter">
            AGRO<span className="text-industrial-yellow">RESTORE</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <button onClick={() => onNavigate('home')} className="hover:text-industrial-yellow transition-colors">Home</button>
          <button onClick={() => onNavigate('services')} className="hover:text-industrial-yellow transition-colors">Serviços</button>
          <button onClick={() => onNavigate('gallery')} className="hover:text-industrial-yellow transition-colors">Galeria</button>
          <button onClick={() => onNavigate('simulator')} className="hover:text-industrial-yellow transition-colors">Simulador</button>
          <button onClick={() => onNavigate('client')} className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all flex items-center gap-2 border border-white/10">
            <User size={16} />
            Área do Cliente
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-agro-green border-t border-white/10 p-6 flex flex-col gap-6 shadow-2xl"
          >
            <button onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="text-left text-lg font-medium">Home</button>
            <button onClick={() => { onNavigate('services'); setIsMenuOpen(false); }} className="text-left text-lg font-medium">Serviços</button>
            <button onClick={() => { onNavigate('gallery'); setIsMenuOpen(false); }} className="text-left text-lg font-medium">Galeria</button>
            <button onClick={() => { onNavigate('simulator'); setIsMenuOpen(false); }} className="text-left text-lg font-medium">Simulador</button>
            <button onClick={() => { onNavigate('client'); setIsMenuOpen(false); }} className="bg-industrial-yellow text-agro-green px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
              <User size={20} />
              Área do Cliente
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onAction }: { onAction: (action: string) => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&q=80&w=2070" 
          alt="Agricultural Machinery" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-agro-green/80 via-neutral-950/90 to-neutral-950"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-yellow/10 border border-industrial-yellow/20 text-industrial-yellow text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} />
            Líder em Tecnologia de Restauração
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Especialistas em <span className="text-gradient-yellow">Restauração</span> de Máquinas Agrícolas
          </h1>
          <p className="text-lg text-neutral-400 mb-10 max-w-xl leading-relaxed">
            Recuperamos a potência e a estética de seus equipamentos com precisão industrial e acabamento premium. De maquininhas de café a grandes implementos.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button 
              onClick={() => onAction('budget')}
              className="bg-industrial-yellow text-agro-green px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(251,191,36,0.3)]"
            >
              <Wrench size={20} />
              Solicitar Restauração
            </button>
            <button 
              onClick={() => onAction('gallery')}
              className="bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              <BarChart3 size={20} />
              Ver Máquinas Restauradas
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">1200+</span>
              <span className="text-xs text-neutral-500 uppercase tracking-widest">Máquinas Restauradas</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">20 Anos</span>
              <span className="text-xs text-neutral-500 uppercase tracking-widest">De Experiência</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">98%</span>
              <span className="text-xs text-neutral-500 uppercase tracking-widest">Satisfação</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1594494024039-661347629d03?auto=format&fit=crop&q=80&w=1000" 
              alt="Restoration Process" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-agro-green/60 to-transparent"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-industrial-yellow/20 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-agro-green/40 blur-3xl rounded-full animate-pulse"></div>
          
          <div className="absolute top-1/2 -right-6 glass-card p-4 shadow-2xl animate-bounce">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-green-500" size={20} />
              </div>
              <div>
                <p className="text-xs font-bold">Qualidade Premium</p>
                <p className="text-[10px] text-neutral-400">Certificada AgroRestore</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = ({ onAction }: { onAction: (action: string) => void }) => {
  const services: RestorationService[] = [
    {
      id: '1',
      title: 'Restauração Completa',
      description: 'Desmontagem total, recuperação estrutural e pintura original.',
      icon: 'Wrench',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '2',
      title: 'Apanhadoras de Café',
      description: 'Especialistas em máquinas de colheita manual e mecanizada.',
      icon: 'Cog',
      image: 'https://images.unsplash.com/photo-1559584839-0ca97af24eb9?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '3',
      title: 'Implementos Agrícolas',
      description: 'Reforma de arados, grades, semeadoras e pulverizadores.',
      icon: 'Tractor',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '4',
      title: 'Pintura Industrial',
      description: 'Tratamento anticorrosivo e acabamento de alta durabilidade.',
      icon: 'Palette',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '5',
      title: 'Recuperação de Peças',
      description: 'Usinagem e recuperação de componentes antigos e raros.',
      icon: 'Hammer',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '6',
      title: 'Modernização (Retrofit)',
      description: 'Atualização tecnológica para máquinas clássicas.',
      icon: 'Zap',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const getIcon = (name: string) => {
    switch(name) {
      case 'Wrench': return <Wrench size={24} />;
      case 'Cog': return <Cog size={24} />;
      case 'Tractor': return <Tractor size={24} />;
      case 'Palette': return <Palette size={24} />;
      case 'Hammer': return <Hammer size={24} />;
      case 'Zap': return <Zap size={24} />;
      default: return <Settings size={24} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Nossos Serviços</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Oferecemos soluções completas para prolongar a vida útil e aumentar o valor do seu patrimônio agrícola.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group hover:border-industrial-yellow/50 transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-agro-green/40 mix-blend-multiply"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-industrial-yellow rounded-xl flex items-center justify-center text-agro-green shadow-lg">
                  {getIcon(service.icon)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">{service.description}</p>
                <button 
                  onClick={() => onAction('budget')}
                  className="w-full py-3 rounded-lg border border-white/10 hover:bg-industrial-yellow hover:text-agro-green hover:border-industrial-yellow font-bold transition-all flex items-center justify-center gap-2"
                >
                  Solicitar Orçamento
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BudgetForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    machineType: '',
    machineYear: '',
    description: ''
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setPhotos(prev => [...prev, ...newFiles].slice(0, 10));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-20 glass-card p-12">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-green-500" size={40} />
        </div>
        <h2 className="text-3xl font-bold mb-4">Solicitação Enviada!</h2>
        <p className="text-neutral-400 mb-8">Recebemos seu pedido de orçamento. Em breve um de nossos especialistas entrará em contato.</p>
        <button onClick={() => setIsSuccess(false)} className="bg-industrial-yellow text-agro-green px-8 py-3 rounded-xl font-bold">
          Voltar ao Início
        </button>
      </div>
    );
  }

  return (
    <section id="budget" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4 text-gradient-yellow">Orçamento Inteligente</h2>
          <p className="text-neutral-400">Preencha os dados abaixo e anexe fotos para uma análise preliminar rápida.</p>
        </div>

        <div className="glass-card p-8 md:p-12">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Nome Completo</label>
                <input 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-industrial-yellow outline-hidden transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Telefone / WhatsApp</label>
                <input 
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="tel" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-industrial-yellow outline-hidden transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Cidade / Estado</label>
                <input 
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-industrial-yellow outline-hidden transition-all"
                  placeholder="Ex: Varginha, MG"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Tipo de Máquina</label>
                <select 
                  required
                  name="machineType"
                  value={formData.machineType}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-industrial-yellow outline-hidden transition-all appearance-none"
                >
                  <option value="" className="bg-neutral-900">Selecione...</option>
                  <option value="cafe" className="bg-neutral-900">Apanhadora de Café</option>
                  <option value="trator" className="bg-neutral-900">Trator Antigo</option>
                  <option value="implemento" className="bg-neutral-900">Implemento Agrícola</option>
                  <option value="industrial" className="bg-neutral-900">Máquina Industrial</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Descrição do Problema / Necessidade</label>
              <textarea 
                required
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-industrial-yellow outline-hidden transition-all"
                placeholder="Descreva o estado da máquina e o que deseja restaurar..."
              ></textarea>
            </div>

            <div className="space-y-4 mb-10">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Fotos da Máquina (Até 10)</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {photos.map((photo, idx) => (
                  <div key={idx} className="aspect-square rounded-xl overflow-hidden border border-white/10 relative group">
                    <img src={URL.createObjectURL(photo)} alt="Preview" className="w-full h-full object-cover" />
                    <button 
                      type="button"
                      onClick={() => setPhotos(photos.filter((_, i) => i !== idx))}
                      className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
                {photos.length < 10 && (
                  <label className="aspect-square rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-industrial-yellow hover:bg-white/5 transition-all">
                    <Camera className="text-neutral-500 mb-2" size={24} />
                    <span className="text-[10px] uppercase font-bold text-neutral-500">Adicionar</span>
                    <input type="file" multiple accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                  </label>
                )}
              </div>
            </div>

            <button 
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-industrial-yellow text-agro-green py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-agro-green border-t-transparent rounded-full animate-spin"></div>
                  Enviando...
                </>
              ) : (
                <>
                  Solicitar Orçamento Agora
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Simulator = () => {
  const [type, setType] = useState('cafe');
  const [state, setState] = useState<MachineState>('regular');
  const [result, setResult] = useState({ time: '30-45 dias', price: 'R$ 5.000 - R$ 8.000' });

  useEffect(() => {
    // Simple logic for simulation
    const estimates: Record<string, Record<MachineState, { time: string, price: string }>> = {
      cafe: {
        bad: { time: '60-90 dias', price: 'R$ 12.000 - R$ 18.000' },
        regular: { time: '30-45 dias', price: 'R$ 6.000 - R$ 10.000' },
        good: { time: '15-20 dias', price: 'R$ 3.000 - R$ 5.000' }
      },
      trator: {
        bad: { time: '120-180 dias', price: 'R$ 45.000 - R$ 80.000' },
        regular: { time: '60-90 dias', price: 'R$ 20.000 - R$ 35.000' },
        good: { time: '30-45 dias', price: 'R$ 10.000 - R$ 15.000' }
      },
      implemento: {
        bad: { time: '45-60 dias', price: 'R$ 8.000 - R$ 15.000' },
        regular: { time: '20-30 dias', price: 'R$ 4.000 - R$ 7.000' },
        good: { time: '10-15 dias', price: 'R$ 2.000 - R$ 3.500' }
      }
    };

    setResult(estimates[type]?.[state] || estimates.cafe.regular);
  }, [type, state]);

  return (
    <section id="simulator" className="py-24 bg-agro-green/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-display font-bold mb-6">Simulador de <span className="text-industrial-yellow">Restauração</span></h2>
          <p className="text-neutral-400 mb-10 leading-relaxed">
            Tenha uma estimativa rápida de tempo e investimento baseado no tipo e estado atual do seu equipamento.
          </p>

          <div className="space-y-8">
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Tipo de Equipamento</label>
              <div className="flex flex-wrap gap-3">
                {['cafe', 'trator', 'implemento'].map(t => (
                  <button 
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-6 py-3 rounded-xl font-bold transition-all border ${type === t ? 'bg-industrial-yellow text-agro-green border-industrial-yellow' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                  >
                    {t === 'cafe' ? 'Apanhadora' : t === 'trator' ? 'Trator' : 'Implemento'}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Estado Atual</label>
              <div className="flex flex-wrap gap-3">
                {(['bad', 'regular', 'good'] as MachineState[]).map(s => (
                  <button 
                    key={s}
                    onClick={() => setState(s)}
                    className={`px-6 py-3 rounded-xl font-bold transition-all border ${state === s ? 'bg-industrial-yellow text-agro-green border-industrial-yellow' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                  >
                    {s === 'bad' ? 'Ruim' : s === 'regular' ? 'Regular' : 'Bom'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          key={`${type}-${state}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Settings size={120} className="animate-gear" />
          </div>
          
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Zap className="text-industrial-yellow" />
            Resultado Estimado
          </h3>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                <Clock className="text-industrial-yellow" size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Tempo de Execução</p>
                <p className="text-2xl font-bold">{result.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                <BarChart3 className="text-industrial-yellow" size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Investimento Médio</p>
                <p className="text-2xl font-bold text-industrial-yellow">{result.price}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-400 italic">
            * Valores e prazos são estimativas baseadas em projetos anteriores. Sujeito a vistoria técnica.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeItem, setActiveItem] = useState(0);

  const items: GalleryItem[] = [
    {
      id: '1',
      title: 'Trator Ford 6600 (1978)',
      description: 'Restauração completa do motor, transmissão e funilaria original.',
      beforeImage: 'https://images.unsplash.com/photo-1594494024039-661347629d03?auto=format&fit=crop&q=80&w=1000',
      afterImage: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: '2',
      title: 'Apanhadora de Café Manual',
      description: 'Modernização do sistema de vibração e pintura eletrostática.',
      beforeImage: 'https://images.unsplash.com/photo-1559584839-0ca97af24eb9?auto=format&fit=crop&q=80&w=1000',
      afterImage: 'https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Galeria de Transformações</h2>
          <p className="text-neutral-400">Arraste o slider para ver a mágica da restauração AgroRestore.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            {/* After Image */}
            <img 
              src={items[activeItem].afterImage} 
              alt="After" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Before Image (Clipped) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img 
                src={items[activeItem].beforeImage} 
                alt="Before" 
                className="absolute inset-0 w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute inset-y-0 w-1 bg-industrial-yellow shadow-[0_0_15px_rgba(251,191,36,0.8)] z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-industrial-yellow rounded-full flex items-center justify-center text-agro-green shadow-2xl">
                <Maximize2 size={20} />
              </div>
            </div>

            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos} 
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />

            <div className="absolute bottom-6 left-6 z-20 flex gap-4">
              <span className="bg-black/60 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">Antes</span>
              <span className="bg-industrial-yellow px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-agro-green">Depois</span>
            </div>
          </div>

          <div className="space-y-6">
            {items.map((item, idx) => (
              <button 
                key={item.id}
                onClick={() => setActiveItem(idx)}
                className={`w-full text-left p-6 rounded-2xl transition-all border ${activeItem === idx ? 'bg-white/10 border-industrial-yellow' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
              >
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
              </button>
            ))}
            
            <div className="p-6 glass-card border-dashed border-industrial-yellow/30 flex items-center gap-4">
              <div className="w-12 h-12 bg-industrial-yellow/10 rounded-full flex items-center justify-center text-industrial-yellow">
                <Camera size={24} />
              </div>
              <div>
                <p className="text-sm font-bold">Sua máquina aqui?</p>
                <p className="text-xs text-neutral-500">Solicite um orçamento hoje.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientArea = () => {
  const [activeTab, setActiveTab] = useState('requests');

  const mockRequests: BudgetRequest[] = [
    {
      id: 'REQ-4521',
      name: 'João Silva',
      phone: '(35) 99999-0000',
      city: 'Varginha, MG',
      machineType: 'Apanhadora de Café',
      machineYear: '2015',
      description: 'Revisão completa e pintura.',
      photos: [],
      status: 'restoring',
      createdAt: '12/03/2026'
    },
    {
      id: 'REQ-4518',
      name: 'João Silva',
      phone: '(35) 99999-0000',
      city: 'Varginha, MG',
      machineType: 'Trator Ford',
      machineYear: '1978',
      description: 'Restauração histórica.',
      photos: [],
      status: 'analyzing',
      createdAt: '10/03/2026'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'received': return <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Recebido</span>;
      case 'analyzing': return <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Em Análise</span>;
      case 'restoring': return <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Em Restauração</span>;
      case 'finished': return <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Finalizado</span>;
      default: return null;
    }
  };

  return (
    <section className="py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold mb-2">Olá, <span className="text-industrial-yellow">João Silva</span></h2>
            <p className="text-neutral-400">Acompanhe o status de suas máquinas em tempo real.</p>
          </div>
          <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
            <button 
              onClick={() => setActiveTab('requests')}
              className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === 'requests' ? 'bg-industrial-yellow text-agro-green' : 'hover:bg-white/5'}`}
            >
              Meus Pedidos
            </button>
            <button 
              onClick={() => setActiveTab('notifications')}
              className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === 'notifications' ? 'bg-industrial-yellow text-agro-green' : 'hover:bg-white/5'}`}
            >
              Notificações
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {activeTab === 'requests' ? (
              mockRequests.map(req => (
                <motion.div 
                  key={req.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-card p-6 flex flex-col md:flex-row justify-between gap-6 hover:border-white/20 transition-all"
                >
                  <div className="flex gap-6">
                    <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-industrial-yellow">
                      <Tractor size={40} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-neutral-500">{req.id}</span>
                        {getStatusBadge(req.status)}
                      </div>
                      <h4 className="text-xl font-bold mb-1">{req.machineType} ({req.machineYear})</h4>
                      <p className="text-sm text-neutral-400">{req.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <span className="text-xs text-neutral-500">{req.createdAt}</span>
                    <button className="text-industrial-yellow text-sm font-bold flex items-center gap-2 hover:underline">
                      Ver Detalhes
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="space-y-4">
                <div className="glass-card p-6 border-l-4 border-l-industrial-yellow">
                  <div className="flex justify-between mb-2">
                    <h5 className="font-bold">Máquina em Restauração</h5>
                    <span className="text-xs text-neutral-500">Hoje, 10:30</span>
                  </div>
                  <p className="text-sm text-neutral-400">Sua Apanhadora de Café (REQ-4521) entrou na fase de pintura industrial.</p>
                </div>
                <div className="glass-card p-6 border-l-4 border-l-green-500">
                  <div className="flex justify-between mb-2">
                    <h5 className="font-bold">Orçamento Aprovado</h5>
                    <span className="text-xs text-neutral-500">Ontem, 16:45</span>
                  </div>
                  <p className="text-sm text-neutral-400">O orçamento para o Trator Ford foi aprovado. Iniciamos a desmontagem.</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 bg-linear-to-br from-industrial-yellow/20 to-transparent">
              <h4 className="text-xl font-bold mb-6">Resumo da Frota</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Total de Máquinas</span>
                  <span className="text-2xl font-bold">02</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Em Restauração</span>
                  <span className="text-2xl font-bold text-purple-400">01</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Aguardando</span>
                  <span className="text-2xl font-bold text-amber-400">01</span>
                </div>
              </div>
              <button className="w-full mt-8 bg-industrial-yellow text-agro-green py-3 rounded-xl font-bold">
                Nova Solicitação
              </button>
            </div>

            <div className="glass-card p-6">
              <h5 className="font-bold mb-4">Falar com Consultor</h5>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=consultant" alt="Consultant" />
                </div>
                <div>
                  <p className="text-sm font-bold">Ricardo Almeida</p>
                  <p className="text-[10px] text-green-500 font-bold uppercase">Online Agora</p>
                </div>
              </div>
              <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 font-bold hover:bg-white/10 transition-all">
                <MessageCircle size={18} />
                Iniciar Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="py-24 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Nossa <span className="text-industrial-yellow">Fábrica</span></h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Localizada no coração do agronegócio mineiro, nossa oficina conta com equipamentos de última geração e equipe altamente qualificada.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-industrial-yellow/10 rounded-lg flex items-center justify-center text-industrial-yellow shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold">Endereço</p>
                  <p className="text-sm text-neutral-500">Av. Industrial, 1500 - Distrito Industrial<br />Varginha - MG, 37000-000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-industrial-yellow/10 rounded-lg flex items-center justify-center text-industrial-yellow shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold">Contato</p>
                  <p className="text-sm text-neutral-500">(35) 3221-0000<br />contato@agrorestore.com.br</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-industrial-yellow text-agro-green px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                <MapPin size={18} />
                Traçar Rota
              </button>
              <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                <Phone size={18} />
                Ligar Agora
              </button>
            </div>
          </div>

          <div className="h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
            {/* Mock Map */}
            <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-industrial-yellow mx-auto mb-4 animate-bounce" />
                <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs">Mapa Interativo Carregando...</p>
              </div>
            </div>
            {/* Real Map Iframe would go here if permitted, using a placeholder for now */}
            <div className="absolute inset-0 opacity-40">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5535999990000?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento%20para%20restauração%20de%20máquina."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform group"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-agro-green px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
        Fale Conosco
      </span>
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-industrial-yellow rounded-lg flex items-center justify-center">
            <Settings className="text-agro-green" size={18} />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter">
            AGRO<span className="text-industrial-yellow">RESTORE</span>
          </span>
        </div>
        
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-neutral-500">
          <a href="#" className="hover:text-industrial-yellow transition-colors">Termos</a>
          <a href="#" className="hover:text-industrial-yellow transition-colors">Privacidade</a>
          <a href="#" className="hover:text-industrial-yellow transition-colors">Cookies</a>
        </div>

        <p className="text-xs text-neutral-600">
          © 2026 AgroRestore Premium. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState('home');

  const handleNavigate = (newView: string) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAction = (action: string) => {
    if (action === 'budget') {
      const element = document.getElementById('budget');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      else setView('home');
    } else if (action === 'gallery') {
      const element = document.getElementById('gallery');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      else setView('home');
    }
  };

  return (
    <div className="font-sans selection:bg-industrial-yellow selection:text-agro-green">
      <Navbar onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero onAction={handleAction} />
            <Services onAction={handleAction} />
            <Simulator />
            <Gallery />
            <BudgetForm />
            <MapSection />
          </motion.main>
        )}

        {view === 'client' && (
          <motion.div
            key="client"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <ClientArea />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
