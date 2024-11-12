import React from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Autocomplete,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
  IconButton,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { alpha } from '@mui/material/styles';

export function MaterialUIComponent() {
  const options = ['React', 'Angular', 'Vue', 'Svelte', 'Next.js'];

  const rows = [
    { id: 1, name: 'John Doe', role: 'Senior Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'UI Designer', status: 'Away' },
    { id: 3, name: 'Mike Johnson', role: 'Project Manager', status: 'Busy' },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'success';
      case 'away':
        return 'warning';
      case 'busy':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ 
      maxWidth: 1200, 
      margin: '0 auto', 
      padding: 3,
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
    }}>
      {/* Header Section */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        mb: 4,
        gap: 2 
      }}>
        <DashboardIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 600,
            color: 'primary.main',
          }}
        >
          Dashboard Overview
        </Typography>
      </Box>

      {/* Alert Section */}
      <Alert 
        severity="success" 
        sx={{ 
          mb: 4,
          borderRadius: 2,
          boxShadow: 1,
          '& .MuiAlert-icon': {
            fontSize: '24px'
          }
        }}
      >
        Welcome to your dashboard! You have 3 new notifications.
      </Alert>

      {/* Card Section */}
      <Card 
        sx={{ 
          mb: 4,
          borderRadius: 2,
          boxShadow: (theme) => `0 0 24px ${alpha(theme.palette.primary.main, 0.1)}`,
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
          }
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Stack direction="row" alignItems="center" spacing={2} mb={3}>
            <Typography variant="h6" fontWeight="600" color="primary.main">
              User Information
            </Typography>
            <Chip 
              label="Personal Details" 
              size="small" 
              color="primary" 
              variant="outlined"
            />
          </Stack>
          <Divider sx={{ mb: 3 }} />
          <Box 
            component="form" 
            sx={{ 
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }
            }}
          >
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                }
              }}
            />
            <Autocomplete
              options={options}
              renderInput={(params) => (
                <TextField 
                  {...params} 
                  label="Select Technology"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    }
                  }}
                />
              )}
              fullWidth
            />
            <Button 
              variant="contained" 
              color="primary"
              sx={{ 
                mt: 2,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                boxShadow: (theme) => `0 4px 12px ${alpha(theme.palette.primary.main, 0.2)}`,
                '&:hover': {
                  boxShadow: (theme) => `0 6px 16px ${alpha(theme.palette.primary.main, 0.3)}`,
                }
              }}
            >
              Save Changes
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Table Section */}
      <TableContainer 
        component={Paper} 
        sx={{ 
          borderRadius: 2,
          boxShadow: (theme) => `0 0 24px ${alpha(theme.palette.primary.main, 0.1)}`,
          overflow: 'hidden'
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.main' }}>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Role</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Status</TableCell>
              <TableCell align="right" sx={{ color: 'white', fontWeight: 600 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow 
                key={row.id}
                sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
              >
                <TableCell sx={{ fontWeight: 500 }}>{row.name}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={getStatusColor(row.status) as any}
                    size="small"
                    sx={{ 
                      fontWeight: 500,
                      minWidth: 80
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton 
                    color="primary" 
                    size="small"
                    sx={{ 
                      mr: 1,
                      '&:hover': { backgroundColor: alpha('#1976d2', 0.1) }
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    color="error" 
                    size="small"
                    sx={{ '&:hover': { backgroundColor: alpha('#d32f2f', 0.1) } }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
