import { BASE_URL } from "@/lib/config";
import { IPostData } from "./interface";

export const fetchPostData = async ({
  page = 1,
  pageSize = 10,
  sort = "",
  order = "asc",
  queryKey = "",
  queryValue = "",
} = {}) => {
  const response = await fetch(
    `${BASE_URL}/socialPosts?_page=${page}&_limit=${pageSize}&_sort=${
      order === "asc" ? "-" + sort : sort
    }&${queryKey}=${queryValue}`
  );
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};

export const createPost = async (postData: IPostData) => {
  const res = await fetch(`${BASE_URL}/socialPosts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!res.ok) throw new Error("Failed to create post");
  return res.json();
};

export const updatePost = async (postData: IPostData) => {
  const res = await fetch(`${BASE_URL}/socialPosts/${postData.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!res.ok) throw new Error("Failed to update post");
  return res.json();
};

export const deletePost = async (id: string) => {
  const res = await fetch(`${BASE_URL}/socialPosts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete post");
  return { success: true };
};
