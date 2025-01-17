import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "./userContext";
import Alert from "./Alert";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function ProfileForm({ editProfile }) {
  const navigate = useNavigate();
  const { currentUser } = useContext(userContext);
  const initialState = currentUser.data;
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState([]);

  console.log("In ProfileForm", "State:", formData);

  /**handelChange : updates form input  */
  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("In handleChange", "name", name, "value", value);
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /** handleSubmit : calls parent function to Profile for results */
  async function handleSubmit(evt) {
    console.log("In handleSubmit=", formData);
    evt.preventDefault();
    try {
      await editProfile(formData);
      navigate("/");
    } catch (err) {
      setErrors((errors) => ([
        ...errors,
        ...err
      ]));
    }
  }

  return (
    <div className="ProfileForm">
      <div className="container col-md-6">
        <h2 className="display-2 mb-4">Profile</h2>
        <Card bg="dark">
          <Form className="row m-3" onSubmit={handleSubmit}>
            <Form.Group className="mt-2 mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                disabled="disabled"
              />
            </Form.Group>
            <Form.Group className="mt-2 mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mt-2 mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mt-2 mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.length !== 0 && <Alert errors={errors} />}
            <div className="mt-3 mb-2">
              <Button variant="custom" type="submit">Submit</Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default ProfileForm;