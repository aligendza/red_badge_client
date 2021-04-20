export interface UserData {
    user: UserDetails;
    sessionToken: string;
}

export interface UserDetails {
    id: number;
    email: string;
    password: string;
    isAdmin: string;
}

export interface YogaPose {
    id: number;
    nameEng: string;
    nameSans: string;
    imgUrl: string;
    poseCat: string;
}

export interface SeqPoses {
    id: number;
    poseId: number;
    sequenceId: number;
}

export interface YogaSec {
    id: number;
    owner: number;
    title: string;
    posesInSequence: any;
}