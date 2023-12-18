import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import ImageComponent from "@/components/Image";
import { get } from "http";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({
  params,
}: {
  params: { category: [string] };
}) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params.category.join("/")
  );
  if (!post) throw new Error(`Post not found for slug: ${params.category}`);
  return { title: post.title };
};

const mdxComponent = {
  ImageComponent,
};

const PostLayout = ({ params }: { params: { category: [string] } }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params.category.join("/")
  );
  if (!post) throw new Error(`Post not found for slug: ${params.category}`);

  const Content = useMDXComponent(post.body.code);

  return (
    <article
      className="prose text-lg mx-auto max-w-4xl py-8 px-4 bg-slate-400/20 rounded-t-xl
     prose-blockquote:border-yellow-500
     prose-blockquote:bg-slate-400/20 text-black prose-blockquote:rounded-r-xl prose-blockquote:p-3 
     prose-li:marker:text-black"
    >
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0">
        <Content components={mdxComponent} />
      </div>
    </article>
  );
};

export default PostLayout;
