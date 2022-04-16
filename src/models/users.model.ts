import { model, Schema, Document } from 'mongoose';
import { UserInformation } from '@interfaces/users.interface';

const userInformationSchema: Schema = new Schema({
  weight: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
});

const UserInformationModel = model<UserInformation & Document>('UserInformation', userInformationSchema);

export default UserInformationModel;
