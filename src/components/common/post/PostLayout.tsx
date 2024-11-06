"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { Project } from "src/components/data/ProjectList";

export type PostLayoutType = {
  _id: string;
  slug: string;
  title: string;
  publishedAt: any;
  readingTime: string;
  project: Project;
};

type PostLayoutProps = {
  children: React.ReactNode;
  post: PostLayoutType | undefined;
};

const PostLayout: React.FC<PostLayoutProps> = ({ children, post }) => {
  return (
    <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {post?.title}
      </h1>
      <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
        <div className="flex items-center">
          <Image
            alt="Profile Image"
            height={24}
            width={24}
            sizes="20vw"
            src="/static/images/luna_profile_img.png"
            className="rounded-full"
          />
          <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
            {"luna / "}
            {dayjs(post?.publishedAt).format("MMMM DD, YYYY")}
            {/* {dayjs(post?.publishedAt).format("MMMM DD, YYYY")} */}
          </p>
        </div>
      </div>
      <Suspense fallback={null}>
        <div className="post-layout w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
      </Suspense>
    </article>
  );
};

export default PostLayout;
