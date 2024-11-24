import React from 'react';
import toast from 'react-hot-toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import logo from '../assets/logo/logoWeb.png';
import img from '../assets/logo/log1.png';
import { useForm } from 'react-hook-form';
import './style.css';

export default function Signup() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const doSubmit = async () => {
        toast.success('Sign Up Successful. You are now logged in');
    };

    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #d8e9f0, #c3f0c8, #b5a3f3)', // Warna gradien
                padding: '20px',
            }}
        >
            <Card className="p-5 w-75 card">
                <Row>
                    {/* Bagian Kiri */}
                    <Col md={6} className="text-center">
                        <div className="d-flex justify-content-center align-items-center mb-3 mt-3">
                            <Image src={logo} roundedCircle className="logo me-2 mb-2" />
                            <h3 className='archivo'>Not Books</h3>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Image src={img} rounded className="log1" />
                        </div>
                    </Col>

                    {/* Bagian Kanan */}
                    <Col md={6} >
                        <Form onSubmit={handleSubmit(doSubmit)} className='text-center'>
                            <h2 className="mb-4 archivo">Daftar Akun 404</h2>
                            {/* Email Field */}
                            <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    {...register('email', { required: 'Masukkan email' })}
                                />
                                {errors.email && (
                                    <Form.Text className="text-danger">{errors.email.message}</Form.Text>
                                )}
                            </FloatingLabel>

                            {/* Username Field */}
                            <FloatingLabel controlId="floatingInput" label="Nama Lengkap" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Alexandro Dronolo"
                                    {...register('username', { required: 'Masukkan Nama Lengkap' })}
                                />
                                {errors.username && (
                                    <Form.Text className="text-danger">{errors.username.message}</Form.Text>
                                )}
                            </FloatingLabel>

                            {/* Password Field */}
                            <FloatingLabel controlId="floatingPassword" label="Kata Sandi">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    className="mb-3"
                                    {...register('password', { required: 'Masukkan Kata Sandi' })}
                                />
                                {errors.password && (
                                    <Form.Text className="text-danger">{errors.password.message}</Form.Text>
                                )}
                            </FloatingLabel>

                            {/* Confirm Password Field */}
                            <FloatingLabel controlId="floatingConfirmPassword" label="Ulangi Kata Sandi">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    className="mb-3"
                                    {...register('confirmPassword', { required: 'Masukkan konfirmasi kata sandi' })}
                                />
                                {errors.confirmPassword && (
                                    <Form.Text className="text-danger">
                                        {errors.confirmPassword.message}
                                    </Form.Text>
                                )}
                            </FloatingLabel>

                            <Form.Check
                                type="checkbox"
                                id="agreementCheckbox"
                                label={
                                    <span className='dm-sans'>
                                        Saya menyetujui <a href="#" className="link-dark"><b>kebijakan privasi</b></a> 404 Not Books
                                    </span>
                                }
                                className="mb-3"
                                {...register('agreement', { required: 'Kamu harus menyetujui kebijakan privasi' })}
                            />
                            {errors.agreement && (
                                <Form.Text className="text-danger">{errors.agreement.message}</Form.Text>
                            )}

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-info mt-2 wide-button dm-sans"
                            >
                                {isSubmitting ? 'Loading...' : <strong>Daftar</strong>}
                            </Button>
                            <p className="mt-3 mb-5 dm-sans">
                                Sudah Punya Akun? <a href="#" className="link-dark"><b>Masuk</b></a>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}
