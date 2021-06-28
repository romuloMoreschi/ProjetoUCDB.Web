import { Produto } from './produto';

export interface HttpResponse {
    message: string;
    success: boolean;
    data: Produto[];
}

export interface HttpResponseGet {
    message: string;
    success: boolean;
    data: Produto;
}