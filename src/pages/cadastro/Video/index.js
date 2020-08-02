import React from 'react';
import PagaDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <PagaDefault>
            <h1>Cadastro de Video</h1>

        <Link to="/cadastro/categoria">
           Cadastrar Categoria
        </Link>
        </PagaDefault>
    )
}

export default CadastroVideo;