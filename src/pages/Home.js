import React, { useState } from "react";
import "./Home.css";
import DataContainer from "../components/DataConatiner/DataContainer";

let Data = [
  {
    id: 1,
    name: "William Dea",
    userName: "William Dea",
    email: "william@mail.com",
  },
  {
    id: 2,
    name: "Ela Ela",
    userName: "Ela Ela",
    email: "ela@mail.com",
  },
  {
    id: 3,
    name: "Arun Neo",
    userName: "Arun Neo",
    email: "arun@mail.com",
  },
  {
    id: 4,
    name: "Neo jain",
    userName: "Neo jain",
    email: "neo@mail.com",
  },
  {
    id: 5,
    name: "William Dea",
    userName: "William Dea",
    email: "William@email.com",
  },
  {
    id: 6,
    name: "Priya Garg",
    userName: "Priya Garg",
    email: "priya@mail.com",
  },
];

const Home = () => {
  const [tableData, setTableData] = useState(Data);
  const [error, setError] = useState("");
  const editForm = (data, id) => {
    setError("");
    if (data.name === "") {
      setError("Name is required, Please enter name.");
    } else if (data.userName === "") {
      setError("User name is not defined, Please enter a valid user name. ");
    } else if (data.email === "") {
      setError("Can't edit without email.");
    } else {
      setError("");
      console.log(data);
      const objIndex = Data.findIndex((obj) => obj.id === id);
      let newArray = [...tableData];
      newArray[objIndex] = {
        ...newArray[objIndex],
        name: data.name,
        userName: data.userName,
        email: data.email,
      };
      console.log(newArray);
      setTableData(newArray);
    }
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="home-container">
              {error && (
                <div class="alert alert-primary" role="alert">
                  {error}
                </div>
              )}
              <table class="table">
                <thead class="table-light my_box_shadow">
                  <tr>
                    <th>S. NO.</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="default_font_size">
                  {tableData.map((item, i) => {
                    return (
                      <DataContainer
                        {...item}
                        key={item.id}
                        editForm={editForm}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
