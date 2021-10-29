import React from "react";
import Card from "../../shared/UIComponents/Card";
import UserItem from "./UserItem";
import "./UserList.css";

export default function UserList(props) {
  if (props.items.length === 0) {
    return (
      <div>
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <ul className='users-list'>
        {props.items.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places}
            />
          );
        })}
      </ul>
    </div>
  );
}
