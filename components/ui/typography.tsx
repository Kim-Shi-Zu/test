import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

const H1: React.FC<TypographyProps> = ({ children, className }) => (
  <h1
    className={cn(
      'scroll-m-20 text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight',
      className
    )}
  >
    {children}
  </h1>
);

const H2: React.FC<TypographyProps> = ({ children, className }) => (
  <h2
    className={cn(
      'scroll-m-20 text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2 mb-4 mt-10',
      className
    )}
  >
    {children}
  </h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className }) => (
  <h3
    className={cn(
      'scroll-m-20 text-2xl font-medium tracking-tight text-gray-700 dark:text-gray-200 mb-2 mt-8',
      className
    )}
  >
    {children}
  </h3>
);

export const P: React.FC<TypographyProps> = ({ children, className }) => (
  <p
    className={cn(
      'leading-relaxed text-base text-gray-700 dark:text-gray-300 mb-4',
      className
    )}
  >
    {children}
  </p>
);

const UL: React.FC<TypographyProps> = ({ children, className }) => (
  <ul
    className={cn(
      'my-6 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300',
      className
    )}
  >
    {children}
  </ul>
);

const OL: React.FC<TypographyProps> = ({ children, className }) => (
  <ol
    className={cn(
      'my-6 ml-6 list-decimal space-y-2 text-gray-700 dark:text-gray-300',
      className
    )}
  >
    {children}
  </ol>
);

const LI: React.FC<TypographyProps> = ({ children, className }) => (
  <li className={cn('pl-1', className)}>{children}</li>
);

const Blockquote: React.FC<TypographyProps> = ({ children, className }) => (
  <blockquote
    className={cn(
      'border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-900/20 pl-4 pr-2 py-2 italic text-gray-600 dark:text-gray-200 my-6',
      className
    )}
  >
    {children}
  </blockquote>
);

const InlineCode: React.FC<TypographyProps> = ({ children, className }) => (
  <code
    className={cn(
      'rounded bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-sm text-pink-600 dark:text-pink-400',
      className
    )}
  >
    {children}
  </code>
);

export const Typography = {
  H1,
  H2,
  H3,
  P,
  UL,
  OL,
  LI,
  Blockquote,
  InlineCode,
};