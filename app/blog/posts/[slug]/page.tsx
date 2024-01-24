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
    <div>
      <h1 className="text-center font-jetbrains-bold text-4xl my-2">{slug}</h1>

        <Markdown className="prose ml-auto mr-auto sm: text-xs" >{content}</Markdown>
    </div>
  );
};

export default PostPage;