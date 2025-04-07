export interface IStep {
    id: number;
    title: string;
    description?: string;
    active: boolean;
    finish?: boolean;
}