'use client';

import React, { useEffect, useState } from 'react';
import DataTable from '@/components/dataTable/DataTable';
import { fetchData } from "@/lib/api";
import { ColumnDef } from "@tanstack/react-table";

interface BrandPost {
  brandName: string;
  platform: string;
  postType: string;
  contentCategory: string;
  likes: number;
  comments: number;
  shares: number;
  reach: number;
  engagementRate: string;
  postDate: string;
}

export default function Page() {
  const [data, setData] = useState<BrandPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData("http://localhost:3001/socialPosts") // replace with your actual API
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  const columns = React.useMemo<ColumnDef<BrandPost, any>[]>(
    () => [
      { header: 'Brand Name', accessorKey: 'brandName' },
      { header: 'Platform', accessorKey: 'platform' },
      { header: 'Post Type', accessorKey: 'postType' },
      { header: 'Content Category', accessorKey: 'contentCategory' },
      { header: 'Likes', accessorKey: 'likes' },
      { header: 'Comments', accessorKey: 'comments' },
      { header: 'Shares', accessorKey: 'shares' },
      { header: 'Reach', accessorKey: 'reach' },
      { header: 'Engagement Rate', accessorKey: 'engagementRate' },
      { header: 'Post Date', accessorKey: 'postDate' },
    ],
    []
  );

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">GaanaAI Posts Data</h1>
      <DataTable data={data} columns={columns} />
    </main>
  );
}
