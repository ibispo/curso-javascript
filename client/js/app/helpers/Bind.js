class Bind {

    // Data binding (unidirecional) = Associação de dados
    // Associação do modelo com a view  

    /// ...prop --- rest operator

    constructor ( model, view, ...prop ) {

        let proxy = ProxyFactory.create( model, prop, 
            mod => view.update(mod) );

        view.update(model);

        // Só JS pode retornar a partir de um contructor()
        return proxy;

    }

}