import { useRouter } from 'next/router';

function Post() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Post: {slug}</h1>
    </div>
  );
}

export default Post;