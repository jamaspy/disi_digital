"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
interface ArticleCardProps {
  title: string;
  description: string;
  author: string;
  avatar: string;
  image: string;
  minutes: number;
  slug: string;
}

export function ArticleCard({
  title,
  description,
  avatar,
  image,
  author,
  minutes,
  slug,
}: ArticleCardProps) {
  return (
    <Link href={slug} className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          // `bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover`
        )}
      >
        <Image
          fill
          alt="Avatar"
          src={image}
          className="absolute inset-0 z-0 object-cover group-hover/card:scale-110 group-hover/card:skew-x-2 transition duration-300"
        />
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-50"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={`/${avatar}`}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {author}
            </p>
            <p className="text-sm text-gray-400">{minutes} min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
