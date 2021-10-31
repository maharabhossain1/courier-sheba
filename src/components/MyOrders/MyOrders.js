import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../hook/useAuth";

export default function MyOrders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://protected-badlands-11098.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleUserID = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://protected-badlands-11098.herokuapp.com/allorder/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = orders.filter((order) => order._id !== id);
            setOrders(remainingUsers);
          }
        });
    }
  };

  return (
    <div>
      <div>
        <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/7tb4hLn/8.jpg"
            alt=""
          />
        </div>
        <div className=" my-4 home-text w-75 m-auto">
          <h1>Hello {user?.displayName} </h1>
          <h4>
            Here is your Orders , <br /> your can delete your order and also see
            your order status{" "}
          </h4>
        </div>
      </div>
      {orders.map((order) => {
        const { status, _id, serviceName, email } = order;
        return (
          <div
            key={_id}
            className="d-md-flex w-75 m-auto my-4 p-3 border-custom-color align-items-center"
          >
            <div className="w-75">
              <h4>{serviceName}</h4>
              <p>
                <small>{email}</small>
              </p>
              <p>
                <span
                  className={`${
                    status.toLowerCase() === "confirm"
                      ? "custom-div-active"
                      : "custom-div"
                  } p-2`}
                >
                  {" "}
                  {status}
                </span>
              </p>
            </div>
            <div>
              <Button
                className="bg-danger"
                onClick={() => {
                  handleUserID(_id);
                }}
              >
                {" "}
                Delete X
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
