import ProjectDetail from "src/components/Project/[slug]";

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};

const Page = async ({ params }: PageProps) => {
  const slug = params?.slug;

  return <ProjectDetail slug={slug} />;
};

export default Page;
