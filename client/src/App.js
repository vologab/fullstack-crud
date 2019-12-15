import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';

import dataProvider from './dataProvider';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="tracks" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default App;