import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = "app/blog/posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult.content;
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  console.log({slug});
  const content = getPostContent(slug);
  return (
    <div className=" sm: inline-block">
      <h1>This is a post: {slug}</h1>
      <Markdown className=" inline-block sm: max-w-md text-xs " >{content}</Markdown>
    </div>
  );
};

export default PostPage;