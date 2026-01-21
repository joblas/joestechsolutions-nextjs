import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { Callout } from './mdx/Callout';

const components = {
  // Custom components
  Callout,

  // Headings with IDs for TOC linking
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground scroll-mt-20" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground scroll-mt-20" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground scroll-mt-20" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-lg font-semibold mt-4 mb-2 text-foreground scroll-mt-20" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 text-muted-foreground leading-relaxed" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2 text-muted-foreground" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-primary hover:underline" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => {
    const isInline = !props.className?.includes('language-');
    if (isInline) {
      return (
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary" {...props} />
      );
    }
    return <code className="text-gray-200" {...props} />;
  },
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-[#1a1a2e] p-4 rounded-lg overflow-x-auto mb-4 text-sm font-mono border border-white/10" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-4 rounded-lg border border-white/10">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="bg-white/5 px-4 py-2 text-left font-semibold text-white" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-t border-white/10 px-4 py-2 text-white/80" {...props} />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-white/10" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  img: ({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
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

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <article className="prose prose-invert max-w-none">
      <MDXRemote source={source} components={components as MDXRemoteProps['components']} />
    </article>
  );
}
