import React from 'react';
import Wrapper from './Wrapper';
import { LuBuilding, LuPartyPopper } from 'react-icons/lu';
export const AboutPage = () => {
  const skills = [
    'typescript',
    'react',
    'nextjs',
    'tailwindcss',
    'shadcn',
    'nodejs',
    'trpc',
    'mongodb',
    'git',
    'jest',
    'github',
    'jira',
    'notion',
    'figma',
  ];
  const fun_skills = [
    'typescript',
    'react',
    'nextjs',
    'gatsbyjs',
    'tailwindcss',
    'shadcn',
    'vercel',
    'xata',
    'stripe',
    'contentful',
    'sanity',
    'prisma',
    'react-query',
    'git',
    'jest',
    'github',
    'obsidian',
    'figma',
  ];
  return (
    <Wrapper id="about">
      <div className="flex items-center justify-center min-h-[80vh] ">
        <div className="flex flex-col px-8  max-w-[980px] mx-auto">
          <p className="text-5xl font-black">
            About<span className="text-highlight">.</span>
          </p>
          <hr className="my-4 border-highlight max-w-md" />
          <div className="flex flex-col md:flex-row gap-12 items-start justify-center ">
            <div className="flex-1 font-light">
              <p className="">
                Hey! I&rsquo;m James, if you haven&rsquo;t already gathered that
                by now. I&rsquo;m a technical recruiter turned software engineer
                from Stoke-on-Trent, England now living in Avalon Beach in
                Sydney, Australia. I specialize in the frontend, primarily
                Typescript and NextJS (React), but love building with whatever
                tools are right for the job.
              </p>
              <p className="my-8">
                I currently work for Forage on Virtual Work Experience Programs.
                I also work with the Design Team on our design systems from time
                to time and I lead the Frontend Guild. Outside of work, I love
                coffee, wine and motorbikes. Any given Sunday you&rsquo;ll find
                me touring the Hunter Valley on my bike with my Brother! (We
                have matching bikes){' '}
              </p>
              <p>
                I&rsquo;m always looking for new side-projects to learn and
                grow, so if you have an idea you&rsquo;d like to collaborate on,
                or you just need some technical advice, please don&rsquo;t
                hesitate to reach out.
              </p>
            </div>
            <div className="flex-1 hidden md:flex flex-col items-start justify-start  h-full">
              <div className="w-full">
                <p className="flex flex-row items-center text-xl font-semibold">
                  <LuBuilding className="text-highlight mr-2" />
                  Use at work.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-4 w-full">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="text-center px-2 py-1 text-xs inline-block rounded-xl bg-highlight"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <p className="flex flex-row items-center text-xl font-semibold">
                  <LuPartyPopper className="text-highlight mr-2" />
                  Used for the funs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-4 w-full">
                  {fun_skills.map((skill, index) => (
                    <div
                      key={index}
                      className="text-center px-2 py-1 text-xs inline-block rounded-xl bg-highlight"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
