import { Callout } from './Callout';
import { CodeBlock } from './CodeBlock';
import type { ComponentProps } from 'react';

// MDX component overrides
export const mdxComponents = {
  // Custom components
  Callout,

  // Override default elements
  pre: ({ children, ...props }: ComponentProps<'pre'>) => {
    // Extract code element and its props
    const codeElement = children as React.ReactElement<{ children: string; className?: string }>;
    if (codeElement?.props) {
      return (
        <CodeBlock
          className={codeElement.props.className}
          {...props}
        >
          {codeElement.props.children}
        </CodeBlock>
      );
    }
    return <pre {...props}>{children}</pre>;
  },

  // Style tables
  table: ({ children, ...props }: ComponentProps<'table'>) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-white/10">
      <table className="w-full text-sm" {...props}>{children}</table>
    </div>
  ),
  th: ({ children, ...props }: ComponentProps<'th'>) => (
    <th className="bg-white/5 px-4 py-2 text-left font-semibold text-white" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: ComponentProps<'td'>) => (
    <td className="border-t border-white/10 px-4 py-2 text-white/80" {...props}>
      {children}
    </td>
  ),

  // Style blockquotes
  blockquote: ({ children, ...props }: ComponentProps<'blockquote'>) => (
    <blockquote
      className="my-6 border-l-4 border-primary pl-4 italic text-white/70"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Style images with captions
  img: ({ alt, ...props }: ComponentProps<'img'>) => (
    <figure className="my-6">
      <img className="rounded-lg w-full" alt={alt} {...props} />
      {alt && (
        <figcaption className="mt-2 text-center text-sm text-white/50">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
};
