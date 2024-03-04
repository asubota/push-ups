import { FC, ReactNode, useState } from 'react'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { FitnessCenter, Menu, ChevronLeft, History, QueryStats } from '@mui/icons-material'

export const Shell: FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerOpen} edge="start">
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ ml: 'auto' }}>
            Push Ups
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer onClose={handleDrawerClose} anchor="left" open={open}>
        <Box sx={{ display: 'flex', alignItems: 'center', minHeight: '56px' }}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ minWidth: '200px' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FitnessCenter />
              </ListItemIcon>
              <ListItemText primary="Track" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <QueryStats />
              </ListItemIcon>
              <ListItemText primary="Stats" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <History />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {children}
    </>
  )
}
