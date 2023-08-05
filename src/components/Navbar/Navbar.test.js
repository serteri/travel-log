const { render, screen } = require('@testing-library/react');
const { MemoryRouter } = require('react-router-dom');
const NavBar = require('./NavBar');

describe('NavBar', () => {
  it('renders correctly with navigation items', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

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
