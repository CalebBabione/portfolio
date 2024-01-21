import fs from "fs";
import Link from "next/link";

const getPostMetadata = () => {
    const folder = "app/blog/posts";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    const slugs = markdownPosts.map((file) => file.replace(".md", ""));
    return slugs;
};

const BlogPage = () => {
    const postMetadata = getPostMetadata();
    const test = "test";
    const postPreviews = postMetadata.map((slug) => (
        <div>
            <Link href={`posts/${slug}`}>
                <h1>{slug}</h1>
            </Link>
        </div>
        
    ));
        console.log(postMetadata);
    return <div>{postPreviews}</div>;
    

};

export default BlogPage