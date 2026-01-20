// src/config/websiteTheme.ts
import { WebsiteType } from '../context/WebsiteContext';

export const websiteTheme: Record<
  WebsiteType,
  {
    primary: string;
    primaryHover: string;
    headerBg: string;
    accent: string;
  }
> = {
  'pre-incubation': {
    primary: 'bg-emerald-600',
    primaryHover: 'hover:bg-emerald-500',
    headerBg: 'bg-emerald-700',
    accent: 'text-emerald-600',
  },
  'ai-automation': {
    primary: 'bg-violet-600',
    primaryHover: 'hover:bg-violet-500',
    headerBg: 'bg-violet-700',
    accent: 'text-violet-600',
  },
  'fire-safety': {
    primary: 'bg-red-600',
    primaryHover: 'hover:bg-red-500',
    headerBg: 'bg-red-700',
    accent: 'text-red-600',
  },
};
