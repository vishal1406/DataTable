export interface IPostData {
  id?: string;
  brandName: string;
  platform: string;
  postType: string;
  contentCategory: string;
  likes: number;
  comments: number;
  shares: number;
  reach: number;
  engagementRate: number;
  postDate: string;
  postDetail: string;
}

export interface IUpsertPost {
    open: boolean;
    postData: IPostData;
    handleChange:  (key: |  string, value: string) => void;
    handleCloseDialog: () => void;
}

export interface IDeletePost {
  open?: boolean;
  handleDeletePost: () => void;
  handleCloseDialog: () => void;
}
