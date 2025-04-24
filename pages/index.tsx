import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Typography } from '@/components/ui/typography';

const modules = [
  {
    id: 1,
    title: 'Introduction & Environment Setup',
    description: 'Learn the basics of Python and set up your development environment.',
    lessons: [
      { id: 1, title: 'What is Python?', slug: 'lesson1' },
      { id: 2, title: 'Installing Python and Setting Up Your Environment', slug: 'lesson2' },
      { id: 3, title: 'Python Interpreter and Interactive Mode', slug: 'lesson3' },
      { id: 4, title: 'Code Editors and IDEs for Python', slug: 'lesson4' },
      { id: 5, title: 'Running Python Scripts', slug: 'lesson5' },
      { id: 6, title: 'Python Documentation and Help System', slug: 'lesson6' },
    ],
  },
  {
    id: 2,
    title: 'Networking with Python (Basic to Professional)',
    description: 'Master networking concepts and automation using Python, from fundamentals to advanced topics.',
    lessons: [
      { id: 1, title: 'Networking Fundamentals', slug: 'lesson1' },
      { id: 2, title: "Python Networking Basics", slug: 'lesson2' },
      { id: 3, title: "Advanced Socket Programming", slug: 'lesson3' },
      { id: 4, title: "Working with Network Protocols", slug: 'lesson4' },
      { id: 5, title: "Network Automation and Device Interaction", slug: 'lesson5' },
      { id: 6, title: "Network Monitoring and Packet Analysis", slug: 'lesson6' },
      { id: 7, title: "REST APIs and Network Devices", slug: 'lesson7' },
      { id: 8, title: "Network Security with Python", slug: 'lesson8' },
      { id: 9, title: "Advanced Networking Topics", slug: 'lesson9' },
      { id: 10, title: "Capstone Project", slug: 'lesson10' },
    ],
  },
];

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <Typography.H1 className="mb-8 text-center">Python E-Learning Web App</Typography.H1>
      <Typography.P className="text-center mb-10">
        Learn Python programming with real-world projects
      </Typography.P>
      
      {modules.map((module) => (
        <Card key={module.id} className="mb-8">
          <CardHeader>
            <CardTitle>Module {module.id}: {module.title}</CardTitle>
            <CardDescription>{module.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {module.lessons.map((lesson) => (
                <li key={lesson.id} className="flex justify-between items-center border-b pb-2">
                  <span>Lesson {module.id}.{lesson.id}: {lesson.title}</span>
                  <Link href={`/module${module.id}/${lesson.slug}`} passHref>
                    <Button>Start Lesson</Button>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}