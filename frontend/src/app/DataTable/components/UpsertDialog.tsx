import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SingleSelectDropdown } from "@/components/ui/single-select-dropdown";
import { Textarea } from "@/components/ui/textarea";
import { PLATFORM_LIST, CONTENT_CATEGORY_LIST } from "../constants";
import { IUpsertPost } from "../interface";

const UpsertDialog = ({
  open = false,
  postData,
  handleChange,
  handleCloseDialog,
}: IUpsertPost) => {
  return (
    <Dialog open={open} onOpenChange={handleCloseDialog}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{postData.id ? "Update Post" : "Add Post"}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Brand Name
            </Label>
            <Input
              id="name"
              value={postData.brandName}
              className="col-span-3"
              onChange={(event) => handleChange("brandName", event.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Platform type
            </Label>
            <SingleSelectDropdown
              options={PLATFORM_LIST}
              value={postData?.platform}
              onChange={(val) => handleChange("platform", val)}
              placeholder="Select Platform type"
              required
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Content category
            </Label>
            <SingleSelectDropdown
              options={CONTENT_CATEGORY_LIST}
              value={postData?.contentCategory}
              onChange={(val) => handleChange("contentCategory", val)}
              placeholder="Select Platform type"
              required
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Post Detail
            </Label>
            <Textarea
              className="col-span-3"
              placeholder="Type here."
              value={postData.postDetail}
              onChange={(event) => handleChange("postDetail", event.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpsertDialog;
