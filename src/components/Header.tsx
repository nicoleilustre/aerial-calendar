import React from "react";

interface UsernamePropInterface {
  username: string;
}
export const Header = ({ username }: UsernamePropInterface) => {
  return <h1>Welcome, {username}</h1>;
};
