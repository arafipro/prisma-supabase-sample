// const API_URL = "http://localhost:3000";
const API_URL = "https://prisma-supabase-sample.pages.dev";

export async function getAllPosts() {
  const res = await fetch(`${API_URL}/api/blog/`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts data");
  }
  return res.json();
}
