import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
    const folder = "app/blog/posts";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`app/blog/posts/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
        };
    });

    return posts;
};

const BlogPage = () => {
    const postMetadata = getPostMetadata();
    const test = "test";
    const postPreviews = postMetadata.map((post) => (
        <div className=" shadow-md my-2 p-2 ml-auto mr-auto bg-slate-100 rounded-xl sm: max-w-sm">
            <Link className=" text-sm hover:text-blue-400" href={`blog/posts/${post.slug}`}>
                <h1>{post.title}</h1>
                <p>{post.subtitle}</p>
                <p>{post.date}</p>
            </Link>
        </div>
        
    ));
        console.log(postMetadata);
    return <div>
        <h1 className=" text-center my-2 text-2xl font-jetbrains-bold">Welcome to my blog</h1>
        {postPreviews}
        </div>;
    

};

export default BlogPage