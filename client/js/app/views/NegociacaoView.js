class NegociacaoView extends View {
    
    template(model) {

        /*  
            Antigo
            ------

                <tbody>
                    ${model.listaNegociacao.map(n => {
                        return `
                            <tr>
                                <td>${DateHelper.dateToText(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>


                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td>${
                            (function() {  
                                let total = 0;
                                model.listaNegociacao.forEach(neg => total+=neg.volume);
                                return total;
                            })() // immediately invoked function expression (IIFE)
                        }</td>
                    </tr>
                </tfoot>




        */

        // `` = Template String 

        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th style='width: 25%;' class='tab-centro' onclick="negociacaoController.ordenar('data')">DATA</th>
                        <th style='width: 20%;' class='tab-direita' onclick="negociacaoController.ordenar('quantidade')">QUANTIDADE</th>
                        <th style='width: 27.5%;' class='tab-direita' onclick="negociacaoController.ordenar('valor')">VALOR</th>
                        <th style='width: 27.5%;' class='tab-direita' onclick="negociacaoController.ordenar('volume')">VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.listaNegociacao.map(n => `
                        <tr>
                            <td class='tab-centro'>${DateHelper.dateToText(n.data)}</td>
                            <td class='tab-direita'>${n.quantidade}</td>
                            <td class='tab-direita'>${DateHelper.valor(n.valor)}</td>
                            <td class='tab-direita'>${DateHelper.valor(n.volume)}</td>
                        </tr>
                    `).join('')}
                </tbody>
                
                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td class='tab-direita'>
                            ${DateHelper.valor(model.volumeTotal)}
                        </td>
                    </tr>
                </tfoot>
            </table>
            `;

    }

}

