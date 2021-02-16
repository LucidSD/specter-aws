import { stringify } from "querystring";

type dataProperties = 'apiKey' | 'language';

export default class DataController {
  private static instance: DataController;

  private apiKey: string;

  private language: string;

  private constructor() {}

  public static getInstance(): DataController {
    if (!DataController.instance) {
      DataController.instance = new DataController();
    }
    return DataController.instance;
  }

  public get(key: dataProperties): string {
    return this[key];
  }

  public set(key: dataProperties, value: string): void {
    this[key] = value;
    console.log(`TmDb set ${key}`);
  }
}
