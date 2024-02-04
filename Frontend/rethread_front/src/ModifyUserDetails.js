import React, { useState } from 'react';
import { TextField, Typography, Avatar, IconButton, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { InputAdornment } from '@mui/material';
import Container from '@mui/material/Container';
import useravatar from './useravatar.png';
import { Box } from '@mui/material';
import Footer from './Footer';

const sampleUserData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    contact: '123-456-7890',
    address: '123 Main St, City',
    earning: '$500',
    orders: 10,
    profilePic: 'https://example.com/john-doe-pic.jpg',
  },
  // Add more sample user data as needed
];

const ModifyUserDetails = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(sampleUserData);

  const handleSearch = () => {
    const results = sampleUserData.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(results);
  };

  const handleEdit = (field, userId, value) => {
    const updatedUsers = filteredUsers.map((user) =>
      user.id === userId ? { ...user, [field]: value } : user
    );
    setFilteredUsers(updatedUsers);
  };

  const handleDelete = (userId) => {
    const updatedUsers = filteredUsers.filter((user) => user.id !== userId);
    setFilteredUsers(updatedUsers);
  };

  return (
    <>
    <Container component="main" maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        View User Details
      </Typography>
      <TextField
        type="text"
        placeholder="Search user by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        label="Search User"
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        style={{ marginBottom: '20px' }}
      />

      {filteredUsers.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No users found.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {filteredUsers.map((user) => (
            <Grid item xs={12} key={user.id}>
              <Box
                style={{
                  border: '1px solid #ddd',
                  padding: '20px',
                  marginBottom:'10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  src={user.profilePic || useravatar}
                  alt={`Profile of ${user.name}`}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    marginBottom: '10px',
                    border: '2px solid #ccc',
                    backgroundColor: '#f0f0f0',
                  }}
                >
                  {!user.profilePic && 'U'}
                </Avatar>
                <TextField
                  label="Name"
                  value={user.name}
                  onChange={(e) => handleEdit('name', user.id, e.target.value)}
                  variant="outlined"
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Email"
                  value={user.email}
                  onChange={(e) => handleEdit('email', user.id, e.target.value)}
                  variant="outlined"
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Contact"
                  value={user.contact}
                  onChange={(e) => handleEdit('contact', user.id, e.target.value)}
                  variant="outlined"
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Address"
                  value={user.address}
                  onChange={(e) => handleEdit('address', user.id, e.target.value)}
                  variant="outlined"
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Earning"
                  value={user.earning}
                  onChange={(e) => handleEdit('earning', user.id, e.target.value)}
                  variant="outlined"
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Oders"
                  value={user.orders}
                  onChange={(e) => handleEdit('orders', user.id, e.target.value)}
                  variant="outlined"
                  style={{ marginBottom: '10px' }}
                />
                <IconButton onClick={() => handleDelete(user.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Grid>
          ))}
        </Grid>
      )
      }
    </Container >
    <Footer/>
    </>
  );
  
};

export default ModifyUserDetails;

