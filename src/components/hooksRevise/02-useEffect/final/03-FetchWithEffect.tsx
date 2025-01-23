import { useEffect, useState } from "react";
import { postSchema, PostsSchemaType } from "../../../../types/effect";
import axios from "axios";

function FetchWithEffect() {
  const [data, setData] = useState<PostsSchemaType>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [postPointer, setPostPointer] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    const fetchUser = async () => {
      setLoading(true); // Reset loading state
      try {
        const result = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postPointer}`,
          { signal: controller.signal }
        );
        const receivedData = result.data;

        // Validate the data
        const validation = postSchema.safeParse(receivedData);
        if (validation.success) {
          setData(validation.data); // Use validated data
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setError(true);
        }
      } finally {
        setLoading(false); // Ensure loading is false
      }
    };

    fetchUser();
    return () => {
      controller.abort(); // Properly cancel the request
    };
  }, []);

  let content: React.ReactNode;
  if (error) {
    content = <h1>Some error occurred</h1>;
  } else if (loading) {
    content = <h1>Loading...</h1>;
  } else if (data) {
    content = (
      <div
        className="border border-black flex flex-col items-start gap-2 p-1 rounded-lg"
        key={`${data.id}${data.userId}aa11`}
      >
        <h1 className="text-xl">{data.title}</h1>
        <p className="text-sm">{data.body}</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-full border border-black rounded-lg p-2 ">
      {content}
    </div>
  );
}

export default FetchWithEffect;
