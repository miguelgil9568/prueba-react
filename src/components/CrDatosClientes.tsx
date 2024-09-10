import React, { useState } from 'react'
import { Formik } from 'formik'
import *  as Yup from 'yup'
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import Typography from '@mui/joy/Typography';
import Checkbox from '@mui/joy/Checkbox';
import Button from '@mui/joy/Button';

import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Card from '@mui/joy/Card';
import {  CardHeader, FormControl, FormLabel, Select } from '@mui/material'


const validateScheme = Yup.object().shape  ({
    nombre: Yup.string().required('El nombre es requerido'),
    apellido: Yup.string().required('El apellido es requerido'),
    correo: Yup.string().required('El correo es requerido'),
    direccion: Yup.string().required('El direccion es requerido'),
    numeroContacto: Yup.number().max(9999999999).required('El numero de contacto es requerido').required('La cantidad maxima de caracteres es 10')
})

const CrDatosClientes = () => {
    
    return (

        <>  
        
        <div style={{paddingTop: '2%'}}>  
            <Card
            variant="outlined"
            sx={{
                maxHeight: 'max-content',
                maxWidth: '60%',
                mx: 'auto',
                overflow: 'auto',
            }}
            >
            <Typography level="h1">
                Dejanos tus datos
            </Typography>
            <Typography level="title-lg" startDecorator={<InfoOutlined />}>
                !Hola!, esto es una prueba de formulario con FORMIK
            </Typography>
            <Divider inset="none" />        
            <Formik 
            initialValues={{
                nombre: '',
                apellido: '',
                correo: '',
                direccion: '',
                complemento: '',
                numeroContacto: ''
            }}
    
            validationSchema={validateScheme}
    
            onSubmit={(values) => {
                    console.log('Enviado a formik con valores', values);
                    window.alert('informacion adquirida con a formik con valores '+ (JSON.stringify(values)));
                }}>
                {({handleChange, handleSubmit ,values, errors})=>(
                        
                    <form  onSubmit={handleSubmit}>
                        <CardContent
                            sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                            gap: 1.5,
                            }}
                        >
                                    <FormControl >
                                        <FormLabel htmlFor="nombre" >
                                            Nombres
                                        </FormLabel>
                                        <Input value={values.nombre} onChange={handleChange} 
                                        type="text" name='nombre' id='nombre' 
                                        placeholder='Nombre'  />
                                        <span className='span-error'> {errors.nombre} </span>
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel htmlFor="apellido" >
                                            Apellidos
                                        </FormLabel>
                                        <Input value={values.apellido} onChange={handleChange} 
                                        type="text" name='apellido' id='apellido' 
                                        placeholder='Apellidos'  />
                                        <span className='span-error'> {errors.apellido} </span>
                                    </FormControl>
                                    
                                   
    
                                    <FormControl>
                                        <FormLabel htmlFor="correo" >
                                            Correo electronico
                                        </FormLabel>
                                        <Input value={values.correo} onChange={handleChange} 
                                        type="text" name='correo' id='correo' 
                                        placeholder='Correo' />
                                        <span className='span-error'> {errors.correo} </span>
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel htmlFor="numeroContacto" >
                                            Numero de contacto
                                        </FormLabel>
                                        <Input value={values.numeroContacto}  onChange={handleChange} 
                                        type="number" name='numeroContacto' id='numeroContacto' 
                                        placeholder='Numero de contacto' />
                                        <span className='span-error'> {errors.numeroContacto} </span>
                                    </FormControl>
                                    <FormControl sx={{ gridColumn: '1/-1' }}>
                                        <FormLabel htmlFor="direccion" sx={{ gridColumn: '1/-1' }} >
                                            Direccion
                                        </FormLabel>
                                        <Input value={values.direccion} onChange={handleChange} 
                                        type="text" name='direccion' id='direccion' 
                                        placeholder='Direccion' />
                                        <span className='span-error'> {errors.direccion} </span>
                                    </FormControl>
                                    
                                    <FormControl sx={{ gridColumn: '1/-1' }}>
                                        <FormLabel htmlFor="complemento" >
                                            Informacion adicional (Opcional) 
                                        </FormLabel>
                                        <Input value={values.complemento} onChange={handleChange} 
                                        type="text" name='complemento' id='complemento' 
                                        placeholder='Complemento' />
                                        <span className='span-error'> {errors.direccion} </span>
                                    </FormControl>
                            <CardActions sx={{ gridColumn: '1/-1' }}>
                                <Button type='submit' color='primary' >Enviar</Button>
                            </CardActions>
                        </CardContent>
                    </form>)}
                </Formik>
            </Card>
           </div> 
        </>
        // <Box sx={{
        //     display: 'flex',
        //     marginTop: 4,
        //     gap: 0,
        //     flexWrap: 'wrap',
        //     paddingInline: '7%',
        //     justifyContent: 'center'
        //   }}>
        //    
        // </Box>
      )
}

export default CrDatosClientes