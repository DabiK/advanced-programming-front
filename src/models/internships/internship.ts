import { Student } from '../students/student';
import { Company } from '../company/company';
import { Report } from '../report/report';
import { Soutenance } from '../soutenance/soutenance';
import { Visit } from '../visit/visit';

export interface Internship {
    id: string;
    company: Company;
    report?: Report;
    soutenance?: Soutenance;
    visit?: Visit;
    startingDate: Date;
    endingDate: Date;
    specificationsDone: boolean;
}
