import React from "react";
import { Admin, Resource } from "react-admin";
import { RestProvider, AuthProvider } from "./lib";
import { ContentList, ContentCreate, ContentEdit } from "./component/Content";
import { TagsList, TagEdit, TagCreate } from "./component/Tags";
import { firebaseConfig, trackedResources, authConfig } from "./config";

const dataProvider = RestProvider(firebaseConfig, { trackedResources });

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={AuthProvider(authConfig)}>
    <Resource
      name="contents"
      list={ContentList}
      edit={ContentEdit}
      create={ContentCreate}
    />
    <Resource name="tags" list={TagsList} edit={TagEdit} create={TagCreate} />
  </Admin>
);

export default App;
