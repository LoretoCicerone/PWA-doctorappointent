import { IDoctor } from "../../admin/features/doctor/model/IDoctor";
import { IPatient } from "../../admin/features/patient/model/IPatient";

export interface IAppointment{
    id: string;
    appointmentDate : Date;
    startHour: {
        hour: string, minute: string
    };
    endHour: {
        hour: string, minute: string
    };
    patient: IPatient;
    doctorBooked: IDoctor;
}