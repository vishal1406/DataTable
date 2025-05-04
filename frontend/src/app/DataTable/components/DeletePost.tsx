import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IDeletePost } from "../interface";

const DeletePostDialog = ({
  open = false,
  handleDeletePost,
  handleCloseDialog,
}: IDeletePost) => {
  return (
    <Dialog open={open} onOpenChange={handleCloseDialog}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Delete Post</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          Are you sure you want to delete this post? This action cannot be
          undone and will permanently remove all content, comments, and
          engagement metrics associated with this post.
        </div>
        <DialogFooter>
          <Button onClick={handleDeletePost}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePostDialog;
