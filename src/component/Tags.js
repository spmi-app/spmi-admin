import React from "react";
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  DisabledInput,
  EditButton,
  SimpleForm,
  TextInput
} from "react-admin";
import uuidv1 from "uuid/v1";

export const TagsList = props => (
  <List title="All Categories" {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="label" />
      <EditButton />
    </Datagrid>
  </List>
);

export const TagCreate = props => {
  const uuid = uuidv1();
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput disabled initialValue={uuid} source="id" />
        <TextInput source="label" />
      </SimpleForm>
    </Create>
  );
};

export const TagEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField disabled source="id" />
      <TextInput source="label" />
    </SimpleForm>
  </Edit>
);
