import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FileProcessorCli from '@/components/projects/file-processor-cli/FileProcessorCli';
import { Typography } from '@/components/ui/typography';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
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
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
      {children}
    </code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="mb-4 mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4">
      {children}
    </pre>
  ),
};

export default function Lesson5({ source, frontMatter }: { source: any, frontMatter: any }) {
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
            Module {frontMatter.module_number}, Lesson {frontMatter.lesson_number} •
            Estimated time: {frontMatter.estimated_time_minutes} minutes
          </div>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <MDXRemote {...source} components={components} />
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            <Link href="/module1/lesson4">
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
            <Link href="/module1/lesson6">
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
          <CardTitle>Project Demo: {frontMatter.project?.name || 'File Processor CLI'}</CardTitle>
        </CardHeader>
        <CardContent>
          <FileProcessorCli />
        </CardContent>
      </Card>
    </div>
  );
}

export async function getStaticProps() {
  const lessonPath = path.join(process.cwd(), 'content/module1/lesson_1_5.md');
  const source = fs.readFileSync(lessonPath, 'utf8');

  // Split the frontmatter and content
  const [, frontMatterString, content] = source.split('---');

  // Parse frontmatter
  const frontMatter: any = {};
  let inProject = false;
  frontMatterString.split('\n').forEach(line => {
    if (line.trim() !== '') {
      if (line.trim() === 'project:') {
        inProject = true;
        frontMatter.project = {};
      } else if (inProject && line.trim().startsWith('-')) {
        // skip array items
      } else if (inProject && line.trim().includes(':')) {
        const [key, ...valueParts] = line.trim().split(':');
        frontMatter.project[key.trim()] = valueParts.join(':').replace(/"/g, '').trim();
      } else if (!inProject && line.includes(':')) {
        const [key, ...valueParts] = line.split(':');
        frontMatter[key.trim()] = valueParts.join(':').replace(/"/g, '').trim();
      }
    }
  });

  // Serialize the content for MDX
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter,
    },
  };
}
