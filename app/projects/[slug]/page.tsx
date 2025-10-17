import ProjectDetail from "../../components/features/project-detail/[slug]/index";

export type PageProps = {
  params?: any;
  // children?: React.ReactNode;
};

const Page = async ({ params }: PageProps) => {
  const slug = params?.slug;

  return <ProjectDetail slug={slug} />;
};

export default Page;
