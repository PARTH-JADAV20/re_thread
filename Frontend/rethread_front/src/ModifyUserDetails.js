import React, { useEffect, useState } from 'react';
import { TextField, Typography, Avatar, IconButton, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { InputAdornment } from '@mui/material';
import Container from '@mui/material/Container';
import useravatar from './useravatar.png';
import SaveIcon from '@mui/icons-material/Save';
import { Box } from '@mui/material';
import Footer from './Footer';
import axios, { isCancel, AxiosError } from 'axios';

const ModifyUserDetails = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/all-users")
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data); // Initialize filteredUsers with all users
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  const handleSearch = () => {
    const results = users.filter((user) =>
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

  const handleSave = (userId) => {
    const userToUpdate = users.find(user => user.id === userId);
    axios.put(`http://localhost:8000/update-user/${userId}`, userToUpdate)
      .then((response) => {
        // Handle successful update
        console.log("User updated successfully");
      })
      .catch((error) => {
        // Handle error
        console.error("Error updating user:", error);
      });
  };

  const renderArrayItems = (array) => {
    return array.join('\n');
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
                    marginBottom: '10px',
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
                  <div style={{ display: 'flex', gap: '10px' }}> {/* Style for the icons container */}
                    <IconButton onClick={() => handleDelete(user.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                    <IconButton color="success" onClick={() => handleSave(user.id)}>
                      <SaveIcon />
                    </IconButton>
                  </div>
                  <TextField
                    label="Name"
                    value={user.user_name}
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
                    label="Cart"
                    value={renderArrayItems(user.cart)}
                    variant="outlined"
                    multiline
                    style={{ marginBottom: '10px' }}
                  />
                  <TextField
                    label="Orders"
                    value={renderArrayItems(user.orders)}
                    variant="outlined"
                    multiline
                    style={{ marginBottom: '10px' }}
                  />


                </Box>
              </Grid>
            ))}
          </Grid>
        )
        }
      </Container >
      <Footer />
    </>
  );

};

export default ModifyUserDetails;

