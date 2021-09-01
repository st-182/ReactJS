const ul = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
  overflow: "hidden",
  backgroundColor: "#333",
};

const li = {
  float: "left",
};

const a = {
  display: "block",
  color: "white",
  textAlign: "center",
  padding: "14px 16px",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "#111",
  },
};

/* Change the link color to #111 (black) on hover */
const hover = {
  backgroundColor: "#111",
};

export { ul, li, a, hover };
