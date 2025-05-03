'use client';

import React from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

const Table = ({ data }: any) => {
  const columns = React.useMemo(
    () => [
      {
        header: 'Brand Name',
        accessorKey: 'brandName',
      },
      {
        header: 'Platform',
        accessorKey: 'platform',
      },
      {
        header: 'Post Type',
        accessorKey: 'postType',
      },
      {
        header: 'Content Category',
        accessorKey: 'contentCategory',
      },
      {
        header: 'Likes',
        accessorKey: 'likes',
      },
      {
        header: 'Comments',
        accessorKey: 'comments',
      },
      {
        header: 'Shares',
        accessorKey: 'shares',
      },
      {
        header: 'Reach',
        accessorKey: 'reach',
      },
      {
        header: 'Engagement Rate',
        accessorKey: 'engagementRate',
      },
      {
        header: 'Post Date',
        accessorKey: 'postDate',
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="min-w-full table-auto">
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id} className="px-4 py-2 border-b text-left">
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id} className="px-4 py-2 border-b">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
