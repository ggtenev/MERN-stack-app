import React from "react";
import UserList from "../components/UserList";

export default function Users() {
  const USERS = [
    {
      name: "George",
      id: 1,
      image:
        "https://static.vecteezy.com/system/resources/previews/000/551/599/original/user-icon-vector.jpg",
      places: 3,
    },
  ];
  return (
    <div>
      <UserList items={USERS} />
    </div>
  );
}
