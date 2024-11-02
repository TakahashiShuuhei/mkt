import React from 'react';
import { Avatar, Navbar, Sidebar, Container } from '@nextui-org/react';

const Layout: React.FC = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar>
        {/* Add Sidebar content here */}
      </Sidebar>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar>
          <div style={{ flex: 1 }}>
            {/* Add Navbar content here */}
          </div>
          <Avatar />
        </Navbar>
        <Container>
          {children}
        </Container>
      </div>
    </div>
  );
};

export default Layout;
