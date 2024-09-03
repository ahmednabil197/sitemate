import { plugin } from "@typegoose/typegoose";
import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

@plugin(mongoosePaginate)
export default class PaginatedClass {
  static paginate: mongoose.PaginateModel<typeof PaginatedClass>['paginate']
}