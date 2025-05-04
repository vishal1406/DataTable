"use client";

import React, { useEffect, useState, Fragment } from "react";
import Table from "@/components/table/table";
import { ColumnDef } from "@tanstack/react-table";
import { UpsertDialog } from "../components";
import { IPostData } from "../interface";
import { useApi } from "@/lib/api";
import { fetchPostData, createPost, updatePost, deletePost } from "../api";
import { DEFAULT_POST_DATA, ORDER_MAPPING, POST_COLUMNS } from "../constants";
import { Input } from "@/components/ui/input";

const DataTable = () => {
  const [sort, setSort] = useState("postDate");
  const [order, setOrder] = useState("desc");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [postData, setPostData] = useState<IPostData>(DEFAULT_POST_DATA);

  const {
    data: postList,
    loading: postLoading,
    refetch: fetchPostHandler,
  } = useApi(fetchPostData);
  const {
    loading: createPostLoading,
    refetch: createPostHandler,
  } = useApi(createPost);
  const {
    loading: updatePostLoading,
    refetch: updatePostHandler,
  } = useApi(updatePost);
  const {
    loading: deletePostLoading,
    refetch: deletePostHandler,
  } = useApi(deletePost);

  useEffect(() => {
    handleFetchData();
  }, [page, sort, order, search]);

  const columns = React.useMemo<ColumnDef<IPostData, any>[]>(
    () => POST_COLUMNS,
    []
  );

  const handleChange = (key: string, value: string): void => {
    setPostData((prev: IPostData) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSort = (column: string) => {
    setSort(column);
    setOrder(order === ORDER_MAPPING.AESCENDING ? ORDER_MAPPING.DESCENDING : ORDER_MAPPING.AESCENDING);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleFetchData = () => {
    fetchPostHandler({ page, sort, order, queryValue: search, queryKey: 'brandName' });
  };

  const handleUpsertPost = async () => {
    if (postData.id) {
        updatePostHandler(postData);
    } else {
        createPostHandler(postData);
    }
  };

  const handleDeletePost = async () => {
    if (postData.id) deletePostHandler(postData.id);
  };

  return (
    <Fragment>
      <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
      <Input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search..."
        className="mb-4 p-2 border rounded"
      />
      {postLoading ? (
        <p className="p-4">Loading...</p>
      ) : (
        <Fragment>
          <Table
            data={postList ?? []}
            columns={columns}
            onSort={handleSort}
            sort={sort}
            order={order}
          />
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page <= 1}
            >
              Prev
            </button>
            <span>Page {page}</span>
            <button onClick={() => handlePageChange(page + 1)}>Next</button>
          </div>
        </Fragment>
      )}
      <UpsertDialog
        open={isDialogOpen}
        postData={postData}
        handleChange={handleChange}
        handleCloseDialog={() => setIsDialogOpen(false)}
      />
    </Fragment>
  );
};

export default DataTable;
