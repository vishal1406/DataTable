import { BASE_URL } from "@/lib/config";
import { IPostData } from "./interface";
import { toast } from "sonner"

export const fetchPostData = async ({
  page = 1,
  pageSize = 20,
  sort = "",
  order = "asc",
  queryKey = "",
  queryValue = "",
} = {}) => {
  const response = await fetch(
    `${BASE_URL}/socialPosts?_page=${page}&_per_page=${pageSize}&_sort=${
      order === "asc" ? "-" + sort : sort
    }&${queryKey}=${queryValue}`
  );
  if (!response.ok) {
    toast.error("Failed to fetch data")
    throw new Error("Failed to fetch data");
  }
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

  if (!res.ok) {
    toast.error("Something went wrong while creating post. Please try again.")
    throw new Error("Something went wrong while creating post. Please try again.");
  }
  toast.success("Post created successfully")
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

  if (!res.ok) {
    toast.error("Something went wrong while updating post. Please try again.")
    throw new Error("Something went wrong while updating post. Please try again.");
  }
  toast.success("Post updated successfully")
  return res.json();
};

export const deletePost = async (id: string) => {
  const res = await fetch(`${BASE_URL}/socialPosts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    toast.error("Something went wrong while deleting post. Please try again.")
    throw new Error("Something went wrong while deleting post. Please try again.");
  }
  toast.success("Post deleted successfully")
  return { success: true };
};
