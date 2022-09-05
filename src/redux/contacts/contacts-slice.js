import { createSlice } from '@reduxjs/toolkit';

const initialStore = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStore,
  reducers: {
    addContacts: (state, action) => {
      state.push(action.payload);
    },
    removeContacts: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContacts, removeContacts } = contactsSlice.actions;
console.log('add', addContacts);
export default contactsSlice;
