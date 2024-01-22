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
        <div>
            <Link href={`blog/posts/${post.slug}`}>
                <h1>{post.title}</h1>
                <p>{post.subtitle}</p>
                <p>{post.date}</p>
            </Link>
        </div>
        
    ));
        console.log(postMetadata);
    return <div>{postPreviews}</div>;
    

};

export default BlogPage