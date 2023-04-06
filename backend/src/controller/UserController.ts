import { IUser } from "../interfaces/IUser";
import User from "../models/User";
import { NextFunction, Request, Response } from "express";
// import validator from "validator";

class UserController {
  public async find(): Promise<IUser[]> {
    return User.find();
  }

  public async findByName(name: string): Promise<IUser | null> {
    return User.findOne({name})
  }

public async create(user: IUser): Promise<IUser> {
  return User.create(user);
}

  public async update(id: string, user: IUser): Promise<IUser | null> {
    return User.findByIdAndUpdate(id, user);
  }

  public async delete(id: string): Promise<IUser | null> {
    return User.findByIdAndDelete(id);
  }

  public async findByTerm(term: string): Promise<IUser[]> {
    if (!term) {
      throw new Error('Term not provided');
    }

    return User.find({ name: { $regex: term, $options: 'i' } });
  }
}

export default new UserController();