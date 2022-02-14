/*
Ser autenticavel significa ter o método "senha"
*/
export class SistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}