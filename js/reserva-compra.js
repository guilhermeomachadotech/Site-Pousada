function comprar(){
    var codSuite, nomeSuite, valorSuite, valorTotal, numHospedes, numDias, i, nomeRefeicao, precoRefeicao, adicionais=0;
    codSuite=document.frmDiarias.slcSuite.selectedIndex;
    nomeSuite=document.frmDiarias.slcSuite[codSuite].text;
    switch(codSuite){
        case 1:
            valorSuite=650.00;
            break;
        case 2:
            valorSuite=470.00;
            break;
        case 3:
            valorSuite=525.00;
            break;
        case 4:
            valorSuite=540.00;
            break;
        default:
            valorSuite=0;
    }
    numHospedes=parseInt(document.getElementById('numHospede').value);
    valorTotal=valorSuite*numHospedes;
    numDias=parseInt(document.getElementById('numDias').value);
    valorTotal=valorTotal*numDias;
    //radio:
    // codRefeicao=document.frmDiarias.radioRefeicoes.selectedIndex;
    // nomeRefeicao=document.frmDiarias.radioRefeicoes[codRefeicao].text;
    for(i = 0; i < document.frmDiarias.rdrefeicoes.length;i++){
        if(document.frmDiarias.rdrefeicoes[i].checked == true){
            break;
        }
    }
    if(parseInt(document.frmDiarias.rdrefeicoes[i].value)==0){
        precoRefeicao=10.00;
        nomeRefeicao="Café da Manhã";
    }else if(parseInt(document.frmDiarias.rdrefeicoes[i].value)==1){
        precoRefeicao=19.99;
        nomeRefeicao="Meia Pensão";
    }else{
        precoRefeicao=30.00;
        nomeRefeicao="Pensão Completa";
    }
    valorTotal=valorTotal+precoRefeicao;
    //
    //checkbox
    if(document.getElementById('translados').checked){
        adicionais=adicionais+30.00;
    }
    if(document.getElementById('cityTour').checked){
        adicionais=adicionais+35.00;
    }
    if(document.getElementById('passeio').checked){
        adicionais=adicionais+40.00;
    }
    valorTotal=valorTotal+adicionais;
    //
    document.getElementById('nomeSuite').innerHTML=nomeSuite;
    document.getElementById('precoTotal').innerHTML="Valor Total:R$ "+valorTotal;
    document.getElementById('hospede').innerHTML=numHospedes+" Hóspedes";
    document.getElementById('numDiarias').innerHTML=numDias+" Diárias";
    document.getElementById('nomeRefeicao').innerHTML=nomeRefeicao;
    document.getElementById('precoAdicionais').innerHTML="Adicionais: R$ "+adicionais;
}