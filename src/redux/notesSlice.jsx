import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: [
    {
      id: 0,
      heading: "redux",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus itaque aliquam, laborum modi veniam labore esse aut voluptatem magni consequuntur alias accusamus pariatur nisi temporibus",
      createdAt: "5 days ago",
    },
    {
      id: 1,
      heading: "Weekly Task",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus itaque aliquam, laborum modi veniam labore esse aut voluptatem magni consequuntur alias accusamus pariatur nisi temporibus",
      createdAt: "5 days ago",
    },
    {
      id: 2,
      heading: "Lyrics",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus itaque aliquam, laborum modi veniam labore esse aut voluptatem magni consequuntur alias accusamus pariatur nisi temporibus",
      createdAt: "5 days ago",
    },
    {
      id: 3,
      heading: "Lyrics",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus itaque aliquam, laborum modi veniam labore esse aut voluptatem magni consequuntur alias accusamus pariatur nisi temporibus",
      createdAt: "5 days ago",
    },
  ],
  reducers: {
    newNote: (state, action) => {
      let id = state[state.length - 1].id + 1;
      action.payload.id = id;
      state.push(action.payload);
    },
  },
});

export const { newNote } = notesSlice.actions;

export default notesSlice.reducer;
