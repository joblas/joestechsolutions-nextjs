/**
 * Content Pillars Configuration
 * The five topic categories for the AI education blog
 */

import type { Pillar, PillarSlug } from './types';

/**
 * Pillar definitions with colors and descriptions
 * Colors designed to work in both light and dark mode
 */
export const PILLARS: Record<PillarSlug, Pillar> = {
  'local-ai': {
    slug: 'local-ai',
    name: 'Self-Hosted AI',
    description: 'Run AI models locally on your own hardware. Privacy-first, no cloud required.',
    color: '#10b981', // emerald-500
    bgClass: 'bg-emerald-100',
    textClass: 'text-emerald-700',
    darkBgClass: 'dark:bg-emerald-900/30',
    darkTextClass: 'dark:text-emerald-300',
  },
  'prompting': {
    slug: 'prompting',
    name: 'LLMs & Prompting',
    description: 'Master the art of prompt engineering and get the most out of language models.',
    color: '#8b5cf6', // violet-500
    bgClass: 'bg-violet-100',
    textClass: 'text-violet-700',
    darkBgClass: 'dark:bg-violet-900/30',
    darkTextClass: 'dark:text-violet-300',
  },
  'tutorials': {
    slug: 'tutorials',
    name: 'How-To Guides',
    description: 'Step-by-step tutorials to help you build practical AI solutions.',
    color: '#3b82f6', // blue-500
    bgClass: 'bg-blue-100',
    textClass: 'text-blue-700',
    darkBgClass: 'dark:bg-blue-900/30',
    darkTextClass: 'dark:text-blue-300',
  },
  'news': {
    slug: 'news',
    name: 'Tech News',
    description: 'Stay up to date with the latest AI developments and industry news.',
    color: '#f59e0b', // amber-500
    bgClass: 'bg-amber-100',
    textClass: 'text-amber-700',
    darkBgClass: 'dark:bg-amber-900/30',
    darkTextClass: 'dark:text-amber-300',
  },
  'experiments': {
    slug: 'experiments',
    name: 'Fun AI Content',
    description: 'Creative experiments, demos, and fun projects exploring AI capabilities.',
    color: '#ec4899', // pink-500
    bgClass: 'bg-pink-100',
    textClass: 'text-pink-700',
    darkBgClass: 'dark:bg-pink-900/30',
    darkTextClass: 'dark:text-pink-300',
  },
};

/**
 * Get all pillars as an array (useful for iteration)
 */
export const getAllPillars = (): Pillar[] => Object.values(PILLARS);

/**
 * Get a pillar by slug
 */
export const getPillarBySlug = (slug: PillarSlug): Pillar => PILLARS[slug];

/**
 * Check if a string is a valid pillar slug
 */
export const isValidPillarSlug = (slug: string): slug is PillarSlug => {
  return slug in PILLARS;
};

/**
 * Get pillar slugs as an array
 */
export const PILLAR_SLUGS: PillarSlug[] = [
  'local-ai',
  'prompting',
  'tutorials',
  'news',
  'experiments',
];
