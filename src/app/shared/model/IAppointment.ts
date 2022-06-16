import { IDoctor } from "../../admin/features/doctor/model/IDoctor";
import { IPatient } from "../../admin/features/patient/model/IPatient";

export interface IAppointment{
    id: string;
    appointmentDate : Date;
    startHour: {
        hour: number, minute: number
    };
    endHour: {
        hour: number, minute: number
    };
    patient: IPatient;
    doctorBooked: IDoctor;
}