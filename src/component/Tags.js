import React from "react";
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  NumberInput,
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
      <TextField source="order" />
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
        <NumberInput source="order" label="Sort Order" />
        <TextInput source="label" />
      </SimpleForm>
    </Create>
  );
};

export const TagEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField disabled source="id" />
      <NumberInput source="order" label="Sort Order" />
      <TextInput source="label" />
    </SimpleForm>
  </Edit>
);
