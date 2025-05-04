import { Pencil, Trash2 } from 'lucide-react';
import { IPostData } from './interface';
import { ColumnDef } from '@tanstack/react-table';
import { DIALOG_TYPE_MAPPING } from './constants';

export const getColumns = (handleOpenDialog: (value: string, row: any) => void): ColumnDef<IPostData, any>[] => {
    return [
        { header: "Brand Name", accessorKey: "brandName" },
        { header: "Platform", accessorKey: "platform" },
        { header: "Content Category", accessorKey: "contentCategory" },
        { header: "Likes", accessorKey: "likes" },
        { header: "Comments", accessorKey: "comments" },
        { header: "Shares", accessorKey: "shares" },
        { header: "Reach", accessorKey: "reach" },
        { header: "Engagement Rate", accessorKey: "engagementRate" },
        { header: "Post Date", accessorKey: "postDate" },
        {
            header: "Actions",
            accessorKey: "actions",
            // @ts-ignore
            cell: ({ row }: { row: IPostData}) => (
              <div className="flex gap-2">
                {/* @ts-ignore */}
                <Pencil size={16} onClick={() => handleOpenDialog(DIALOG_TYPE_MAPPING.UPDATE, row.original)} className="cursor-pointer" />
                {/* @ts-ignore */}
                <Trash2 size={16} onClick={() => handleOpenDialog(DIALOG_TYPE_MAPPING.DELETE, row.original)} className="cursor-pointer" />
              </div>
            ),
        }
          
    ]
}

export const checkIsUpsertButtonDisabled = (postData: IPostData) => {
  if (!(postData.brandName || "").trim() || !postData.platform || !postData.contentCategory || !(postData.postDetail || "").trim()) {
    return true;
  }
  return false;
}

export const getCurrentDate = () => new Date().toISOString().split('T')[0];