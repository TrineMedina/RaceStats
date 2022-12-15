// Don't think I'll use the selection drawer, but I'm leaving it here in case I change my mind.

// import React from "react";
// import { Divider, Drawer, IconButton, Link, Toolbar } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useNavigate } from "react-router-dom";
//
// const SelectionDrawer = () => {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };
//
//   const navigate = useNavigate();
//
//   const handleButtonClick = (event) => {
//     navigate(event.target.id);
//   };
//
//   const drawerLinks = [
//     { id: "compareRaces", action: "Compare Races" },
//     { id: "addRace", action: "Add Race" },
//     { id: "deleteRace", action: "Delete Race" },
//     { id: "updateRace", action: "Update Race" },
//   ];
//
//   const links = [];
//   for (let i = 0; i < drawerLinks.length; i++) {
//     links.push(
//       <React.Fragment>
//         <Link
//           className="optionLink"
//           component="button"
//           id={drawerLinks[i].id}
//           key={drawerLinks[i].id}
//           underline="hover"
//           onClick={handleButtonClick}
//           sx={{
//             color: "#F6F5F5",
//             fontSize: 20,
//             m: 4,
//             minWidth: "2vw",
//           }}
//         >
//           {`${drawerLinks[i].action}`}
//         </Link>
//         <Divider sx={{ borderWidth: 1, borderColor: "#145374" }} />
//       </React.Fragment>
//     );
//   }
//
//   return (
//     <React.Fragment>
//       <Toolbar>
//         <IconButton
//           color="inherit"
//           key={"iconButton"}
//           aria-label="open drawer"
//           edge="start"
//           onClick={handleDrawerToggle}
//           sx={{ mr: 2, display: { sm: "none" } }}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         modalProps={{
//           keepMounted: true,
//         }}
//         sx={{
//           display: { sx: "block", sm: "none" },
//           "& .MuiDrawer-paper": {
//             boxSizing: "border-box",
//             backgroundColor: "#EE6F5",
//           },
//         }}
//       ></Drawer>
//       <Drawer
//         variant="permanent"
//         sx={{
//           display: { xs: "none", sm: "block" },
//           "& .MuiDrawer-paper": {
//             boxSizing: "border-box",
//             backgroundColor: "#EE6F57",
//             width: "12vw",
//           },
//         }}
//         open
//       >
//         {links}
//       </Drawer>
//     </React.Fragment>
//   );
// };
//
// export default SelectionDrawer;
