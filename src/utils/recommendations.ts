import { MacRecommendation } from '../types';

export function getMacRecommendation(answers: Record<string, string>): MacRecommendation {
  const { usage, setup, screenSize, performance, storage, budget } = answers;

  // Mac Studio
  if (usage === 'studio' || (performance === 'max' && budget === 'high')) {
    return {
      name: 'Mac Studio',
      description: 'Revolutionary performance for professional creative workflows with M2 Max or M2 Ultra chip. Perfect for demanding tasks like 3D rendering, complex video production, and professional audio work.',
      imageUrl: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '$1,999'
    };
  }

  // iMac
  if (setup === 'allinone' || screenSize === 'large') {
    return {
      name: 'iMac 24"',
      description: 'Beautiful 4.5K Retina display in a stunning all-in-one design. Perfect for both creative work and everyday tasks with the powerful M1 chip.',
      imageUrl: 'https://images.unsplash.com/photo-1627399270231-7d36245355a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '$1,299'
    };
  }

  // Mac Mini
  if (setup === 'desktop' && (budget === 'low' || budget === 'medium')) {
    return {
      name: 'Mac Mini',
      description: 'Compact yet powerful desktop computer with M2 chip. Perfect for custom setups and those who want desktop power in a minimal footprint.',
      imageUrl: 'https://images.unsplash.com/photo-1643155763166-51bd53d17d67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '$599'
    };
  }

  // MacBook Pro 16"
  if ((usage === 'pro' || performance === 'pro') && budget === 'high') {
    return {
      name: 'MacBook Pro 16"',
      description: 'Ultimate performance in a portable design with stunning Liquid Retina XDR display. Perfect for professional creative work and development.',
      imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '$2,499'
    };
  }

  // MacBook Pro 14"
  if (usage === 'pro' || performance === 'pro') {
    return {
      name: 'MacBook Pro 14"',
      description: 'Professional performance in a more compact size. Perfect balance of power and portability for serious work.',
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '$1,999'
    };
  }

  // MacBook Air 15"
  if (screenSize === 'medium' && (usage === 'basic' || usage === 'student')) {
    return {
      name: 'MacBook Air 15"',
      description: 'Larger screen in an incredibly thin design. Perfect for productivity and entertainment with great battery life.',
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '$1,299'
    };
  }

  // Default: MacBook Air 13"
  return {
    name: 'MacBook Air 13"',
    description: 'The most popular Mac with M2 chip. Perfect balance of performance, portability, and value. Ideal for everyday tasks and student use.',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    price: '$999'
  };
}