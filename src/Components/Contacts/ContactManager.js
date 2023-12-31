import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AddContact } from "./AddContact";
import { Route, Routes } from "react-router-dom";
import ContactList from "./ContactList";
import { EditContact } from "./EditContact";
import axios from "../../API/axios";
import { successMsg } from "../Auth/LoginError";
import { ToastContainer } from "react-toastify";

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);

  //ADD CONTACTS
  const addContactHandler = async (contact) => {
    const request = {
      id: Math.ceil(Math.random() * 1000),
      ...contact,
    };
    const response = await axios.post("/contacts", request);
    setContacts([...contacts, response.data]);
    successMsg("Contact Added Successfully!");
  };

  //UPDATE CONTACTS
  const updateContactHandler = async (contact) => {
    const response = await axios.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
    successMsg("Contact Updated Successfully!");
  };

  //DELETE CONTACTS
  const removeContactHandler = async (id) => {
    await axios.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
    successMsg("Contact Deleted Successfully!");
  };

  //RETRIEVE CONTACTS
  const retrieveContacts = async () => {
    const response = await axios.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);
  return (
    <div>
      <Container maxWidth="md">
        <Routes>
          <Route
            path="/addcontact"
            element={<AddContact addContactHandler={addContactHandler} />}
          ></Route>
          <Route
            path="/editcontact"
            element={
              <EditContact updateContactHandler={updateContactHandler} />
            }
          ></Route>
          <Route
            path="/contactlist"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          ></Route>
        </Routes>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default ContactManager;
