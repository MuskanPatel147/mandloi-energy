import residentialImg from '../assets/images/solution-residential.webp';
import commercialImg from '../assets/images/solution-commercial.webp';
import industrialImg from '../assets/images/solution-industrial.webp';
import agriculturalImg from '../assets/images/solution-agricultural.webp';

export const SOLUTIONS_DATA = [
  {
    id: 'residential',
    title: 'RESIDENTIAL SOLAR',
    description: 'Power your home with clean energy & enjoy lower electricity bills.',
    image: residentialImg,
    icon: 'residential',
    accentColor: '#06b6d4',
    accentBorder: 'rgba(6, 182, 212, 0.38)',
    iconBg: 'rgba(6, 182, 212, 0.1)',
    iconBorder: '#06b6d4',
    iconGlow: 'rgba(6, 182, 212, 0.25)',
  },
  {
    id: 'commercial',
    title: 'COMMERCIAL SOLAR',
    description: 'Smart solar systems for offices, shops & commercial buildings to reduce operational costs.',
    image: commercialImg,
    icon: 'commercial',
    accentColor: '#f59e0b',
    accentBorder: 'rgba(245, 158, 11, 0.38)',
    iconBg: 'rgba(245, 158, 11, 0.1)',
    iconBorder: '#f59e0b',
    iconGlow: 'rgba(245, 158, 11, 0.25)',
  },
  {
    id: 'industrial',
    title: 'INDUSTRIAL SOLAR',
    description: 'High capacity solar solutions designed for industries for maximum efficiency.',
    image: industrialImg,
    icon: 'industrial',
    accentColor: '#0ea5e9',
    accentBorder: 'rgba(14, 165, 233, 0.38)',
    iconBg: 'rgba(14, 165, 233, 0.1)',
    iconBorder: '#0ea5e9',
    iconGlow: 'rgba(14, 165, 233, 0.25)',
  },
  {
    id: 'agricultural',
    title: 'AGRICULTURAL SOLAR',
    description: 'Reliable solar solutions for irrigation & farm operations. Save energy, increase productivity.',
    image: agriculturalImg,
    icon: 'agricultural',
    accentColor: '#84cc16',
    accentBorder: 'rgba(132, 204, 22, 0.38)',
    iconBg: 'rgba(132, 204, 22, 0.1)',
    iconBorder: '#84cc16',
    iconGlow: 'rgba(132, 204, 22, 0.25)',
  },
];
