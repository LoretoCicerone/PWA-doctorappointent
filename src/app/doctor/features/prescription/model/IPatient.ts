import { IDoctor } from "src/app/admin/features/doctor/model/IDoctor";
import { IPrescription } from "./IPrescription";

export interface IPatient {
    name: string;
    email: string;
    phone_number?: string;
    gender?: string;
    date?: Date;
    time?: string;
    doctorAssociated?: IDoctor;
    prescription?: IPrescription;
}