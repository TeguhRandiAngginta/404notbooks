import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './style.css';

export default function PrivacyPolicy() {
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
                <Col>
                    <h1>Kebijakan Privasi</h1>
                    <p>
                        Selamat datang di 404 Not Books! Privasi Anda adalah hal yang sangat penting bagi kami.
                        Dalam halaman ini, kami menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.
                    </p>

                    <h2>Pengumpulan Informasi</h2>
                    <p>
                        Kami dapat mengumpulkan informasi pribadi seperti nama, alamat email, nomor telepon,
                        dan data lainnya ketika Anda mendaftar atau menggunakan layanan kami. Selain itu,
                        kami juga mengumpulkan informasi non-pribadi, seperti jenis perangkat, lokasi,
                        dan kebiasaan penggunaan, untuk meningkatkan pengalaman Anda di website kami.
                    </p>

                    <h2>Penggunaan Informasi</h2>
                    <p>Data pribadi yang kami kumpulkan digunakan untuk:</p>
                    <ul>
                        <li>Mengelola pesanan dan pengiriman buku.</li>
                        <li>Menyediakan layanan pelanggan yang lebih baik.</li>
                        <li>Mengirimkan penawaran, promosi, atau survei yang relevan.</li>
                    </ul>

                    <h2>Keamanan Data</h2>
                    <p>
                        Kami menggunakan teknologi keamanan terkini untuk melindungi data pribadi Anda
                        dari akses tidak sah, kehilangan, atau penyalahgunaan. Namun, harap diingat bahwa
                        tidak ada sistem keamanan yang 100% aman.
                    </p>

                    <h2>Cookie</h2>
                    <p>
                        Website kami menggunakan cookie untuk mempersonalisasi pengalaman Anda,
                        seperti mengingat preferensi Anda atau menganalisis perilaku pengunjung.
                        Anda dapat mengelola preferensi cookie melalui pengaturan browser Anda.
                    </p>

                    <h2>Pembaruan Kebijakan</h2>
                    <p>
                        Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Kami akan memberitahu Anda
                        melalui email atau pemberitahuan di website jika ada perubahan signifikan.
                    </p>

                    <h2>Hubungi Kami</h2>
                    <p>
                        Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami di
                        <a href="mailto:test@gmail.com">test@gmail.com</a>.
                    </p>
                </Col>
            </Row>
            </Card>
        </Container>
    );
}