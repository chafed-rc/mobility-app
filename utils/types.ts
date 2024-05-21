// mobility data types 


export interface MobilityData {
    mobilityIndex: number;
    strides: number;
    change: number;
    posture: number;
    heartRate: string;
    oxygen: string;
    sleep: string;
    medication: string;
    activity: string;
    fallRisk: string;
  }
  
  export interface User {
    name: string;
    date: string;
  }

  