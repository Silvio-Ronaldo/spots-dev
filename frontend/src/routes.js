import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dash" component={Dashboard} />
                <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    );
}

// Por padrão o BrowserRouter permite acesso a várias rotas simultaneamente
// Para resolver isso, usamos o Switch, que garante que apenas uma rota será acessada de cada vez

// O Route faz a verificação de caminho não por igualdade, mas verificando se o caminho contém o path
// Logo, para o path raiz, precisamos definir a propriedade 'exact'