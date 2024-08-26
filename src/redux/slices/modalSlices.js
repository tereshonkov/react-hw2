import { createSlice } from "@reduxjs/toolkit";

const showModalSlice = createSlice({
    name: 'showModal',
    initialState: {
        isShow: false,
    },
    reducers: {
        setIsShow: (state, action) => {
            state.isShow = action.payload;
        }
    },
});

export const { setIsShow } = showModalSlice.actions;
export default showModalSlice.reducer;
