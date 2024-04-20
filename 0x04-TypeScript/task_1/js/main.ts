interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
  }

interface Directors extends Teacher {
  numberOfReports: number;
  }

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  const initial = firstName.charAt(0).toUpperCase();
  return `${initial}. ${lastName}`;
  };


interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the class
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class Student implements StudentClass {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
