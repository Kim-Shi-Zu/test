import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EnvironmentChecker } from '@/components/projects/environment-checker';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Typography } from '@/components/ui/typography';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const components = {
  h1: Typography.H1,
  h2: Typography.H2,
  h3: Typography.H3,
  p: Typography.P,
  ul: Typography.UL,
  ol: Typography.OL,
  li: Typography.LI,
  code: ({ children }: { children: React.ReactNode }) => {
    // Handle string children properly
    const content = typeof children === 'string' ? children : String(children);
    return (
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
        {content}
      </code>
    );
  },
  pre: ({ children }: { children: React.ReactNode }) => {
    // Make sure we're handling the children properly
    return (
      <pre className="mb-4 mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4">
        {children}
      </pre>
    );
  },
};

export default function Lesson2({ source, frontMatter }: { source: any, frontMatter: any }) {
  const [completed, setCompleted] = React.useState(false);

  const handleMarkComplete = () => {
    setCompleted(!completed);
    // TODO: Implement actual completion tracking
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            {frontMatter.title}
            {completed && (
              <span className="ml-2 text-sm text-green-500">(Completed)</span>
            )}
          </CardTitle>
          <div className="text-sm text-muted-foreground">
            Module {frontMatter.module_number}, Lesson {frontMatter.lesson_number} • Estimated time: {frontMatter.estimated_time_minutes} minutes
          </div>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <MDXRemote {...source} components={components} />
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            <Link href="/module1/lesson1">
              <Button variant="outline" size="sm">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous Lesson
              </Button>
            </Link>
          </div>
          <Button 
            onClick={handleMarkComplete}
            variant={completed ? "outline" : "default"}
            size="sm"
          >
            {completed ? "Mark as Incomplete" : "Mark as Complete"}
          </Button>
          <div>
            <Link href="/module1/lesson3">
              <Button variant="outline" size="sm">
                Next Lesson
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Project Demo: {frontMatter.project?.name || 'Environment Checker'}</CardTitle>
        </CardHeader>
        <CardContent>
          <EnvironmentChecker />
        </CardContent>
      </Card>
    </div>
  );
}

export async function getStaticProps() {
  const lessonPath = path.join(process.cwd(), 'content/module1/lesson_1_2.md');
  const source = fs.readFileSync(lessonPath, 'utf8');

  // Extract frontmatter and content
  const frontMatterPattern = /---\r?\n([\s\S]*?)\r?\n---\r?\n/;
  const match = source.match(frontMatterPattern);

  let frontMatter: any = {};
  let content = source;

  if (match) {
    const frontMatterString = match[1];
    // Simple parsing of frontmatter
    frontMatterString.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        const value = valueParts.join(':').trim();
        // Remove quotes if present
        frontMatter[key.trim()] = value.replace(/^"(.*)"$/, '$1');
      }
    });
    // Handle nested objects like project
    if (frontMatterString.includes('project:')) {
      const projectLines = frontMatterString.split('\n').filter(line => line.trim().startsWith('  '));
      frontMatter.project = {};
      projectLines.forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length) {
          const nestedKey = key.trim();
          const value = valueParts.join(':').trim();
          frontMatter.project[nestedKey] = value.replace(/^"(.*)"$/, '$1');
        }
      });
    }
    // Remove frontmatter from content
    content = source.replace(match[0], '');
  }

  // Serialize the content for MDX
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter,
    },
  };
}
