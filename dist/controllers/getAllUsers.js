const getAllUsers = (req, res, next) => {
    const users = ['user1', 'user2', 'user3'];
    res.json({ users });
};
export default getAllUsers;
