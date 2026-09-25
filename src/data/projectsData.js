import resImg from '../assets/images/residential-project.webp';
import indImg from '../assets/images/industrial-project.webp';
import comImg from '../assets/images/cold-storage-project.webp';

export const HERO_TRUST_METRICS = [
  { id: 'quality', label: 'Quality Assured', iconType: 'shield' },
  { id: 'perf', label: 'Reliable Performance', iconType: 'bolt' },
  { id: 'future', label: 'Sustainable Future', iconType: 'sprout' },
  { id: 'support', label: 'End to End Support', iconType: 'support' },
];

export const PARTNERS_DATA = [
  {
    id: 'fuel-station',
    name: 'Fuel Stations',
    logoType: 'fuel-trio',
    badge: 'FUEL STATION',
    desc: 'Solar-enabled fuel stations for clean energy generation and sustainable operations.',
    location: 'Madhya Pradesh',
  },
  {
    id: 'impetus',
    name: 'IMPETUS',
    logoType: 'impetus',
    badge: 'INDUSTRIAL',
    desc: 'Industrial solar solutions driving efficiency, sustainability and cost optimization.',
    location: 'Madhya Pradesh',
  },
  {
    id: 'coldstore',
    name: 'COLD STORE WAREHOUSE',
    logoType: 'coldstore',
    badge: 'COLD STORAGE',
    desc: 'Solar installation for cold storage facility reducing energy costs and improving efficiency.',
    location: 'Indore, Madhya Pradesh',
  },
  {
    id: 'logistics',
    name: 'LOGISTICS WAREHOUSE',
    logoType: 'logistics',
    badge: 'WAREHOUSE',
    desc: 'Rooftop solar installation for warehouse to support sustainable operations and energy savings.',
    location: 'Indore, Madhya Pradesh',
  },
];

export const PROJECTS_SHOWCASE_DATA = [
  {
    id: 'residential-indore',
    title: 'Residential Solar Project',
    tag: 'HOME',
    image: resImg,
    iconType: 'home',
    desc: 'Rooftop solar installation for a residential property powering daily energy needs.',
    location: 'Indore, MP',
    capacity: '7 KW',
  },
  {
    id: 'industrial-pithampur',
    title: 'Industrial Solar Project',
    tag: 'INDUSTRIAL',
    image: indImg,
    iconType: 'industrial',
    desc: 'Large scale rooftop solar system installed for an industrial facility to reduce energy costs.',
    location: 'Pithampur, MP',
    capacity: '240 KW',
  },
  {
    id: 'cold-storage-indore',
    title: 'Cold Storage Solar Project',
    tag: 'COLD STORAGE',
    image: comImg,
    iconType: 'coldstore',
    desc: 'Solar installation for cold storage facility ensuring reliable and cost effective operation.',
    location: 'Dewas',
    capacity: '270 KW',
  },
];
