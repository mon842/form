import * as React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { useFormik } from 'formik'




const intrests = [
    'Painting',
    'Playing an instrument',
    'Reading',
    'Traveling',
    'DIY crafts',
];

const countries = [
    'India',
    'China',
    'USA',
    'Nepal',
];

const initialValues = {
    name: '',
    address: '',
    country: '',
    picked: '',
    intrest: [],
}
const validate = values => {
    let error = {};
    if (!values.name)
        error.name = 'required value'
    if (!values.address)
        error.address = 'required value'

    return error;
}
const onSubmit = async (values, onSubmitProps) => {
    console.log(values);
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
    onSubmitProps.resetForm();
}
const defaultTheme = createTheme();



export default function FormF() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    return (
        <ThemeProvider theme={defaultTheme} >

            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        mt: 8,
                        mb: 4,
                        p: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: 1,
                        borderRadius: '16px',
                        borderColor: 'primary.main'
                    }}
                >
                    <LoginIcon sx={{ m: 1}} />
                    <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
                        Sign in

                    </Typography>


                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <FormControl sx={{ width: '100%', mb: 2 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="outlined-basic"
                                label="User Name"
                                variant="outlined"
                                name='name'
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.name} />
                            {formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
                        </FormControl>

                        <FormControl sx={{ width: '100%', mb: 2 }}>
                            <TextField
                                required
                                fullWidth
                                label="Address"
                                multiline
                                rows={7}

                                id='address'
                                name='address'
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.address}
                            />
                            {formik.errors.address && formik.touched.address ? <div className='error'>{formik.errors.address}</div> : null}
                        </FormControl>
                        <br />

                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label" required >Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="picked"
                                onChange={formik.handleChange}
                                value={formik.values.picked}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl fullWidth sx={{ mt: 3 }}>
                            <InputLabel id="demo-simple-select-label" required>country</InputLabel>
                            <Select
                                name='country'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="country"
                                onChange={formik.handleChange}
                                value={formik.values.country}
                            >
                                {countries.map((i) => (
                                    <MenuItem
                                        key={i}
                                        value={i}
                                    >
                                        {i}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>


                        <FormControl fullWidth sx={{ mt: 3 }}>
                            <InputLabel id="demo-simple-select-label" required>intrests</InputLabel>
                            <Select
                                name='intrest'
                                multiple
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="intrest"
                                onChange={formik.handleChange}
                                value={formik.values.intrest}
                            >
                                {intrests.map((i) => (
                                    <MenuItem
                                        key={i}
                                        value={i}
                                    >
                                        {i}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {formik.values.name && formik.values.address && formik.values.country && formik.values.picked && formik.values.intrest[0] ? <Button sx={{
                            marginTop: 2, mb: 5
                        }} fullWidth variant="outlined" type='submit'>Submit</Button> : <Button sx={{
                            marginTop: 2, mb: 5
                        }} fullWidth disabled>Submit</Button>}
                    </Box>
                </Box>
            </Container>

        </ThemeProvider>

    );
}
