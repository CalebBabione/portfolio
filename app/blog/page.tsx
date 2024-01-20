import React from 'react'
import fs from "fs";
import Link from "next/link"

const getPostMetadata = () => {
    const folder = "app/blog/posts";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    const slugs = markdownPosts.map((file) => file.replace(".md", ""));
    return slugs;
};

const bloghome = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((slug) => (
        <div>
            <h2>{slug}</h2>
        </div>
    ));
  return <div>

    <section>
        <h1>Caleb's Blog</h1>
    </section>

    <Link href="blog/posts/${slug}"><h2>{postPreviews}</h2></Link>
    
    
    
    
    </div>;
}

export default bloghome