import { useRouter } from "next/router";

export default function ViewPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <>
      <h1>View</h1>
      <button onClick={() => setTimeout(() => router.push("/"), 5000)}>
        Send me home in 5seconds
      </button>
    </>
  );
}
