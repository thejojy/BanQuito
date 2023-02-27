import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "src/app/models/clientes";

@Injectable({

    providedIn: 'root'


})
export class ClienteService {
    url = "http://localhost:3600/guardar-cliente/";
    urlVerificar = "http://localhost:3600/validarCedula/";
    urlObtenerCliente = "http://localhost:3600/cliente/";
    urlActualizarCliente = "http://localhost:3600/actualizar-cliente/";
    urlCorreo = "http://localhost:3600/validar-email/";
    urlNombreCliente = "http://localhost:3600/get-nombre/"

    constructor(
        private http: HttpClient
    ) { }
    guardarCliente(cliente: Cliente): Observable<any> {
        return this.http.post(this.url, cliente);
    }
    validarCliente(cliente: Cliente): Observable<any> {
        return this.http.post(this.urlVerificar, cliente);
    }
    obtenerCliente(cedula:object):Observable<any>{
        return this.http.post(this.urlObtenerCliente, cedula);
    }
    actualizarCliente(cliente: object): Observable<any> {
        return this.http.post(this.urlActualizarCliente, cliente);
    }
    validarCorreo(correo:Object){
        return this.http.post(this.urlCorreo, correo);
    }
    extraerNombre(cedula:Object): Observable<any>{
        return this.http.post(this.urlNombreCliente, cedula);
    }
}