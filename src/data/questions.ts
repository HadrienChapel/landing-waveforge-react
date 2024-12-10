import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'usage',
    text: 'What will you primarily use your Mac for?',
    options: [
      { 
        text: 'Basic Tasks',
        value: 'basic',
        description: 'Web browsing, email, documents, and light photo editing'
      },
      {
        text: 'Professional Work',
        value: 'pro',
        description: 'Video editing, software development, or graphic design'
      },
      {
        text: 'Creative Studio',
        value: 'studio',
        description: '3D rendering, complex video production, or music production'
      },
      {
        text: 'Student',
        value: 'student',
        description: 'Note-taking, research, and assignments'
      }
    ]
  },
  {
    id: 'setup',
    text: 'What type of setup do you prefer?',
    options: [
      {
        text: 'All-in-One',
        value: 'allinone',
        description: 'Built-in display with everything included'
      },
      {
        text: 'Portable',
        value: 'portable',
        description: 'Laptop that I can take anywhere'
      },
      {
        text: 'Custom Desktop',
        value: 'desktop',
        description: 'Desktop computer with my own display and peripherals'
      }
    ]
  },
  {
    id: 'screenSize',
    text: 'What screen size do you need?',
    options: [
      {
        text: 'Compact (13-14")',
        value: 'small',
        description: 'Perfect for mobility and everyday use'
      },
      {
        text: 'Standard (15-16")',
        value: 'medium',
        description: 'Good balance of screen space and portability'
      },
      {
        text: 'Large (24" or more)',
        value: 'large',
        description: 'Ideal for detailed work and multitasking'
      }
    ]
  },
  {
    id: 'performance',
    text: 'What level of performance do you need?',
    options: [
      {
        text: 'Standard',
        value: 'standard',
        description: 'For everyday tasks and light workloads'
      },
      {
        text: 'Professional',
        value: 'pro',
        description: 'For demanding professional applications'
      },
      {
        text: 'Maximum',
        value: 'max',
        description: 'For the most demanding workflows and heavy multitasking'
      }
    ]
  },
  {
    id: 'storage',
    text: 'How much storage do you need?',
    options: [
      {
        text: 'Basic (256GB)',
        value: 'basic',
        description: 'Good for documents and basic applications'
      },
      {
        text: 'Standard (512GB)',
        value: 'standard',
        description: 'Recommended for most users'
      },
      {
        text: 'Professional (1TB or more)',
        value: 'pro',
        description: 'For large files and professional applications'
      }
    ]
  },
  {
    id: 'budget',
    text: 'What is your budget range?',
    options: [
      {
        text: 'Entry Level',
        value: 'low',
        description: '$599 - $1,299'
      },
      {
        text: 'Mid Range',
        value: 'medium',
        description: '$1,299 - $1,999'
      },
      {
        text: 'High End',
        value: 'high',
        description: '$1,999+'
      }
    ]
  }
];