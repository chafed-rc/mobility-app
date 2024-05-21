// app data types

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

  export interface AnalyticsData {
    distance: number;
    time: number;
    cadence: number;
    sway: number;
    swing: number;
    extension: number;
    pressure: number;
    stance: number;
    walkSpeed: number;
  }
  
  export interface User {
    name: string;
    date: string;
  }

  