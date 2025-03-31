"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Skills data
interface Skill {
  name: string;
  level: number;
  description: string;
  icon: string;
}

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      {
        name: 'React',
        level: 90,
        description: 'Building complex UIs with hooks, context and advanced patterns',
        icon: '⚛️',
      },
      {
        name: 'React Native',
        level: 85,
        description: 'Cross-platform mobile app development with native modules integration',
        icon: '📱',
      },
      {
        name: 'TypeScript',
        level: 85,
        description: 'Type-safe code with interfaces, generics and utility types',
        icon: '🔷',
      },
      {
        name: 'Next.js',
        level: 80,
        description: 'SSR, SSG, ISR and API routes for performant React applications',
        icon: '▲',
      },
      {
        name: 'CSS/SCSS',
        level: 85,
        description: 'Modern layouts with Flexbox, Grid and responsive design',
        icon: '🎨',
      },
      {
        name: 'Tailwind CSS',
        level: 90,
        description: 'Utility-first CSS framework for rapid UI development',
        icon: '🌊',
      },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: [
      {
        name: 'Node.js',
        level: 75,
        description: 'RESTful APIs and server-side applications',
        icon: '🟢',
      },
      {
        name: 'Express',
        level: 80,
        description: 'API development with middleware and routing',
        icon: '🚂',
      },
      {
        name: 'Firebase',
        level: 85,
        description: 'Firestore, Auth, Cloud Functions and Storage',
        icon: '🔥',
      },
      {
        name: 'MongoDB',
        level: 70,
        description: 'Document database with schemas and aggregation',
        icon: '🍃',
      },
      {
        name: 'GraphQL',
        level: 65,
        description: 'Schema definition and resolvers for flexible APIs',
        icon: '◆',
      },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Others',
    skills: [
      {
        name: 'Git',
        level: 90,
        description: 'Version control, branching strategies and collaborative workflows',
        icon: '📂',
      },
      {
        name: 'Jest',
        level: 75,
        description: 'Unit and integration testing with mocking',
        icon: '🧪',
      },
      {
        name: 'CI/CD',
        level: 70,
        description: 'Automated testing and deployment pipelines',
        icon: '🔄',
      },
      {
        name: 'Figma',
        level: 80,
        description: 'UI design, prototyping and design system implementation',
        icon: '🎯',
      },
      {
        name: 'Performance Optimization',
        level: 85,
        description: 'Web vitals, bundle optimization and rendering strategies',
        icon: '⚡',
      },
    ],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  // Render the level bar in pixel art style
  const renderLevelBar = (level: number) => {
    const blocks = 10;
    const filledBlocks = Math.floor(level / 10);

    return (
      <div className="flex space-x-1 mt-2">
        {Array.from({ length: blocks }).map((_, index) => (
          <div
            key={`level-${index}`}
            className={`w-4 h-4 ${
              index < filledBlocks
                ? 'bg-blue-500'
                : 'bg-slate-700'
            } pixel-corners`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block pixel-border bg-slate-800/60 backdrop-blur-sm px-6 py-2 mb-6"
          >
            <h2 className="text-xl text-yellow-400 pixel-text">Skills</h2>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Technical Powerups
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl mx-auto text-slate-300"
          >
            A collection of skills and technologies I've mastered throughout my journey as a frontend developer, with a focus on React and React Native ecosystems.
          </motion.p>
        </div>

        <Tabs
          defaultValue={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-slate-800 p-1 pixel-border">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={`pixel-text text-sm px-6 py-2 ${
                    activeCategory === category.id
                      ? 'data-[state=active]:bg-blue-600 data-[state=active]:text-white'
                      : 'text-slate-400'
                  }`}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <Card className="bg-slate-800/50 border-slate-700 overflow-hidden pixel-corners">
                      <CardContent className="p-6 relative">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-blue-900/20 rounded-bl-3xl flex items-center justify-center text-3xl">
                          {skill.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 pixel-text">{skill.name}</h3>
                        {renderLevelBar(skill.level)}
                        <p className="mt-4 text-slate-300 text-sm">{skill.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
