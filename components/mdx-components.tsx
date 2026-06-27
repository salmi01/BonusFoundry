import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="mt-10 text-2xl font-semibold" {...props} />,
  h3: (props) => <h3 className="mt-8 text-xl font-semibold" {...props} />,
  p: (props) => <p className="mt-4 leading-7 text-muted-foreground" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted-foreground" {...props} />,
  a: (props) => <a className="font-medium text-primary underline" {...props} />,
  code: (props) => <code className="rounded bg-muted px-1.5 py-0.5 text-sm" {...props} />,
  pre: (props) => (
    <pre className="mt-4 overflow-x-auto rounded-lg border bg-foreground p-4 text-sm text-background shadow-sm" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="mt-5 rounded-lg border-l-4 border-primary bg-card p-4 text-muted-foreground shadow-sm" {...props} />
  )
};
