export interface ISocialLink {
  platform: "facebook" | "twitter" | "instagram" | "linkedin";
  url: string;
}

export interface IUser {
  _id: string;
  email: string;
  userName: string;
  name: string;
  password: string;
  socialLinks: ISocialLink[];
  profilePicture: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  role: "user" | "admin";
  location?: string;
  website?: string;
  followers: string[];
  following: string[];
  blogs: string[];
}
