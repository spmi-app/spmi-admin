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
  FileInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput
} from "react-admin";
import uuidv1 from "uuid/v1";

export const ContentList = props => (
  <List title="All Content" {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="order" />
      <TextField source="title" />
      <TextField source="description" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ContentCreate = props => {
  const uuid = uuidv1();

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput disabled initialValue={uuid} source="id" />
        <TextInput source="title" />
        <TextInput source="description" />
        <NumberInput source="order" label="Sort Order" />
        <ReferenceArrayInput source="tags" label="Tags" reference="tags">
          <SelectArrayInput optionText="label" />
        </ReferenceArrayInput>
        <ImageInput source="logo" label="Logo" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
        <FileInput source="pdf" label="Related files" accept="application/pdf">
          <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Create>
  );
};

export const ContentEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField disabled source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <NumberInput source="order" label="Sort Order" />
      <ReferenceArrayInput source="tags" label="Tags" reference="tags">
        <SelectArrayInput optionText="label" />
      </ReferenceArrayInput>
      <ImageInput source="logo" label="Logo" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <FileInput source="pdf" label="Related files" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
);
