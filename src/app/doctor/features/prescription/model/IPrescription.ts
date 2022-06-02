import { IDoctor } from "src/app/admin/features/doctor/model/IDoctor";
import { IPatient } from "./IPatient";

export interface IPrescription {
    id: string
    patient: IPatient;
    doctor?: IDoctor;
    pathology: string;
    symptoms: string;
    medicicePrescripted: string;
    procedure: string;
    feedback: string;
}