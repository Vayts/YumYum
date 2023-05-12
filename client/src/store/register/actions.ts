import { createAction } from '@reduxjs/toolkit';

export const registerRequest = createAction('REGISTER_REQUEST', (values) => ({ payload: { values } })); 
