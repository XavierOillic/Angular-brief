export interface UserModel {
    name : {
        title: string;
        first: string;
        last: string;
    }
    dob : {
        age: number;
    }
    gender : string;
    location :{
        city: string;
    }

}