import React from "react";
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  FileField,
  FileInput
} from "react-admin";

export const ContentList = props => (
  <List title="All Content" {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ContentCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <ImageInput source="logo" label="Logo" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <FileInput source="pdf" label="Related files" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);

export const ContentEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField disabled source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <ImageInput source="logo" label="Logo" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <FileInput source="pdf" label="Related files" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
);
