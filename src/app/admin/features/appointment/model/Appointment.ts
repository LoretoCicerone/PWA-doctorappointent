import { IDoctor } from "../../doctor/model/IDoctor";

export interface IAppointment{
    appointmentDate : Date;
    patient: string;
    email: string;
    phone_number: string;
    gender : string;
    appointmentTime: string;
    doctorBooked: IDoctor;
}