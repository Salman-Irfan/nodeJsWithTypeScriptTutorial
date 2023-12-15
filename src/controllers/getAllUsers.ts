import express, { NextFunction, Request, Response } from 'express';

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    const users:string[] = ['user1', 'user2', 'user3'];
    res.json({users})
};

export default getAllUsers;