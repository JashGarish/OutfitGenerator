import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import axios from "axios";
export default function CreateItem() {
  const [formData, setFormData] = useState({
    colorInput: "",
    clotheInput: "",
    lengthInput: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      color: formData.colorInput,
      clothe: formData.clotheInput,
      len: formData.lengthInput,
    };
    console.log(newItem);
    axios
      .post("http://localhost:5000/api/posts", { newItem })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTextInput">
        <Form.Label>Color Input</Form.Label>
        <FormControl
          type="text"
          name="colorInput"
          value={formData.colorInput}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDropdownInput">
        <Form.Label>Apparel Type</Form.Label>
        <FormControl
          as="select"
          name="clotheInput"
          value={formData.clotheInput}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="Shirt">Shirt</option>
          <option value="Pants">Pants</option>
          <option value="Jacket">Jacket</option>
        </FormControl>
      </Form.Group>

      <Form.Group controlId="formDropdownInput">
        <Form.Label>Length</Form.Label>
        <FormControl
          as="select"
          name="lengthInput"
          value={formData.lengthInput}
          onChange={handleChange}
        >
          <option value={false}>Short</option>
          <option value={true}>Long</option>
        </FormControl>
      </Form.Group>

      <button type="submit">Submit</button>
    </Form>
  );
}
