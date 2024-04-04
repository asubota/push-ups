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
import { FitnessCenter, Menu, ChevronLeft, CalendarMonth, QueryStats } from '@mui/icons-material'
import { Section } from '../types'

interface ShellProps {
  children: ReactNode
  onChange(section: Section): void
}

export const Shell: FC<ShellProps> = ({ children, onChange }) => {
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

      <Box sx={{ mt: '60px', p: 3 }}>{children}</Box>

      <Drawer onClose={handleDrawerClose} anchor="left" open={open}>
        <Box sx={{ display: 'flex', alignItems: 'center', minHeight: '56px' }}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ minWidth: '200px' }}>
          <ListItem
            disablePadding
            onClick={() => {
              onChange('track')
              handleDrawerClose()
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <FitnessCenter color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Track" />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            onClick={() => {
              onChange('stats')
              handleDrawerClose()
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <QueryStats color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Stats" />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            onClick={() => {
              onChange('calendar')
              handleDrawerClose()
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonth color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
