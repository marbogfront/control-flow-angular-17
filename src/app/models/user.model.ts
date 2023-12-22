import { Experience } from "./experience.enum";

export interface User {
    fName: string;
    lName: string;
    age: number;
    jobPosition: string;
    skills: string[];
    experience: Experience;
}