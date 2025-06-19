import type { User } from "./User";

export interface IUserLinkProps {
  user: User | null;
}

export function UserLink ({ user }: IUserLinkProps) {
  if (!user) {
    return (
      <a href="/login">Login or Signup</a>
    )
  }
  else {
    return "TODO";
  }
}
