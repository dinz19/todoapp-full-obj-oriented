export class Todo {
    id: number;
    task: string = '';
    complete: boolean = false;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
 