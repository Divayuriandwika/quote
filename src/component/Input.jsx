import React, {useEffect} from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import {addItem} from '../redux/actions/quoteAction'
// import {useDispatch} from 'react-redux'
// import {getAllItem} from '../redux/actions/quoteAction'

export default function Add() {

// 	const dispatch = useDispatch()

//   useEffect(() => {
   
//         dispatch(getAllItem());

// }, [dispatch]);

// console.log('test')



    return(
                        <Formik
									initialValues={{
										myquote: '',
										
									}}
									
									onSubmit={async(values) => {
										console.log(values);
										
										
                                        
									}}
								>
									{({ handleChange, handleSubmit, values, isSubmitting, errors, touched }) => {
										return (
											<form  noValidate onSubmit={handleSubmit}>
												<TextField
													variant="outlined"
													required
													fullWidth
													id="myquote"
													label="My Quote"
													name="myquote"
													autoComplete="myquote"
													onChange={handleChange}
													values={values.myquote}
                                                    size="small"
                                                    style={{ marginTop: 20, marginBottom: 20}}
												/>
												
												<Button
													type="submit"
													fullWidth
													variant="contained"
													color="inherit"
													disabled={isSubmitting}
													style={{
														borderRadius: '3px',
														fontFamily: 'Roboto, sans-serif',
														backgroundColor: '#329da8',
														marginTop: '10px',
														color: '#6C5434'
													}}
												>
													<b>Add</b>
												</Button>
											</form>
										);
									}}
								</Formik>
    )
}