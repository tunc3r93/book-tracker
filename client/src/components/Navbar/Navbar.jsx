import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>📚 Book Tracker</h1>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#282c34",
    padding: "1rem 2rem",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
  },
};

export default Navbar;
