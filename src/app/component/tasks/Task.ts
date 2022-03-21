export interface Task{
    filter(arg0: (newTasks: any) => boolean): Task;
    id?:number,
    text: string,
    day: string,
    reminder: boolean
}
