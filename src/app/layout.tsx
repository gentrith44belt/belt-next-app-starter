import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "@src/lib/redux/StoreProvider";
import ThemeRegistry from "@src/lib/theme/ThemeRegistry";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  AppBar,
  Divider,
  Drawer,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ChecklistIcon from "@mui/icons-material/Checklist";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belt Next App",
  description: "Belt Next Template",
};

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  { text: "Posts", href: "/posts", icon: ChecklistIcon },
  { text: "Login", href: "/login", icon: LoginIcon },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ThemeRegistry>
            <AppBar position="fixed" sx={{ zIndex: 2000 }}>
              <Toolbar sx={{ backgroundColor: "background.paper" }}>
                <DashboardIcon
                  sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
                />
                <Typography variant="h6" noWrap component="div" color="black">
                  Belt Next App Starter
                </Typography>
              </Toolbar>
            </AppBar>

            <Drawer
              sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: DRAWER_WIDTH,
                  boxSizing: "border-box",
                  top: ["48px", "56px", "64px"],
                  height: "auto",
                  bottom: 0,
                },
              }}
              variant="permanent"
              anchor="left"
            >
              <Divider />
              <List>
                {LINKS.map(({ text, href, icon: Icon }) => (
                  <ListItem key={href} disablePadding>
                    <ListItemButton component={Link} href={href}>
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider sx={{ mt: "auto" }} />
            </Drawer>

            <Box
              component="main"
              sx={{
                flexGrow: 1,
                bgcolor: "background.default",
                ml: `${DRAWER_WIDTH}px`,
                mt: ["48px", "56px", "64px"],
                p: 3,
              }}
            >
              {children}
            </Box>
          </ThemeRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
