const PostPage = (props: any) => {
    const slug = props.params.slug;
    console.log({slug});
    return (
      <p>
        <h1>This is a post: {slug}</h1>
      </p>
    );
  };
  
  export default PostPage;