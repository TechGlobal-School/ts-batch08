/** 
 * Enums
 * Enums allow a developer to define a set of named constants
 */

// Default enum
enum Status {
    ACTIVE, // 0
    INACTIVE, // 1
    DEACTIVATED // 2
}

// Numberic enum
enum RESPONSE {
    ERROR = 500,
    SUCCESS = 200
}

// String enum
enum RESPONSEMESAGE {
    ERROR = 'error',
    SUCCESS = 'ok'
}

// Use of enum
enum UserStatus {
    ACTIVE = 'active', 
    INACTIVE = 'inactive', 
    DEACTIVATED = 'deactivated'
}

interface User {
    id: number,
    name: string,
    status: UserStatus
}

const activeUser: User = {
    id: 1,
    name: 'Alex',
    status: UserStatus.ACTIVE
}

const inactiveUser: User = {
    id: 2,
    name: 'Alec',
    status: UserStatus.INACTIVE
}

const deactivatedUser: User = {
    id: 3,
    name: 'Aleksa',
    status: UserStatus.DEACTIVATED
}


/** 
 * Literal Types
 * Combined with union types, they can be powerful
 */

type EmployeeStatus = 'active' | 'inactive' | 'deactivated';

interface Employee {
    id: number,
    name: string,
    status: EmployeeStatus
}

const activeEmployee: Employee = {
    id: 1,
    name: 'Joe',
    status: 'active'
}

const inactiveEmployee: Employee = {
    id: 2,
    name: 'Joel',
    // status: 'iiinactive' => Type '"iiinactive"' is not assignable to type 'EmployeeStatus'.
    status: 'inactive'
}

const deactivatedEmployee: Employee = {
    id: 2,
    name: 'Joel',
    // status: 'iiinactive' => Type '"iiinactive"' is not assignable to type 'EmployeeStatus'.
    status: 'deactivated'
}