import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useForm } from 'react-hook-form';
import './style.css';

export default function Signup() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const doSubmit = async (values) => {
        alert('Sign Up Successful. You are now logged in');
    };

    return (
        <Card className="p-4">
            <Row>
                <Col>
                    <h2>test</h2>
                </Col>
                <Col>
                    <h1>Masuk Akun 404</h1>
                    <Form onSubmit={handleSubmit(doSubmit)}>
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

                        {/* Agreement Checkbox */}
                        <Form.Check
                            type="checkbox"
                            id="agreementCheckbox"
                            label={
                                <span>
                                    Saya menyetujui{' '}
                                    <a href="#" className="link-dark">
                                        <b>kebijakan privasi</b>
                                    </a>{' '}
                                    404 Not Books
                                </span>
                            }
                            className="mb-3"
                            {...register('agreement', { required: 'Kamu harus menyetujui kebijakan privasi' })}
                        />
                        {errors.agreement && (
                            <Form.Text className="text-danger">{errors.agreement.message}</Form.Text>
                        )}

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-info mt-2 wide-button"
                        >
                            {isSubmitting ? 'Loading...' : 'Daftar'}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Card>
    );
}
