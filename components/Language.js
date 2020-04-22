import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
    pt: { 
        conta: 'Entrar com Conta',
        anonimo: 'Entrar como Anónimo',
        descricao: 'Por Favor Introduza uma Descrição!',
        descricao250: 'A Descrição não deve Ultrapassar os 250 Caracteres!',
        notaadd: 'Nota Introduzida com Sucesso!',
        notadelete: 'Nota Eliminada com Sucesso!',
        notaedit: 'Nota Editada com Sucesso!',
        anonimotitulo: 'Anónimo',
        operacoes: 'Operações',
        notas: 'Notas',
        info: 'Informações',
        suporte: 'Suporte',
        creditos: 'Créditos',
        conta: 'Conta',
        defenicoes: 'Defenições',
        newnota: 'Adiciona Nova Nota',
        newnota2: 'Nova Nota',
        newnota3: 'Adiciona Nota',
        insertnota: 'Introduza uma Nota!',
        editnota: 'Editar Nota',
        editar: 'Editar',
        eliminar: 'Eliminar',
        entrar: 'Entrar',
        report: 'Reportar Problema',
        reports: 'Ver Problemas Reportados'
    },
    en: {
        conta: 'Enter With Account',
        anonimo: 'Enter has Anonymous',
        descricao: 'Please Insert a Description!',
        descricao250: 'The Description Shouldn\'t Surpass The 250 Characters!',
        notaadd: 'Note Successfully Added!',
        notadelete: 'Note Successfully Deleted!',
        notaedit: 'Note Successfully Edited',
        anonimotitulo: 'Anonymous',
        operacoes: 'Operations',
        notas: 'Notes',
        info: 'Informations',
        suporte: 'Suporte',
        creditos: 'Credits',
        conta: 'Account',
        defenicoes: 'Defenitions',
        newnota: 'Add New Note',
        newnota2: 'New Note',
        newnota3: 'Add Note',
        insertnota: 'Insert a Note!',
        editnota: 'Edit Note',
        editar: 'Edit',
        eliminar: 'Delete',
        entrar: 'Sign In',
        report: 'Report a Problem',
        reports: 'See Reported Problems'
    },
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default i18n;