"use client";

import React, { useEffect, useState, Fragment } from "react";
import Table from "@/components/table/table";
import { ColumnDef } from "@tanstack/react-table";
import { DeletePostDialog, UpsertPostDialog } from "../components";
import { IPostData } from "../interface";
import { useApi } from "@/lib/api";
import { fetchPostData, createPost, updatePost, deletePost } from "../api";
import {
  DEFAULT_POST_DATA,
  DIALOG_TYPE_MAPPING,
  ORDER_MAPPING,
} from "../constants";
import { Input } from "@/components/ui/input";
import { getColumns, getCurrentDate } from "../helper";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DataTable = () => {
  const [sort, setSort] = useState("postDate");
  const [order, setOrder] = useState(ORDER_MAPPING.AESCENDING);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [currentDialog, setCurrentDialog] = useState<string>("");
  const [postData, setPostData] = useState<IPostData>(DEFAULT_POST_DATA);

  const {
    data: postList,
    loading: postLoading,
    refetch: fetchPostHandler,
  } = useApi(fetchPostData);
  const { loading: createPostLoading, refetch: createPostHandler } =
    useApi(createPost);
  const { loading: updatePostLoading, refetch: updatePostHandler } =
    useApi(updatePost);
  const { loading: deletePostLoading, refetch: deletePostHandler } =
    useApi(deletePost);

  useEffect(() => {
    handleFetchData();
  }, [page, sort, order, search]);

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
    setOrder(
      order === ORDER_MAPPING.AESCENDING
        ? ORDER_MAPPING.DESCENDING
        : ORDER_MAPPING.AESCENDING
    );
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleOpenDialog = (dialogType: string, postData: IPostData) => {
    setPostData(postData);
    setCurrentDialog(dialogType);
  };

  const handleFetchData = () => {
    fetchPostHandler({
      args: {
        page,
        sort,
        order,
        queryValue: search,
        queryKey: "brandName",
      },
    });
  };

  const handleUpsertPost = async () => {
    if (postData.id) {
      updatePostHandler({ args: postData, onSuccess: handleCallback });
      postData.updatedAt = getCurrentDate();
    } else {
      postData.postDate = getCurrentDate();
      createPostHandler({ args: postData,  onSuccess: handleCallback });
    }
  };

  const handleDeletePost = async () => {
    if (postData.id) deletePostHandler({ args: postData.id, onSuccess: handleCallback });
  };

  const handleCallback = () => {
    setCurrentDialog("");
    handleFetchData();
  };

  return (
    <Fragment>
      <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
      <div className="flex gap-2">
        <Input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search by Brand Name"
          className="mb-4 p-2 border rounded"
        />
        <Button
          onClick={() =>
            handleOpenDialog(DIALOG_TYPE_MAPPING.CREATE, DEFAULT_POST_DATA)
          }
        >
          Create Post
        </Button>
      </div>
      {postLoading ? (
        <p className="p-4">Loading...</p>
      ) : (
        <Fragment>
          <Table
            data={postList?.data ?? []}
            columns={getColumns(handleOpenDialog)}
            onSort={handleSort}
            sort={sort}
            order={order}
          />
          <div className="flex justify-end">
            <div className="flex justify-between gap-2">
              <Button
                disabled={!postList?.prev}
                onClick={() => handlePageChange(page - 1)}
              >
                <ChevronLeft />
              </Button>
              <Button variant="outline">{page}</Button>
              <Button
                disabled={!postList?.next}
                onClick={() => handlePageChange(page + 1)}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </Fragment>
      )}
      {[DIALOG_TYPE_MAPPING.CREATE, DIALOG_TYPE_MAPPING.UPDATE].includes(
        currentDialog
      ) && (
        <UpsertPostDialog
          open={true}
          postData={postData}
          handleChange={handleChange}
          handleUpsertPost={handleUpsertPost}
          handleCloseDialog={() => setCurrentDialog("")}
        />
      )}
      {DIALOG_TYPE_MAPPING.DELETE === currentDialog && (
        <DeletePostDialog
          open={true}
          handleDeletePost={handleDeletePost}
          handleCloseDialog={() => setCurrentDialog("")}
        />
      )}
    </Fragment>
  );
};

export default DataTable;
