class ProxyFactory {

    /*
        ES6 - ECMAScript 6 
        Proxy

        O padrão de projeto Proxy nada mais é do que um objeto "falso", "mentiroso", que 
        envolve e encapsula o objeto real que queremos interagir. É como se fosse uma interface, 
        entre o objeto real e o resto do código. Conseguimos assim controlar o acesso aos seus 
        atributos e métodos. Nele também podemos pendurar códigos que não cabem de estar 
        alocados nos nossos modelos, mas que necessitam ser executados no caso de uma 
        alteração ou atualização do mesmo.

    */

    // Handler do Proxy (trap) ES6

    // GET
    /* 
    get: function(target, property, receiver) {
        console.log(`Property ${property} was intercepted`);
        return Reflect.get(target,property,receiver);
    }
    */

    // SET 
    /*
    set: function(target, property, value, receiver) {
        console.log(`Property ${property}: Old value is ${target[property]} - New value is ${value}`);
        return Reflect.set( target,property,value, receiver );
    }
    */

    // Para resolver o problema da interceptação do método adicionar().
    // Quando o JS executa o método, ele faz um get() e um Reflect.apply.
    // Portanto, utilizaremos o get (solução cangaceiro...)


    /*
    O "target" é o objeto real que é encapsulado pela proxy. É este objeto que não queremos 
        "sujar" com armadilhas ou qualquer código que não diga respeito ao modelo.

    O "property" é a propriedade em si, que está sendo lida naquele momento.

    O "receiver" é a referência ao próprio proxy. É na configuração do handler do Proxy 
        que colocamos armadilhas.
    */


    static create(obj, prop, action) {

        return new Proxy( obj, { 

            get (target, property, receiver) {

                if ( prop.includes(property) && 
                    ProxyFactory._isFunction(target[property]) ) {

                    /* 
                        Tem que ser function() para ter o "this" dinâmico
                        Não pode ser arrowFunction que possui escopo léxico
                    */
                    return function() {

                        // console.log(`Intercepting property ${property}...`);
                        let retorno = Reflect.apply(target[property], target, arguments);
                        action(target);

                        return retorno;

                    }

                }

                return Reflect.get(target,property,receiver);

            },

            set ( target, property, value, receiver ) {

                let retorno = Reflect.set(target, property, value, receiver);

                if (property.includes(prop) ) {
                    // target[property] = value;
                    action(target);
                }
                
                return retorno;

            }

        });           

    }

    static _isFunction(func) {
        return typeof(func) == typeof(Function);
    }






}