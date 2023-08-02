// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import { NavBar } from './Navbar'; 

// describe('NavBar', () => {
//   test('renders without crashing', () => {
//     render(<NavBar />);
//   });

//   test('contains correct navigation links', () => {
//     render(
//       <MemoryRouter>
//         <NavBar />
//       </MemoryRouter>,
//     );

//     const logo = screen.getByText('Logo');
//     const home = screen.getByText('Home');
//     const about = screen.getByText('About');
//     const login = screen.getByText('Login');
//     const search = screen.getByPlaceholderText('Search');

//     expect(logo).toBeInTheDocument();
//     expect(home).toBeInTheDocument();
//     expect(about).toBeInTheDocument();
//     expect(login).toBeInTheDocument();
//     expect(search).toBeInTheDocument();

//     expect(logo.closest('a')).toHaveAttribute('href', '/');
//     expect(home.closest('a')).toHaveAttribute('href', '/');
//     expect(about.closest('a')).toHaveAttribute('href', '/about');
//     expect(login.closest('a')).toHaveAttribute('href', '/login');
//   });
// });
