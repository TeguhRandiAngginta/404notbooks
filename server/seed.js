import 'dotenv/config';

import { db } from './configs/db.js';

const users = [
    {
        username: 'Harist17',
        email: 'Heheheha@mail.com',
        password: '$2b$10$vD5yRWdxLp1j6riuSi/Ozu71x145viXeGC7AHT5R0WcycGalmYTae',
        role:'admin',
        avatar:
            'https://g.codewithnathan.com/default-user.png',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        username: 'Randi69',
        email: 'Teguh@mail.com',
        password: '$2b$10$vD5yRWdxLp1j6riuSi/Ozu71x145viXeGC7AHT5R0WcycGalmYTae',
        role:'customer',
        avatar:
            'https://g.codewithnathan.com/default-user.png',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];

const books = [
    {
        title: 'To Kill a Mockingbird', 
        author: 'Harper Lee', 
        category: 'Fiction', 
        year: 1960, 
        language: 'Indonesia', 
        description: 'kisah seorang anak laki-laki bernama Scout Finch yang hidup di sebuah kota kecil di Amerika Selatan pada tahun 1930-an. Scout dan saudarinya Jem harus menghadapi tantangan ketika ayah mereka, Atticus Finch, memutuskan untuk membela seorang pria kulit hitam yang dituduh melakukan kejahatan terhadap seorang wanita kulit putih.', 
        stock: 10, 
        price: 120.000, 
        image: 'https://imgs.search.brave.com/5_Id6Lou5jZyfrcdYPmLJx2xAj-SM2BoJFpKBdI7GHM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFJWFdaemxnU0wu/anBn',
    },
    {
        title: '1984', 
        author: 'George Orwell', 
        category: 'Science Fiction', 
        year: 1949,
        language: 'Inggirs', 
        description: 'menceritakan kisah seorang pria bernama Winston Smith yang hidup di sebuah negara totaliter yang dikenal sebagai Oceania. Di negara ini, pemerintah memiliki kontrol yang sangat ketat atas setiap aspek kehidupan warganya, dan Winston harus menghadapi konflik antara kebebasan individu dan kekuasaan pemerintah.', 
        stock: 15, 
        price: 270.000, 
        image:'https://imgs.search.brave.com/tVK22ObT0RGTcCJqdq_luNomjMRij5u8BhKucogLR1A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFzanpBOEVHaEwu/anBn',
    },
];

try {
    // Seeding Users
    let collection = db.collection('users');
    console.log('[seed]', 'Seeding Users...');
    const result = await collection.insertMany(users);
    console.log(result.insertedIds);
    console.log('[seed]', 'Seeding Users Done');

    // Seeding Books
    books[0].owner = result.insertedIds[0];
    books[1].owner = result.insertedIds[1];

    collection = db.collection('books');
    console.log('[seed]', 'Seeding Books...');
    await collection.insertMany(books);
    console.log('[seed]', 'Seeding Books Done');

    console.log('[seed]', 'All Done');
} catch (error) {
    console.log('[seed]', 'Error: ', error);
}

process.exit();