import React from "react";
import Avatar from "../../shared/UIComponents/Avatar";
import { Link } from "react-router-dom";
import "./UserItem.css";
import Card from "../../shared/UIComponents/Card";

export default function UserItem({ name, id, image, placeCount }) {
  return (
    <li className='user-item'>
      <Card className='user-item__content'>
        <Link to={`/${id}/places`}>
          <div className='user-item__image'>
            <Avatar image={image} alt={name} />
          </div>

          <div className='user-item__info'>
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? "Place" : "Places"}{" "}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}
