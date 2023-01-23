exports.createPages = async ({ actions }) => {
    actions.createSlice({
        id: `navbar`,
        component: require.resolve(`./src/components/Navbar.jsx`),
    });
};
