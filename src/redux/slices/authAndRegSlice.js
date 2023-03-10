import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const usersURL = 'http://134.122.75.14:8666/api/auth/profile/';
const regURL = 'http://134.122.75.14:8666/api/auth/signup/';
const logURL = 'http://134.122.75.14:8666/api/auth/signin/';
const logoutURL = `http://134.122.75.14:8666/api/auth/logout/`

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    const response = await axios.get(usersURL);
    return response.data;
});


export const registration = createAsyncThunk('registration', async (data) => {
    const response = await axios
        .post(regURL, data, {
            headers: {'Content-type': 'multipart/form-data'},
        })
    return response;
});


export const authorization = createAsyncThunk(
    'authorization',
    async (data, {dispatch}) => {
        const response = await axios
            .post(logURL, data)
            .then((response) => {
                localStorage.setItem('tokenAccess', response.data.access);
                localStorage.setItem('tokenRefresh', response.data.refresh);
                dispatch(setLogined(true));
                localStorage.setItem('logined', true)
            })
        return response;
    }
);

export const logOutAcc = createAsyncThunk(
    "logOutAcc",
    async (data, {dispatch}) => {
        try {
            await axios.post(logoutURL, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${JSON.parse(JSON.stringify(localStorage.getItem("tokenAccess")))}`,
                },
            });
            dispatch(setLogOut());
        } catch (error) {
            console.error(error);
        }
    }
);

const initialState = {
    logined: false,
    users: [],
    dataLog: {
        "username": '',
        "password": ''
    },
};

const authAndRegSlice = createSlice({
    name: 'authAndReg',
    initialState,
    reducers: {
        setUsername(state, action) {state.dataLog.username = action.payload},
        setPassword(state, action) {state.dataLog.password = action.payload},
        setLogined(state, action) {state.logined = action.payload},
        setLogOut(state) {state.logined = false}
    },
    extraReducers(builder) {
        builder.addCase(getUsers.fulfilled, (state, action) => {state.users = action.payload})
    },
});

export default authAndRegSlice.reducer;
export const {setLogined, setAccount, setUsername, setPassword, setLogOut} = authAndRegSlice.actions;