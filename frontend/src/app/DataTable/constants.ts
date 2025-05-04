export const PLATFORM_LIST = [
  { label: "Facebook", value: "Facebook" },
  { label: "Instagram", value: "Instagram" },
  { label: "LinkedIn", value: "LinkedIn" },
  { label: "Twitter", value: "Twitter" },
  { label: "YouTube", value: "YouTube" },
];

export const CONTENT_CATEGORY_LIST = [
  { label: "Announcement", value: "Announcement" },
  { label: "BehindTheScenes", value: "BehindTheScenes" },
  { label: "Event", value: "Event" },
  { label: "Meme", value: "Meme" },
  { label: "Product", value: "Product" },
  { label: "Testimonial", value: "Testimonial" },
];

export const POST_COLUMNS = [
  { header: "Brand Name", accessorKey: "brandName" },
  { header: "Platform", accessorKey: "platform" },
  { header: "Content Category", accessorKey: "contentCategory" },
  { header: "Likes", accessorKey: "likes" },
  { header: "Comments", accessorKey: "comments" },
  { header: "Shares", accessorKey: "shares" },
  { header: "Reach", accessorKey: "reach" },
  { header: "Engagement Rate", accessorKey: "engagementRate" },
  { header: "Post Date", accessorKey: "postDate" },
  { header: "Actions", accessorKey: "actions" },
];

export const DEFAULT_POST_DATA = {
  brandName: "",
  platform: "",
  postType: "",
  postDetail: "",
  contentCategory: "",
  likes: 0,
  comments: 0,
  shares: 0,
  reach: 0,
  engagementRate: 0,
  postDate: "",
};

export const ORDER_MAPPING = {
  DESCENDING: "desc",
  AESCENDING: "asc",
};

export const DIALOG_TYPE_MAPPING = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};
